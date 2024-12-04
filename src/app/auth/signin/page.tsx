'use client'

import { signIn } from "next-auth/react"
import { Google } from "@mui/icons-material"

export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black">
      <h1 className="mb-20 mt-32 text-4xl font-bold text-white">
        Welcome to the Charging Station
      </h1>
      <div className="flex items-center justify-center">
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-6 py-3 text-white transition-all hover:bg-white/10"
        >
          <Google className="h-5 w-5" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  )
}
