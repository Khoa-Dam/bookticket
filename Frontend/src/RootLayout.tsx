import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './Pages/Footer'

export const RootLayout = () => {
    return (
        <>
            <Header />
            <main className='mb-10'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}