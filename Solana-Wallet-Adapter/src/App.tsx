import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { RequestAirdrop } from "./components/RequestAirdrop";
import { ShowBalance } from "./components/ShowBalance";

const App = () => {
  return (
    <>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div
              style={{
                display: "flex",
                width: "100vw",
                justifyContent: "center",
              }}
            >
              <WalletMultiButton />
            </div>
            <div
              style={{
                display: "flex",
                width: "100vw",
                justifyContent: "center",
              }}
            >
              <ShowBalance />
            </div>
            <br />
            <div
              style={{
                display: "flex",
                width: "100vw",
                justifyContent: "center",
              }}
            >
              <RequestAirdrop />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default App;
