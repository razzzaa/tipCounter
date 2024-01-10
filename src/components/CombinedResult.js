export default function CombinedResult({ finalTip, bill, globalOpen }) {
  if (bill === "") return;

  return (
    <div className={globalOpen ? "openModal" : ""}>
      <h3>
        You pay ${bill + finalTip} (${bill} Bill + ${finalTip} Tip)
      </h3>
    </div>
  );
}
