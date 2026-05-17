import Link from 'next/link';
const items=['dashboard','shifts','orders','statistics','imports','templates','menu','settings'];
export default function Nav(){return <nav className='flex gap-2 overflow-auto'>{items.map(i=><Link key={i} href={`/${i}`} className='card py-2 px-3 capitalize whitespace-nowrap'>{i}</Link>)}</nav>}
