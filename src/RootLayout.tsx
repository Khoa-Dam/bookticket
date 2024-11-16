import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './Pages/Footer'

export const RootLayout = () => {
    return (
        <div className="min-h-screen bg-[#0e0f0e]">
            <Header />
            <main className='bg-gray-100'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}