import React from 'react';

import Header from '../components/Header';
import Footer from '../sections/Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ drawerTransitioning, drawerOpen, updateDrawer, onCloseDrawer }) => {
    return (
        <>
            <Header 
                drawerTransitioning={drawerTransitioning} 
                drawerOpen={drawerOpen} 
                updateDrawer={updateDrawer} 
            />
            <main className="main-content" onClick={() => drawerOpen && onCloseDrawer()}>
                <Outlet />
            </main>
            <Footer />
        </>
        
    )
}

export default Layout;