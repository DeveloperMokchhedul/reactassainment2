import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from '@nextui-org/button';
import { NavItemData } from '../Api/NavItem';

function NavbarArea() {
    return (
        <div className='bg-bg-primary'  >
            <Navbar className='bg-transparent w-full' maxWidth='xl'>
                <NavbarBrand>
                    <img src="/images/Logo.png" alt="Logo" />
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {
                        NavItemData.map((item, index) => (
                            <NavbarItem key={index}>
                                <Link className="text-white" href="#">
                                    {item}
                                </Link>
                            </NavbarItem>
                        ))
                    }
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Button className='bg-primary'>Book a Demo</Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button className='border-1 border-white bg-transparent text-white'>Contact Us</Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    )
}

export default NavbarArea;
