import Hero from './components/Hero';
import CustomizableShops from './components/CustomizableShops';
import MembershipSection from './components/MembershipSection';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import FeaturesSection from './components/FeaturesSection';
import YouTubeSteps from './components/YouTubeSteps';
import CustomProducts from './components/CustomProducts';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <CustomizableShops />
      <CustomProducts />
      <FeaturesSection />
      <YouTubeSteps />
      <MembershipSection />
      <Testimonial />
      <FAQ />
    </div>
  );
}

export default App;
