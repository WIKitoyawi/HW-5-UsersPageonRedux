import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserByIdAsync } from "../store/slice/usersSlice";  // Экшен для получения одного пользователя

function UserDetail() {
  const { id } = useParams();  // Получаем id из URL
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.detail);  // Получаем данные пользователя из Redux
  const loading = useSelector((state) => state.users.loading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserByIdAsync(id));  // Загружаем данные пользователя по id
  }, [dispatch, id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!user) {
    return <p>Пользователь не найден</p>;
  }

  return (
    <div className="user-detail">
      <button onClick={() => navigate("/users")}>Назад к списку пользователей</button>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Телефон: {user.phone}</p>
      <p>Геолокация: {user.address.geo.lat}, {user.address.geo.lng}</p>
      <p>Логин: {user.username}</p>
      <p>Пароль: {user.password}</p>
    </div>
  );
}

export default UserDetail;
