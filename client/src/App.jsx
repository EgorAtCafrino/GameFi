import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import { ScrollToTop } from "./components/Components";
import CafrinoShell from "./components/cafrino/CafrinoShell";
import {
  Home,
  NFTs,
  Rankings,
  Trading,
  SportsBetting,
  Roulette,
  Slots,
  Staking,
  Transactions,
  Support,
  SignUp,
  LogIn,
  User,
  Member,
  NFTLab,
  AICreateNFT,
  Product,
  GameBuilder,
  Deployment,
  Analytics,
} from "./pages/Pages";
import RawData from "./data/data.json";

function App() {
  const [data, setData] = useState(RawData);
  const HadelMemberPage = () => {
    const { userName } = useParams();
    return <Member Data={data} userName={userName} />;
  };

  const HadelProductPage = () => {
    const { productName } = useParams();
    return <Product Data={data} productName={productName} />;
  };

  return (
    <div className="app-container">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<CafrinoShell />}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home Data={data} />} />
            <Route path="/builder" element={<GameBuilder />} />
            <Route path="/deploy" element={<Deployment />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route
              path="/nfts"
              element={<NFTs Data={data.NFTsMarket} setData={setData} />}
            />
            <Route path="/rankings" element={<Rankings Data={data} />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/sports-betting" element={<SportsBetting />} />
            <Route path="/roulette" element={<Roulette />} />
            <Route path="/slots" element={<Slots />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/support" element={<Support />} />
            <Route
              path="/account"
              element={
                data.Access.haveaccess ? (
                  <User Data={data} setData={setData} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/user/:userName" element={<HadelMemberPage />} />
            <Route path="/NFT/:productName" element={<HadelProductPage />} />
            <Route
              path="/nftlab"
              element={
                data.Access.haveaccess ? (
                  <NFTLab Data={data} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/nftlab/ai"
              element={
                data.Access.haveaccess ? (
                  <AICreateNFT Data={data} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Route>

          <Route
            path="/signup"
            element={
              !data.Access.haveaccess ? (
                <SignUp setData={setData} />
              ) : (
                <Navigate to="/account" replace />
              )
            }
          />
          <Route
            path="/login"
            element={
              !data.Access.haveaccess ? (
                <LogIn Data={data.Access} setData={setData} />
              ) : (
                <Navigate to="/account" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
