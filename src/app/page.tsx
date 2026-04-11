import reat from 'react';
import Header from './layout/Header';
import HeroSection from '../components/HeroSection';
import GoClinicTabs from '../components/GoClinicTabs';
import GoClinicWhatsappSection from '../components/GoClinicWhatsappSection';
import GoClinicVideoSection from '../components/GoClinicVideoSection';
import GoClinicFeaturesGrid from '../components/GoClinicFeaturesGrid';
import GoClinicDemoCTA from '../components/GoClinicDemoCTA';
import GoClinicIntegrationSection from '../components/GoClinicIntegrationSection';
import GoClinicTestimonials from '../components/GoClinicTestimonials';
import GoClinicFAQ from '../components/GoClinicFAQ';
import Footer from './layout/Footer';

const HomePage = () => {
  return (
    <div className='bg-white'>
      <Header />
      <HeroSection />
      <GoClinicTabs />
      <GoClinicWhatsappSection />
      <GoClinicVideoSection />
      <GoClinicFeaturesGrid />
      <GoClinicDemoCTA />
      <GoClinicIntegrationSection />
      <GoClinicTestimonials />
      <GoClinicFAQ />
      <Footer />
    </div>
  )
}
export default HomePage;