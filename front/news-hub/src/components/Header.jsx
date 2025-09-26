import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
    <div className="header_container">
      <div className="header_logo"></div>
      <nav className="header_menu">
        <ul>
          <li className="header_menu--item">Главная</li>
          <li className="header_menu--item">Газеты</li>
          <li className="header_menu--item">О проекте</li>
        </ul>
      </nav>
      <div className="header_search">
        <input type="text" className="header_search--item" />
      </div>
    </div>
      
    </header>
  );
};

export default Header;
