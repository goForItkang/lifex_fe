import React from 'react';
import Header from './Header';
import MobileBar from '../../component/MobileBar'
const Layout = ({children}) => {
    return (
        <div className='bg-[#f6f8f7] min-h-screen'>
            <Header/>
            <main className='pb-20'>
                {children}
            </main>
            <MobileBar></MobileBar>
        </div>
    );
};

export default Layout;