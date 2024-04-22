import { Outlet } from 'react-router-dom';
import Header from '../molecules/Header'
import Footer from '../molecules/Footer';

export function MainLayout() {
    return (
        <div className='pt-16 flex flex-col min-h-screen'>
            <div className='px-12 md:px-48 flex-grow'>
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