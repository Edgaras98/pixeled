import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks } from '../../../constants';

interface NavLinksProps {
    from?: number;
    to?: number;
}

const NavLinks: React.FC<NavLinksProps> = ({ from = 0, to = navLinks.length }) => {
    const pathname = usePathname();

    return (
        <>
            {navLinks.slice(from, to).map((link, index) => {
                const isActive = link.route === pathname;
                const extraStyling = isActive ? 'bg-purple-gradient text-white' : 'text-gray-700';

                return (
                    <li key={index} className={`sidebar-nav_element group ${extraStyling}`}>
                        <Link className='sidebar-link' href={link.route} >
                            <Image src={link.icon} alt={link.label} width={24} height={24} className={`${isActive && 'brightness-200'}`} />
                            {link.label}
                        </Link>
                    </li>
                );
            })}
        </>
    );
};

export default NavLinks;
