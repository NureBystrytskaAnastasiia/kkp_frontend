import React from "react";
import '../styles/Testimonials.css';

interface Testimonial {
  content: string;
  author: {
    name: string;
    age: number;
    job: string;
    city: string;
    avatar: string;
  };
}

const testimonials: Testimonial[] = [
  {
    content:
      "Завдяки Bokado я знайшла справжніх друзів у новому місті. Челенджі допомагають не сидіть на місці та постійно пробувати щось нове!",
    author: {
      name: "Катя",
      age: 21,
      job: "Студентка",
      city: "Київ",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
  },
  {
    content:
      "Я інтроверт, і мені завжди було важко знаходити нових друзів. Bokado дав мені змогу знайти людей зі схожими інтересами без зайвого стресу.",
    author: {
      name: "Олег",
      age: 19,
      job: "Програміст",
      city: "Львів",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  },
  {
    content:
      "Події у додатку - це те, що мене підкорило! Тепер я завжди в курсі, що цікавого відбувається у моєму місті, і знайшла купу однодумців.",
    author: {
      name: "Аліна",
      age: 23,
      job: "Фрілансер",
      city: "Одеса",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Відгуки наших користувачів</h2>
          <p>Дізнайся, що говорять про Bokado твої ровесники</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card visible" key={index}>
              <div className="testimonial-content">{testimonial.content}</div>
              <div className="testimonial-author">
                <img
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <h4>
                    {testimonial.author.name}, {testimonial.author.age}
                  </h4>
                  <p>
                    {testimonial.author.job}, {testimonial.author.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;