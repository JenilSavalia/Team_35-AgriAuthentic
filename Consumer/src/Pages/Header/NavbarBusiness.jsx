import React from 'react'
import { Leaf } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Link } from "react-router-dom";


const NavbarBusiness = () => {
    return (
        <>

            <div className='flex items-center justify-evenly mx-auto pt-2 bg-gradient-to-b from-green-200/50 to-transparent fixed z-10 w-full'>

                <Link to="/">
                    <div className='flex gap-2 items-center p-4 cursor-pointer '>
                        <Leaf color='#00C951' />
                        <h1 className='text-4xl font-bold text-green-500' >AgriAuthentic</h1>
                    </div>
                </Link>

                <div className="flex gap-3 mx-3">

                    <header>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </header>
                </div>

            </div>
        </>
    )
}

export default NavbarBusiness