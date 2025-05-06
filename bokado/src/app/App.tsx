import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';  // Для гостей
// import HomePage from '../pages/HomePage';  // Для авторизованих користувачів
// import AdminPage from '../pages/AdminPage';  // Для адмінів
import ProtectedRoute from './ProtectedRoute';  // Для перевірки доступу

const App = () => {
  return (
    <div>
      <Routes>
        {/* Головна сторінка доступна для всіх */}
        <Route path="/main" element={<MainPage />} />

        {/* Маршрут для авторизованих користувачів */}
        <Route element={<ProtectedRoute allowedRoles={['authorized', 'premium', 'admin']} />}>
          {/* <Route path="/home" element={<HomePage />} /> */}
        </Route>

        {/* Маршрут для адмінів */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          {/* <Route path="/admin" element={<AdminPage />} /> */}
        </Route>

        {/* Якщо не знайдено маршрут, редиректимо на MainPage */}
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;