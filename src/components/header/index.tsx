'use client'
import Link from "next/link";
import { FiUser, FiLogOut, FiLoader, FiLock } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
    const { data, status } = useSession()

    async function handleLogin() {
        await signIn()
    }
    async function handleLogout() {
        await signOut()
    }

    return (
        <header className="w-full items-center px-2 py-4 bg-white h-20 shadow-sm">
            <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
                <Link href='/'>
                    <h1 className="font-bold italic text-3xl pl-1 text-azul-marinho hover:tracking-widest duration-300">
                        <span className="text-laranja">Sua</span> Marca.
                    </h1>
                </Link>

                {status === 'loading' && (
                    <button className="animate-spin">
                        <FiLoader size={26} color="#4b5563" />
                    </button>
                )}

                {status === 'unauthenticated' && (
                    <button onClick={handleLogin}>
                        <FiLock size={26} color="#4b5563" />
                    </button>
                )}

                {status === 'authenticated' && (
                    <div className="flex items-baseline gap-4" >
                        <Link href='/dashboard'>
                            <FiUser size={26} color="#4b5563" />
                        </Link>
                        <button onClick={handleLogout}>
                            <FiLogOut size={26} color="#4b5563" />
                        </button>
                    </div>
                )}
            </div>
        </header>

    )
}