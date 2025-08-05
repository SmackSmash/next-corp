import Image from 'next/image';
import HomeImage from '@/../public/home.jpg';

export default function Home() {
  return (
    <div>
      <Image src={HomeImage} alt='Factory' fill objectFit='cover' className='-z-10' />
    </div>
  );
}
