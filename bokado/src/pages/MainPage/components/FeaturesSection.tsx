import React from "react";
import { FaUsers, FaCalendarAlt, FaComments, FaTrophy, FaGamepad, FaHeart } from "react-icons/fa";
import '../styles/featuresSection.css';

const features = [
  {
    icon: <FaUsers />,
    title: "Пошук друзів",
    description: "Знаходь людей зі схожими інтересами у своєму місті",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Події поблизу",
    description: "Знаходь цікаві заходи та зустрічі у твоєму місті",
  },
  {
    icon: <FaComments />,
    title: "Чати",
    description: "Спілкуйся з новими знайомими у зручних чатах",
  },
  {
    icon: <FaTrophy />,
    title: "Щотижневі челенджи",
    description: "Приймай виклики та отримуй нагороди за їх виконання",
  },
  {
    icon: <FaGamepad />,
    title: "Гейміфікація",
    description: "Здобувай бейджі та піднімайся в рейтингу",
  },
  {
    icon: <FaHeart />,
    title: "Спільнота",
    description: "Стань частиною дружньої української спільноти",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <h2>Наші можливості</h2>
          <p>Відкрийте для себе всі переваги спілкування через Bokado</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card visible" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
