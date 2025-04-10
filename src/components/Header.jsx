import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/users">Список пользователей</Link>
      </nav>
    </header>
  );
}

export default Header;
