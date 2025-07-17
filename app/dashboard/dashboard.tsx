"use client";

import Link from "next/link";
import { HiSearch, HiBell, HiViewGrid } from "react-icons/hi";

export function DashboardComponent() {
  return (
    <div className="min-h-screen bg-secondary-100 dark:bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 bg-secondary-50 z-50 w-full dark:border-gray-700 dark:bg-gray-800">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="mr-6 flex items-center">
                <img
                  className="mr-3 h-8"
                  alt="Aeyes Logo"
                  src="/aeyes-logo.svg"
                  height={32}
                />
                
              </Link>
              <div className="hidden lg:block">
                <div className="relative">
                  <HiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-96 rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="rounded-lg p-2 text-secondary-400 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <HiBell className="h-6 w-6" />
              </button>
              
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                  alt="User avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="fixed top-16 z-40 w-full bg-secondary-50 dark:border-gray-700 dark:bg-gray-900">
        <div className="px-6 py-3">
          <div className="flex space-x-4 overflow-x-auto justify-center">
            <Link
              href="#"
              className="whitespace-nowrap bg-primary-900 px-6 py-3 font-bold text-white rounded-xl hover:bg-primary-800"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="whitespace-nowrap bg-secondary-100 px-6 py-3 font-bold text-secondary-600 rounded-xl hover:bg-secondary-300"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="whitespace-nowrap bg-secondary-100 px-6 py-3 font-bold text-secondary-600 rounded-xl hover:bg-secondary-300"
            >
              Analytics
            </Link>
            <Link
              href="#"
              className="whitespace-nowrap bg-secondary-100 px-6 py-3 font-bold text-secondary-600 rounded-xl hover:bg-secondary-300"
            >
              Settings
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-40 p-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome to Aeyes Dashboard
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Manage your projects and track your progress.
            </p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Active Projects
              </h3>
              <p className="mt-2 text-3xl font-bold text-primary-600">12</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                +2 from last month
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Total Users
              </h3>
              <p className="mt-2 text-3xl font-bold text-green-600">1,234</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                +15% from last month
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Revenue
              </h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">$45,678</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                +8% from last month
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Activity
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary-600">JD</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      John Doe created a new project
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-green-600">SM</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Sarah Miller completed user onboarding
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      4 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">MJ</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Mike Johnson updated dashboard settings
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      6 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
