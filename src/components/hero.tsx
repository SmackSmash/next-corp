import Image from 'next/image';
import { type StaticImageData } from 'next/image';

type HeroProps = {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
};

export default function Hero({ imgData, imgAlt, title }: HeroProps) {
  return (
    <div className='absolute flex h-screen w-screen items-center justify-center'>
      <Image src={imgData} alt={imgAlt} fill objectFit='cover' className='-z-10' />
      <div className='absolute -z-10 size-full bg-linear-to-l from-transparent to-black'></div>
      <h1 className='text-4xl font-bold'>{title}</h1>
    </div>
  );
}
