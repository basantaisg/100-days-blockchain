import { useWallet } from "@solana/wallet-adapter-react";

export const RequestAirdrop = () => {
  const wallet = useWallet();

  function RequestAirdrop() {
    let publicKey = wallet.publicKey?.toBase58();
  }

  return (
    <div>
      <input type="text" placeholder="Amount...." />
      <button onClick={RequestAirdrop}>Request Airdrop</button>
    </div>
  );
};
