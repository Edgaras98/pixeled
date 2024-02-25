"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '../../constants'
import { SignedIn } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathname = usePathname();

    const links = () => {
        return navLinks.map((link, index) => {
            const isActive = link.route === pathname;
            const extraStyling = isActive ? 'bg-purple-gradient text-white' : 'text-gray-700';

            return (
                <li key={index} className={`sidebar-nav_element group ${extraStyling}`}>
                    <Link className='sidebar-link' href={link.route} >
                        <Image src={link.icon} alt={link.label} width={24} height={24} className={`${isActive && 'brightness-200'}`} />
                        {link.label}
                    </Link>
                </li>
            )
        })
    }

  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href="/" className="sidebar-logo">
                <Image src="/assets/images/logo-text.svg" alt='logo' width={180} height={28} />
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements'>
                        {links()}
                    </ul>
                </SignedIn>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar