import Image from 'next/image';
import Link from 'next/link';

export const LogoIcon = () => {
  return (
    <Link href="/" style={{ zIndex: 100 }} className="absolute left-4 top-4">
      <Image
        className=""
        alt="Logo"
        width={200}
        height={200}
        src="/profile-resume/_next/static/media/logo/EliLV.png"
      />
    </Link>
  );
};
