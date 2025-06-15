import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";

export const ShowBalance = () => {
  const { connection } = useConnection();

  const wallet = useWallet();

  async function getUserbalance() {
    const balance = await connection.getBalance(wallet.publicKey);
    document.getElementById("balance").innerHTML = (balance / 1e9).toFixed(2); // Convert lamports to SOL
  }

  useEffect(() => {
    getUserbalance();
  }, [wallet]);

  return (
    <div>
      Balance: <span id="balance"></span> SOL
    </div>
  );
};
