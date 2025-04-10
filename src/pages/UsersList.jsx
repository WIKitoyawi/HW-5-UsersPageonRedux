import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsync } from "../store/slice/usersSlice";  // Импортируем асинхронный экшен
import UserCard from "../components/UserCard";

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);  // Получаем список пользователей из Redux
  const loading = useSelector((state) => state.users.loading);  // Проверяем состояние загрузки

  // Загружаем пользователей при монтировании компонента
  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  // Проверяем, если данные еще загружаются
  if (loading) {
    return <p>Загрузка...</p>;
  }

  // Если список пользователей пуст, отображаем сообщение
  if (!users || users.length === 0) {
    return <p>Пользователи не найдены.</p>;
  }

  return (
    <div className="users-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />  // Отображаем каждого пользователя через компонент UserCard
      ))}
    </div>
  );
}

export default UsersList;
