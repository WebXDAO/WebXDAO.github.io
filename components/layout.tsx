"use client ;";
import { SiteHeader } from "@/components/site-header";

import React, { useEffect, useState } from "react";

import { Grid } from "react-loader-spinner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div>
          <SiteHeader />
          <main>{children}</main>
        </div>
      )}
    </>
  );
}
