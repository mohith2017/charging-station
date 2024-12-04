'use client'
import Image from "next/image";
import Dashboard from "@/components/Dashboard/page";
import { useSession, signOut } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    )
  }

  if (status === "unauthenticated") {
    redirect("/auth/signin")
  }
  return (
    <>
    {session?.user?.name ? <Dashboard /> : redirect("/auth/signin")}
    </>
  );
}
