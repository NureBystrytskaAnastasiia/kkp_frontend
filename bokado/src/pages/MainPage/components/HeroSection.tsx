import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom"; 

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Створи нові зв'язки. Пройди захоплюючі челенджі. Розвивайся разом з нами.</h1>
          <p>Bokado — місце для тих, хто прагне зростати та взаємодіяти з однодумцями.</p>
          <div className="cta-buttons">
            <Link to="#" className="btn btn-primary">Приєднатися</Link>
            <Link to="#" className="btn btn-secondary">Дізнатись більше</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
