import AboutUs from './_components/aboutUs';
import Carousel from './_components/carousel';
import InasalSlider from './_components/inasalslider';
import Promo from './_components/promo';
import GoogleReviews from './_components/reviews/googleReviews';

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Carousel />
      <InasalSlider />
      <Promo />
      <AboutUs />
      <GoogleReviews />
    </div>
  );
}
