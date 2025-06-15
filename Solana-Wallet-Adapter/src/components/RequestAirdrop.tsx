export const RequestAirdrop = () => {
  function RequestAirdrop() {
    alert("Airdrop requested!");
  }

  return (
    <div>
      <input type="text" placeholder="Amount...." />
      <button onClick={RequestAirdrop}>Request Airdrop</button>
    </div>
  );
};
