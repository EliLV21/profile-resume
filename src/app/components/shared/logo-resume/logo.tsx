import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo/EliLV.png';

export const LogoIcon = () => {
  const isProd = process.env.NODE_ENV === 'production';
  return (
    <Link href={`${isProd ? '/profile-resume' : '/'}`} style={{ zIndex: 100 }} className="absolute left-4 top-4">
      <Image
        className=""
        alt="Logo"
        width={200}
        height={200}
        src={logo}
      />
    </Link>
  );
};
