import LocationClient from './locationClient';

export const metadata = {
  title: 'Find Us | House Of Inasal – Sahara Centre, Sharjah UAE',
  description:
    'Visit House Of Inasal at the Food Court, 1st Floor, Sahara Centre, Sharjah. Easy access from Dubai & Sharjah. Open daily. Call +971 600 560 031.',
  alternates: {
    canonical: 'https://houseofinasal.ae/location'
  }
};

export default function Location() {
  return <LocationClient />;
}
