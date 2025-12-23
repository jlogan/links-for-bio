import {Link} from 'react-router-dom';
import clsx from 'clsx';

interface CustomLogoProps {
  className?: string;
}

export function CustomLogo({className}: CustomLogoProps) {
  return (
    <Link
      to="/"
      className={clsx(
        'mr-4 block h-full max-h-26 flex-shrink-0 md:mr-24 md:max-h-36',
        className,
      )}
      aria-label="Go to homepage"
    >
      <img
        src="/images/logo-transparent-white.png"
        alt="LinksForBio"
        className="block h-full max-h-26 w-auto md:max-h-36"
      />
    </Link>
  );
}

