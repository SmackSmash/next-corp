import Image from 'next/image';
import { type StaticImageData } from 'next/image';

export default function Hero({
  imgData,
  imgAlt,
  title
}: {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}) {
  return (
    <div>
      <Image src={imgData} alt={imgAlt} fill objectFit='cover' className='-z-10' />
      <h1>{title}</h1>
    </div>
  );
}
