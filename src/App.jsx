import menuIcon from "@assets/menu-bar.svg";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <div className="title">
            RAMONNYA NIKAYA MON PITAKA THEIK MONASTERY
          </div>
          <div className="menu">
            <div className="menu__text">
              Menu
              <img className="menu__icon" src={menuIcon} />
            </div>
          </div>
        </header>
        <article></article>
      </div>
    </>
  );
}

export default App;
