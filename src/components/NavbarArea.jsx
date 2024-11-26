import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from '@nextui-org/button';
import { NavItemData } from '../Api/NavItem';

function NavbarArea() {
    return (
        <>
        <header className='bg-bg-primary w-full'>
            
            <div className='bg-white'>

            <h1 className='text-white text-center'>hey </h1>
            </div>

        </header>
 
        
        </>
        // <div className='bg-bg-primary w-[1440px]'>
        //     <Navbar className='bg-transparent w-full'>
        //         <NavbarBrand>
        //             <img src="/images/Logo.png" alt="Logo" />
        //         </NavbarBrand>

        //         <NavbarContent className="hidden sm:flex gap-4" justify="center">
        //             {
        //                 NavItemData.map((item, index) => (
        //                     <NavbarItem key={index}>
        //                         <Link className="text-white" href="#">
        //                             {item}
        //                         </Link>
        //                     </NavbarItem>
        //                 ))
        //             }
        //         </NavbarContent>

        //         <NavbarContent justify="end">
        //             <NavbarItem className="hidden lg:flex">
        //                 <Link href="#">Login</Link>
        //             </NavbarItem>
        //             <NavbarItem>
        //                 <Button as={Link} color="primary" href="#" variant="flat">
        //                     Sign Up
        //                 </Button>
        //             </NavbarItem>
        //         </NavbarContent>
        //     </Navbar>
        // </div>
    )
}

export default NavbarArea;
