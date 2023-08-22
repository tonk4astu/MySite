'use client'
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle,NavbarMenu,NavbarMenuItem, Link} from "@nextui-org/react";
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const NavItems = [
        {"Name": "Home", "Path": "/"},
        {"Name":"Rotate","Path": "/pachi"},
    ];
    return (
            <Navbar className=" bg-slate-600" onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                    <NavbarBrand>
                    <p className="font-bold text-inherit">MNM</p>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarMenu className=" bg-slate-400">
                    {NavItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                        className="w-full"
                        href={item.Path}
                        size="lg"
                        color="foreground"
                        >
                        {item.Name}
                        </Link>
                    </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
    )
}