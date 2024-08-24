import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Protected } from '@/utils/ProtectedRoutes'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <Protected>
            <Navbar />
            {children}
            <Footer />
        </Protected>
    )
}

export default MainLayout