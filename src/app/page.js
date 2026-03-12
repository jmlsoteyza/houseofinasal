import AboutUs from './_components/about-us';
import Carousel from './_components/carousel';
import InasalSlider from './_components/inasalslider';
import Promo from './_components/promo';

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Carousel />
      <InasalSlider />
      <Promo />
      <AboutUs />
    </div>
  );
}
