"use client";

import { SaasProvider } from "@saas-ui/react";
import { Session } from "inspector";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SaasProvider>{children}</SaasProvider>
    </SessionProvider>
  );
}
