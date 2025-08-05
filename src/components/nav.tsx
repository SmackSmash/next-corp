import Link from 'next/link';

export default function Nav() {
  return (
    <div className='text-zinc-50'>
      <Link href='/'>Home</Link>
      <Link href='/performance'>Performance</Link>
      <Link href='/reliability'>Reliability</Link>
      <Link href='/scale'>Scale</Link>
    </div>
  );
}
