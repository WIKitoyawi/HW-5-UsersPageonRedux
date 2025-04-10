import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/users">Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;
