"use client";
import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from 'next/link';

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
                
            <Menu setActive={setActive}>

                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item='Home'>
                    
                </MenuItem>
                </Link>
                <Link href={"/Facilities"}>
                    <MenuItem setActive={setActive} active={active} item='Facilities'>
                        <div className='flex flex-col space-y-4 text-sm'>
                            <HoveredLink href="/Facilities/Security">
                                Security
                            </HoveredLink>
                            <HoveredLink href="/Facilities/HomeLikeEnv">
                                Home Like Environment
                            </HoveredLink>
                            <HoveredLink href="/Facilities/Sports">
                                Sports
                            </HoveredLink>
                        </div>
                    </MenuItem>
                </Link>

                <Link href={"/About"}>
                    
                <MenuItem setActive={setActive} active={active} item='About'></MenuItem>
                </Link>

                <Link href={"/Contact"}>
                    
                <MenuItem setActive={setActive} active={active} item='Contact Us'></MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item='Get In' >
                    <div className='flex flex-col space-y-4 text-sm ' >
                        <HoveredLink href="/student/login">
                            Student Login
                        </HoveredLink>
                        <HoveredLink href="/admin/login">
                            Admin Login
                        </HoveredLink>
                    </div>
                </MenuItem>
                
                
            </Menu>
        </div>
    )
}

export default Navbar