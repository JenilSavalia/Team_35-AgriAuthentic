import React from 'react'
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => {
    return (
        
        <footer className="border-t py-6 md:py-8 mt-12">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold">AgriAuthentic</span>
                </div>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">© 2025 AgriAuthentic. All rights reserved.</p>
                <div className="flex gap-4">
                    <Link to="/terms" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                        Terms
                    </Link>
                    <Link to="/privacy" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                        Privacy
                    </Link>
                </div>
            </div>
            {/* <img src="https://www.kisankonnect.in/assets/img/footer-img-second.png" alt="" width={300} /> */}
        </footer>
        
    )
}

export default Footer