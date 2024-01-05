"use client";

import { Logo } from "@/components/logo";
import { PlaceholderSkeleton_4x2_TopFull } from "@/components/placeholders"
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Image,
  Container,
  MenuDivider,
  MenuGroup,
  Skeleton,
  SkeletonText,
  Stack,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react";
import {
  AppShell,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  SearchInput,
  Sidebar,
  SidebarSection,
  NavItem,
  SidebarToggleButton,
  PersonaAvatar,
  NavbarLink,
  Link,
} from "@saas-ui/react";
import { FiHome, FiUsers, FiSettings } from "react-icons/fi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const onSubmit = (params: any) => {
    console.log(params);
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <><p>Hello</p></>
  );
}

// Try this: https://kinderas.com/technology/implementing-federated-sign-out-when-using-next-auth-in-you-next-js-app