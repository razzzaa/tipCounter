export default function Modal({ handleAdd, handleClose, id, handleAddBtn }) {
  return (
    <div className="background">
      <div className="container">
        <header className="modalHeader">
          <h3>Choose Tip Percentage </h3>
        </header>
        <main className="main">
          <input
            onChange={(e) => handleAdd(id, Number(e.target.value))}
            placeholder="tip value"
            type="text"
          ></input>
        </main>
        <footer>
          <button onClick={handleAddBtn} className="addBtn">
            add
          </button>
          <button onClick={handleClose} className="cancelBtn">
            cancel
          </button>
        </footer>
      </div>
    </div>
  );
}
