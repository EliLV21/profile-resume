import Image from 'next/image';
import { Link } from 'react-router-dom';

export const LogoIcon = () => {
  const isProd = process.env.NODE_ENV === 'production';
  return (
    <Link to={`${isProd ? '/profile-resume' : '/'}`} style={{ zIndex: 100 }} className="absolute left-[-21px] top-4">
      <Image
        className=""
        alt="Logo"
        width={200}
        height={200}
        src="https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/logo/EliLV.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9sb2dvL0VsaUxWLnBuZyIsImlhdCI6MTczOTM3OTg0NywiZXhwIjoxNzcwOTE1ODQ3fQ.x3W1X92L8tN1OCvuX5P32VQt3rxmMGfSlg5NVcpP4gA"
      />
    </Link>
  );
};
