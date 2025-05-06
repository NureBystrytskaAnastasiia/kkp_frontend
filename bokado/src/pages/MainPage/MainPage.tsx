import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import { BenefitsSection } from './components/BenefitsSection';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import '../MainPage/styles/MainPage.css';

const MainPage = () => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // анімація один раз
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <>
        <Header/>
        <div className="fade-in"><HeroSection /></div>
        <div className="fade-in"><FeaturesSection /></div>
        <div className="fade-in"><BenefitsSection /></div>
        <div className="fade-in"><Testimonials /></div>
        <div className="fade-in"><CTA /></div>
        <div className="fade-in"><Footer /></div>
      </>
    );
  };
  
  export default MainPage;