import React from "react";
import '../styles/cta.css';

export const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2>Приєднуйся вже сьогодні — знайди своїх людей</h2>
        <p>
          Тисячі української молоді вже знайшли друзів та нові можливості
          для розвитку через Bokado. Твоя черга!
        </p>
        <a href="#" className="btn btn-cta">
          Зареєструватись
        </a>
      </div>
    </section>
  );
};
export default CTA;