function Header({ globalOpen }) {
  return (
    <div className={globalOpen ? "openModal" : ""}>
      <h1 className="header">Tip Counter💳</h1>
    </div>
  );
}

export default Header;
