"use client";

import { Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Button } from "@chakra-ui/react";
import { AppShell, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarLink, PersonaAvatar } from "@saas-ui/react";
import { Logo } from "../logo";

import { useRouter } from "next/navigation";

import { UserButton } from "@clerk/nextjs";

interface NavigationProps {
  children?: React.ReactNode;
}

export default function Navigation(props: NavigationProps) {

  const router = useRouter();

  return (
    <AppShell
      navbar={
        <Navbar position="sticky" borderBottomWidth="1px" background="transparent" backdropFilter="blur(10px)">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
          <NavbarContent display={{ base: "hidden", sm: "flex" }}>
            <NavbarItem isActive={false}>
              <NavbarLink color="foreground" href="/register">
                Register
              </NavbarLink>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent as="div" justifyContent="end">
            <UserButton />
          </NavbarContent>
        </Navbar>
      }
    >
      {props.children}
    </AppShell>
  );
}
