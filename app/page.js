// pages/index.js
import Slider from './components/ImageSlider2';
import SocialSection from './components/SocialSection';
import AboutUsSection from './components/AboutUsSection';
import AboutCardSection from './components/AboutCardSection'
import ServicesSection from './components/ServicesSection';
import FeaturedProject from './components/FeaturedProject';
import ClientReviewSection from './components/ClientReviewSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import OurTeamMembers from './components/OurTeamMembers'





export default function Home() {
  return (
    <div>
   
      <Slider />
      <SocialSection />
      <AboutUsSection />
      <AboutCardSection />
       <ServicesSection />
      
      <FeaturedProject />
      <OurTeamMembers />
      
      <ContactForm />
      <ClientReviewSection />
      <Footer />

    </div>
  );
}
