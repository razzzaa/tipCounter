export default function Buttons({ setTip, tip, handleReset, globalOpen }) {
  function handleAddFriend() {
    setTip([
      ...tip,
      { id: Math.floor(Math.random() * 1000000), percent: 0, isOpen: false },
    ]);
  }

  return (
    <div className={globalOpen ? "openModal" : ""}>
      <button className="addFrnd" onClick={handleAddFriend}>
        Add Friend
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
