import Image from 'next/image';
import { type StaticImageData } from 'next/image';

export default function Hero({
  image,
  alt,
  header
}: {
  image: StaticImageData;
  alt: string;
  header: string;
}) {
  return (
    <div>
      <Image src={image} alt={alt} fill objectFit='cover' className='-z-10' />
      <h1>{header}</h1>
    </div>
  );
}
