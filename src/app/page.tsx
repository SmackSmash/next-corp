import Image from 'next/image';
import homeImage from '@/../public/home.jpg';
import Hero from '@/components/hero';

export default function Home() {
  return <Hero image={homeImage} alt='factory' header='Look at there robots' />;
}
