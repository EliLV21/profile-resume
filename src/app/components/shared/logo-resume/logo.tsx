import Image from 'next/image';
import Link from 'next/link';

export const LogoIcon = () => {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/profile-resume' : '';
  return (
    <Link href={`${basePath}/`} style={{ zIndex: 100 }} className="absolute left-4 top-4">
      <Image
        className=""
        alt="Logo"
        width={200}
        height={200}
        src="/logo/EliLV.png"
      />
    </Link>
  );
};
