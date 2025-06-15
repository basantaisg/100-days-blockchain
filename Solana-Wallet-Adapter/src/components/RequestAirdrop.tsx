import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export const RequestAirdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function RequestAirdrop() {
    const amount = document.getElementById("amount")?.innerText;
    await connection.requestAirdrop(
      wallet.publicKey,
      +amount * LAMPORTS_PER_SOL
    );
    alert(
      `Airdrop of ${amount} SOL requested! to ${wallet.publicKey?.toBase58()}`
    );
  }

  return (
    <div>
      <input id="amount" type="text" placeholder="Amount...." />
      <button onClick={RequestAirdrop}>Request Airdrop</button>
    </div>
  );
};
