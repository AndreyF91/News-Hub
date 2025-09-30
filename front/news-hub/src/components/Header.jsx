import "./Header.scss";
import {useState} from 'react'

const Header = () => {

  const [active, setActive] = useState(false);


  const clickHandler = (e) => {
      setActive(!active)
  }

  return (
    <header className="header">
    <div className="header_container">
      <div className="header_logo"></div>
      <nav className="header_menu">
        <ul>
          <li className="header_menu--item">Главная</li>
          <li className="header_menu--item">
            <select name="sourceName" className="header_menu--item">
              <option value="VG">Вечерний Гродно</option>
              <option value="VG">Вечерний Гродно</option>
            </select>
          </li>
          <li className="header_menu--item">О проекте</li>
        </ul>
      </nav>
      <search className="header_search">
        <input type="text" className={active ? "header_search_field--active" : "header_search_field"} />
        <div onClick={clickHandler} className="header_search_btn"></div>
      </search>
    </div>
      
    </header>
  );
};

export default Header;
