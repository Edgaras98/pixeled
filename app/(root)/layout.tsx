import React from 'react'
import Sidebar from '../../components/shared/Sidebar'

interface RootLayoutProps {
    children: React.ReactNode
};

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <main className='root'>
      <Sidebar/>
        <div className="root-container">
            <div className="wrapper">
                {children}
            </div>
        </div>
    </main>
  )
}

export default RootLayout