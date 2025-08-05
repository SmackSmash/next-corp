import Image from 'next/image';
import { type StaticImageData } from 'next/image';

type HeroProps = {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
};

export default function Hero({ imgData, imgAlt, title }: HeroProps) {
  return (
    <div>
      <Image src={imgData} alt={imgAlt} fill objectFit='cover' className='-z-10' />
      <h1>{title}</h1>
    </div>
  );
}
