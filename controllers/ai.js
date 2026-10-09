const { validationResult } = require('express-validator');
const { HTTP_STATUS } = require('../utils/constants');
const { asyncHandler, AppError } = require('../utils/errors');
const { sendValidationError } = require('../utils/response');

const buildFaithfulImagePrompt = (prompt) => {
  const normalizedPrompt = prompt.replace(/\s+/g, ' ').trim();

  return [
    'Create one polished NFT artwork that matches the input description exactly.',
    'Do not add unrelated objects, remove described details, or change the meaning of the scene.',
    'Preserve every subject, action, color, mood, style, and composition from the user prompt.',
    'Keep the rendered image clear, detailed, and suitable for a collectible NFT.',
    `Description: ${normalizedPrompt}`,
  ].join(' ');
};

const generateImage = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return sendValidationError(res, errors.array());
  }

  const { prompt } = req.body;
  const trimmedPrompt = prompt ? String(prompt).trim() : '';

  if (!trimmedPrompt) {
    throw new AppError('AI prompt is required', HTTP_STATUS.BAD_REQUEST);
  }

  let imageUrl;

  if (process.env.OPENAI_API_KEY) {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-image-1',
        prompt: buildFaithfulImagePrompt(trimmedPrompt),
        size: '1024x1024',
        quality: 'high',
      }),
      signal: AbortSignal.timeout(120000),
    });

    if (!response.ok) {
      throw new AppError('Failed to generate image from OpenAI', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }

    const payload = await response.json();
    const responseData = payload?.data?.[0];

    if (!responseData) {
      throw new AppError('Failed to generate image from OpenAI', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }

    if (responseData.b64_json) {
      imageUrl = `data:image/png;base64,${responseData.b64_json}`;
    } else if (responseData.url) {
      imageUrl = responseData.url;
    } else {
      throw new AppError('Unexpected image generation response', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
  } else {
    const seed = encodeURIComponent(trimmedPrompt.slice(0, 200));
    imageUrl = `https://api.dicebear.com/6.x/pixel-art/png?seed=${seed}&size=1024`;
  }

  return res.status(HTTP_STATUS.OK).json({
    success: true,
    data: { imageUrl },
  });
});

module.exports = {
  generateImage,
};
