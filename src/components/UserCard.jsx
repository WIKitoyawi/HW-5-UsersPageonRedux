import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  console.log(user); // Логирование данных, чтобы убедиться, что все поля присутствуют
  return (
    <div className="user-card">
      <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="avatar" />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <Link to={`/users/${user.id}`}>Подробнее</Link>
    </div>
  );
}

export default UserCard;
