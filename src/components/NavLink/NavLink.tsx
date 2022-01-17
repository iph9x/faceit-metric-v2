import { FC, ReactChild } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';

import styles from './NavLink.module.scss';

type NavLinkProps = {
  href: string;
  children: ReactChild;
};

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter();
  const classes = cn(styles.link, { [styles.active]: router.asPath === href });

  return (
    <Link href={href} passHref>
      <a className={classes} href={href}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
