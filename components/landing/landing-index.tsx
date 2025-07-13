import LandingFAQ from '@/components/landing/landing-faq';
import LandingFooter from '@/components/landing/landing-footer';
import LandingHero from '@/components/landing/landing-hero';
import LandingHowItWorks from '@/components/landing/landing-how';
import LandingNav from '@/components/landing/landing-nav';
import LandingPricing from '@/components/landing/landing-pricing';
import LandingFeatuers from '@/components/landing/landing-services';

const LandingIndex = () => {
  return (
    <div className="flex flex-col !bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <LandingNav />
      <LandingHero />
      <LandingFeatuers />
      <LandingHowItWorks />
      <LandingPricing />
      <LandingFAQ />
      <LandingFooter />
    </div>
  );
};

export default LandingIndex;
