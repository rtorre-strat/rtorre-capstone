'use client'
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Kanban } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserButton, useUser } from '@clerk/nextjs';
import { SignOutButton } from '@clerk/nextjs';

export default function HomePage() {
  const { user } = useUser();
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-platinum-900 to-platinum-800 dark:from-outer_space-500 dark:to-payne's_gray-500">
      {/* Header */}
      <header className="border-b border-french_gray-300 dark:border-payne's_gray-400 bg-white/80 dark:bg-outer_space-500/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 container">
          <a className="block text-teal-600" href="#">
            <div className="text-2xl font-bold text-blue_munsell-500">ProjectFlow</div>
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                <Link
                  href="/#"
                  className="text-outer_space-500 dark:text-platinum-500 hover:text-blue_munsell-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="text-outer_space-500 dark:text-platinum-500 hover:text-blue_munsell-500"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-outer_space-500 dark:text-platinum-500 hover:text-blue_munsell-500"
                >
                  Projects
                </Link> 
               </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-base font-medium text-outer_space-500 dark:text-platinum-500">
                    {user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : "User"}
                  </span>
                  <UserButton />
                  <SignOutButton>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                      Sign Out
                    </button>
                  </SignOutButton>
                </div>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className="block rounded-md bg-blue_munsell-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue_munsell-700"
                    // className="text-outer_space-500 dark:text-platinum-500 hover:text-blue_munsell-500"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue_munsell-600 transition hover:text-blue_munsell-600/75 sm:block"
                    // className="px-4 py-2 bg-blue_munsell-500 text-white rounded-lg hover:bg-blue_munsell-600"
                  >
                    Get Started
                  </Link>
                </>
              )}
              </div>
              <div>
                  <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="bg-[url('/meeting-bg.jpg')] bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900"
        >
        <div className="bg-black/30 backdrop-brightness-50">
          <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="max-w-prose">
              <h1 className="text-4xl font-bold sm:text-5xl dark:text-white text-gray-200 ">
                Manage Projects with
                <strong className="text-blue_munsell-500"> Kanban Boards </strong>
              </h1>

              <p className="mt-4 text-base text-pretty sm:text-lg/relaxed dark:text-gray-200 text-gray-200">
                Organize tasks, collaborate with teams, and track progress with our intuitive drag-and-drop project
                management platform.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:mt-6">
                <Link
                  href="/dashboard"
                  className="inline-flex rounded border bg-blue_munsell-500 px-5 py-3 font-medium transition-colors text-gray-200 hover:bg-blue_munsell-600 hover:text-white"
                >
                  Start Managing Projects
                  <ArrowRight className="ml-2" size={20} />
                </Link>

                <Link
                  href="/projects"
                  className="px-5 py-3 font-medium border-blue_munsell-500 shadow-sm transition-colors dark:border-gray-700 text-gray-200 hover:bg-platinum-900 hover:text-black"
                >
                  View Projects
                </Link>
              </div>

                
                <div>
                
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
