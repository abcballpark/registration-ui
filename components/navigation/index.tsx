"use client";

import { Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Button } from "@chakra-ui/react";
import { AppShell, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarLink, PersonaAvatar } from "@saas-ui/react";
import { Logo } from "../logo";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import querystring from "querystring";

interface NavigationProps {
  children?: React.ReactNode;
}

export default function Navigation(props: NavigationProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const logout = async () => {
    // TODO: Pull these in from vars or something
    const logout_uri = "https://localhost:9001/api/auth/signin";
    const region = "us-east-1"
    const client_id = "hdin85cv7oeie3fklbtj7485h";
    const cognito_domain = "abc-auth";
    const params = {
      client_id: client_id,
      logout_uri: logout_uri,
    };
    const uri = `https://${cognito_domain}.auth.${region}.amazoncognito.com/logout?${querystring.encode(params)}`;
    signOut({
      callbackUrl: uri
    })
    // return {
    //   handleLogout: async () => {
    //     return signOut({
    //       callbackUrl: uri
    //     })
    //   }
    // }
  };

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
                      // router.push("/api/auth/signout");
                      logout();
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
