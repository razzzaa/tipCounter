import { useState } from "react";
import Modal from "./Modal";

export default function Tip({
  id,
  tip,
  percentage,
  index,
  children,
  onSelect,
  setTip,
  isOpen,
  setGlobalOpen,
  globalOpen,
  handleRemove,
}) {
  console.log(globalOpen);
  function handleAdd(id, percentage) {
    setTip(
      tip.map((tips) =>
        tips.id === id ? { id: id, percent: percentage, isOpen: true } : tips
      )
    );
  }

  function handleOpen(id, percentage) {
    setTip(
      tip.map((tips) =>
        tips.id === id ? { id: id, percent: percentage, isOpen: true } : tips
      )
    );
  }

  function handleClose() {
    setTip(
      tip.map((tips) =>
        tips.id === id ? { id: id, percent: 0, isOpen: false } : tips
      )
    );
    setGlobalOpen(false);
  }
  function handleAddBtn() {
    setTip(
      tip.map((tips) =>
        tips.id === id ? { id: id, percent: percentage, isOpen: false } : tips
      )
    );
    setGlobalOpen(false);
  }
  return (
    <div>
      <div className={globalOpen ? "openModal" : ""}>
        <label htmlFor={index}>{children}</label>
        <select
          onChange={(e) => {
            if (Number(e.target.value) === percentage) {
              handleOpen(id, percentage);
              setGlobalOpen(true);
            } else {
              onSelect(Number(e.target.value), index);
            }
          }}
          value={percentage}
          name={index}
          id={id}
          key={index}
          className="tipSelect"
        >
          <option value={0}>dissatisfied 0%</option>
          <option value={5}>ok 5%</option>
          <option value={10}>good 10%</option>
          <option value={15}>amazing 15%</option>
          <option value={percentage}>other - {percentage}%</option>
        </select>
        {index !== 0 ? (
          <button
            onClick={() => handleRemove(id)}
            className="delete"
            style={{
              fontSize: "10px",
              backgroundColor: "transparent",
              borderRadius: "5px",
              border: "1px solid black",
            }}
          >
            ❌
          </button>
        ) : (
          ""
        )}
      </div>
      {isOpen && (
        <Modal
          handleClose={handleClose}
          setTip={setTip}
          id={id}
          percentage={percentage}
          handleAdd={handleAdd}
          handleAddBtn={handleAddBtn}
        />
      )}
    </div>
  );
}
