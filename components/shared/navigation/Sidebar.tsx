"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '../../../constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../../ui/button';
import NavLinks from './NavLinks';

const Sidebar = () => {

    return (
        <aside className='sidebar'>
            <div className='flex size-full flex-col gap-4'>
                <Link href="/" className="sidebar-logo">
                    <Image src="/assets/images/logo-text.svg" alt='logo' width={180} height={28} />
                </Link>

                <nav className='sidebar-nav'>
                    <SignedIn>
                        <ul className='sidebar-nav_elements'>
                            <NavLinks from={0} to={6} />
                        </ul>
                        <ul className='sidebar-nav_elements'>
                            <NavLinks from={6} />
                            <li className='flex-center cursor-pointer gap-2 p-4'>
                                <UserButton afterSignOutUrl='/' showName />
                            </li>
                        </ul>
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className='button bg-purple-gradient bg-cover'>
                            <Link href="/sign-in">Log in</Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
