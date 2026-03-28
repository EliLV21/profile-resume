import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/logo/EliLV.png';
import { cn } from '@/lib/utils';

type LogoIconProps = {
  /** En grid (home): flujo normal; arriba en mobile, izquierda en desktop */
  inline?: boolean;
};

export const LogoIcon = ({ inline = false }: LogoIconProps) => {
  return (
    <Link
      href="/"
      style={{ zIndex: 100 }}
      className={cn(
        'z-20 md:top-4',
        inline
          ? 'relative flex justify-center md:block md:justify-start'
          : 'absolute left-6 top-6 md:relative'
      )}
    >
      <Image
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-auto lg:w-32 lg:h-32 xl:w-40 xl:h-40"
        alt="Logo"
        width={160}
        height={160}
        src={logoImage}
      />
    </Link>
  );
};
