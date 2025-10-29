import Hero from '../components/Hero';
import CustomizableShops from '../components/CustomizableShops';
import YouTubeSteps from '../components/YouTubeSteps';
import CustomProducts from '../components/CustomProducts';
import FeaturesSection from '../components/FeaturesSection';
import MembershipSection from '../components/MembershipSection';
import YouTubeHero from '../components/YouTubeHero';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';

const LandingPage = () => {
  return (
    <div style={{ marginLeft: 0, marginTop: 0 }}>
      <Hero />
      <CustomizableShops />
      <YouTubeSteps />
      <CustomProducts />
      <FeaturesSection />
      <MembershipSection />
      <YouTubeHero />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default LandingPage;
