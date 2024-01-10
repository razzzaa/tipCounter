function SideBar({ setMainColor }) {
  const colors = [
    "#D14836",
    "#49c5b6",
    "#2779a7",
    "#DF6C4F",
    "#9C9C9C",
    "#ECD06F",
    "#FF9398",
    "White",
  ];
  return (
    <div className="mainBar">
      {colors.map((colorz) => (
        <>
          <div
            onClick={() => setMainColor(colorz)}
            style={{
              backgroundColor: colorz,
              boxShadow: "1px 21px 12px 1px rgba(0,0,0,1.75)",
              color: colorz === "White" ? "black" : "white",
            }}
            className="fams"
          >
            {colorz}
          </div>
        </>
      ))}
    </div>
  );
}

export default SideBar;
