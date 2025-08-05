import Link from 'next/link';

export default function Nav() {
  return (
    <div className='absolute z-10 flex w-full gap-2 p-2 text-zinc-50'>
      <Link href='/'>Home</Link>
      <Link href='/performance' className='ml-auto'>
        Performance
      </Link>
      <Link href='/reliability'>Reliability</Link>
      <Link href='/scale'>Scale</Link>
    </div>
  );
}
