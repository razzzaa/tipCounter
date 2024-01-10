export default function Bill({ bill, setBill, isOpen, globalOpen }) {
  return (
    <div className={globalOpen ? "openModal" : ""}>
      <label htmlFor="bill">how much was the bill? </label>
      <input
        onChange={(e) => setBill(Number(e.target.value))}
        placeholder="Bill Value"
        value={bill}
        type="text"
        name="bills"
        id="bill"
      />
    </div>
  );
}
