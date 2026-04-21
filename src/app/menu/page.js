import MenuClient from './_components/menuClient';

export const metadata = {
  title: 'Menu | House Of Inasal – Filipino Restaurant Sharjah UAE',
  description:
    'Explore our full menu: Chicken Inasal, Sisig, Silog meals, Palabok, Halo-Halo & more. Starting from AED 12. Located at Sahara Centre, Sharjah UAE.',
  alternates: {
    canonical: 'https://houseofinasal.ae/menu'
  }
};

export default function Menu() {
  return <MenuClient />;
}
