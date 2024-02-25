import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
};

const AuthenticationLayout = ({ children }: LayoutProps) => {
    return (
        <main className='authentication'>
            {children}
        </main>
    );
};

export default AuthenticationLayout;
