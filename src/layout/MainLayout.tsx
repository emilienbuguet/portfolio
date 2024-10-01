import { Outlet } from 'react-router-dom';
import Header from '../molecules/Header'
import Footer from '../molecules/Footer';

export function MainLayout() {
    return (
        <div className='pt-16 flex flex-col min-h-screen bg-background'>
            <div className='px-8 md:px-48 flex-grow'>
                <Header />
                <Outlet />
            </div>
            <div className='pt-36'>
                <Footer />
            </div>
        </div>
    );
}


export default MainLayout;