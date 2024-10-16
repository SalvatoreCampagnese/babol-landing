"use client"
import { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>{children}</Suspense>
  );
}
