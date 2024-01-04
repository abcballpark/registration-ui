"use client";

import { Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Button } from "@chakra-ui/react";
import { AppShell, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarLink, PersonaAvatar } from "@saas-ui/react";
import { Logo } from "../logo";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface NavigationProps {
  children?: React.ReactNode;
}

export default function Navigation(props: NavigationProps) {
  const { data: session, status } = useSession();
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
            {session ? (
              <Menu>
                <MenuButton>
                  <PersonaAvatar src={session?.user?.image} name="Beatriz" size="xs" presence="online" />
                </MenuButton>
                <MenuList>
                  <MenuGroup title={session?.user?.name || (session?.user?.email as string)}>
                    <MenuItem
                      onClick={(e) => {
                        router.push("/profile");
                      }}
                    >
                      Profile
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuItem
                    onClick={(e) => {
                      router.push("/api/auth/signout");
                    }}
                  >
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <NavbarContent spacing="2">
                <NavbarItem>
                  <Button
                    onClick={(e) => {
                      router.push("/api/auth/signin");
                    }}
                  >
                    Login
                  </Button>
                </NavbarItem>
                <NavbarItem>
                  <Button>Create Account</Button>
                </NavbarItem>
              </NavbarContent>
            )}
          </NavbarContent>
        </Navbar>
      }
    >
      {props.children}
    </AppShell>
  );
}
