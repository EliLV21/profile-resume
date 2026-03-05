import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/logo/EliLV.png';

export const LogoIcon = () => {
  return (
    <Link href="/" style={{ zIndex: 100 }} className="absolute left-4 top-4 z-20">
      <Image
        className=""
        alt="Logo"
        width={200}
        height={200}
        src={logoImage}
      />
    </Link>
  );
};
