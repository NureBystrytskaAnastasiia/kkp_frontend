import React from "react";
import { FaRunning, FaMedal, FaSeedling } from "react-icons/fa";
import '../styles/BenefitsSection.css';

const benefits = [
  {
    icon: <FaRunning />,
    title: "Будь активним",
    description:
      "Наша платформа мотивує тебе виходити з зони комфорту, знаходити нові хобі та активності.",
  },
  {
    icon: <FaMedal />,
    title: "Здобувай бейджі",
    description:
      "Виконуй челенджі, бери участь у подіях та отримуй унікальні нагороди за свої досягнення.",
  },
  {
    icon: <FaSeedling />,
    title: "Розвивайся щодня",
    description:
      "Спілкування з однодумцями допоможе тобі відкривати нові горизонти та розвиватись.",
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="section-title">
          <h2>Чому варто приєднатись?</h2>
          <p>Bokado допомагає молодим людям розвиватись та знаходити однодумців</p>
        </div>
        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <div className="benefit-item visible" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-text">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
