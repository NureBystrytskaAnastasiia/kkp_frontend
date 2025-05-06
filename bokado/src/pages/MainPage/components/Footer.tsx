import React from 'react';
import '../styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <a href="#" className="footer-logo">Bokado</a>
            <p>Соціальна платформа для активної української молоді. Знаходь друзів, бери участь у челенджах та розвивайся разом з нами.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Платформа</h3>
            <ul>
              <li><a href="#">Функції</a></li>
              <li><a href="#">Челенджи</a></li>
              <li><a href="#">Події</a></li>
              <li><a href="#">Бейджі</a></li>
              <li><a href="#">Тарифи</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Компанія</h3>
            <ul>
              <li><a href="#">Про нас</a></li>
              <li><a href="#">Команда</a></li>
              <li><a href="#">Вакансії</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Контакти</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Допомога</h3>
            <ul>
              <li><a href="#">Центр підтримки</a></li>
              <li><a href="#">Безпека</a></li>
              <li><a href="#">Політика конфіденційності</a></li>
              <li><a href="#">Умови використання</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Bokado. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
