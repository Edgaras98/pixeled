import React from 'react';
import Sidebar from '../../components/shared/navigation/Sidebar';
import MobileNav from '../../components/shared/navigation/MobileNav';

interface RootLayoutProps {
    children: React.ReactNode
};

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <main className='root'>
            <Sidebar/>
            <MobileNav/>
            <div className="root-container">
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default RootLayout;
