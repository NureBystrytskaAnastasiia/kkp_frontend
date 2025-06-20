// LandingPage.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiUsers, FiHeart, FiAward, FiShield, FiStar, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import '../styles/LandingPage.css';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section" 
        style={{ backgroundImage: 'url(https://img.goodfon.ru/wallpaper/big/a/a4/svoboda-lyudi-pryzhok-bereg.webp)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay">
          <motion.div 
            className="hero-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="hero-title">Знайди своїх людей з Bokado</h1>
            <p className="hero-subtitle">Перша українська платформа для пошуку друзів за інтересами</p>
            <div className="hero-buttons">
              <motion.button 
                className="btn btn-primary"
                onClick={() => navigate('/register')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Почати зараз <FiArrowRight />
              </motion.button>
              <motion.button 
                className="btn btn-outline"
                onClick={() => navigate('/login')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Вже маю акаунт
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="features-section"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="section-container">
          <motion.h2 className="section-title" variants={itemVariants}>Чому обирають Bokado?</motion.h2>
          <motion.div className="features-grid" variants={containerVariants}>
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FiUsers />
              </div>
              <h3>Спільнота</h3>
              <p>Тисячі українців, які шукають нових друзів та спілкування</p>
            </motion.div>
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FiHeart />
              </div>
              <h3>Спільні інтереси</h3>
              <p>Знаходь людей зі схожими захопленнями та хобі</p>
            </motion.div>
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FiAward />
              </div>
              <h3>Гейміфікація</h3>
              <p>Челенджі, бейджі та рівні для більш цікавого спілкування</p>
            </motion.div>
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FiShield />
              </div>
              <h3>Безпека</h3>
              <p>Сувора модерація та перевірка профілів для вашого комфорту</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        className="how-it-works"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <div className="section-container">
          <h2 className="section-title">Як це працює?</h2>
          <div className="steps-container">
            <motion.div 
              className="step"
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Створи профіль</h3>
                <p>Розкажи про себе, свої інтереси та цілі</p>
              </div>
            </motion.div>
            <motion.div 
              className="step"
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Знаходь людей</h3>
                <p>Використовуй фільтри або свайп систему для пошуку</p>
              </div>
            </motion.div>
            <motion.div 
              className="step"
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Спілкуйся</h3>
                <p>Знайомся, обговорюй події та приймай виклики разом</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="testimonials"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="section-container">
          <motion.h2 className="section-title" variants={itemVariants}>Що кажуть наші користувачі</motion.h2>
          <motion.div className="testimonials-grid" variants={containerVariants}>
            <motion.div className="testimonial-card" variants={itemVariants}>
              <div className="testimonial-content">
                <p>"Завдяки Bokado я знайшла справжніх друзів у новому місті. Тепер у нас ціла компанія!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Анна, 24</h4>
                  <div className="author-rating">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="testimonial-card" variants={itemVariants}>
              <div className="testimonial-content">
                <p>"Як інтроверту мені важко знайомитись, але тут все зручно та без напруження."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Олексій, 19</h4>
                  <div className="author-rating">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-container">
          <h2>Готовий знайти нових друзів?</h2>
          <p>Приєднуйся до Bokado вже сьогодні - це безкоштовно!</p>
          <motion.button 
            className="btn btn-primary"
            onClick={() => navigate('/register')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Зареєструватись
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h3>Bokado</h3>
            <p>Знайди своїх людей</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Навігація</h4>
              <ul>
                <li><a href="#">Головна</a></li>
                <li><a href="#">Про нас</a></li>
                <li><a href="#">Контакти</a></li>
                <li><a href="#">Блог</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Правова інформація</h4>
              <ul>
                <li><a href="#">Умови використання</a></li>
                <li><a href="#">Політика конфіденційності</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Контакти</h4>
              <ul className="contact-list">
                <li><FiMail /> hello@bokado.com</li>
                <li><FiMapPin /> Київ, Україна</li>
                <li><FiPhone /> +380 12 345 6789</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bokado. Всі права захищені.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;