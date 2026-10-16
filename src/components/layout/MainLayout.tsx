
import { Outlet } from 'react-router'

import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import PageMetadata from './PageMetadata'

function MainLayout() {
    return (
        <div className="cosmic-background flex min-h-screen flex-col font-sans text-slate-100">
            <ScrollToTop />
            <PageMetadata />
            <Navbar />

            <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-20">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout
