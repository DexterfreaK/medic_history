import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/searchBar";
import Landing from "@/components/landing";
import Image from "next/image";
import Link from "next/link";
import LandingPageAsset from "@/assets/LandingPage.png";

export default function Home() {
  return (
    <main className="">
      <div className="bg- z-[1000] fixed w-[100vw] h-[100vh] top-0 left-0 flex items-center justify-center">
        <div>
          <Image src={LandingPageAsset} alt="Landing" width={600} />
        </div>
        <div>
          <div className="text-6xl font-bold">Medic History 🩺</div>
          <div className="w-[100%] text-2xl font-bold mt-[10vh]">
            Login to your account
          </div>
          <div className="py-[1vh]">
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium "
            >
              Username
            </label>
            <input
              type="text"
              id="first_name"
              className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="py-[1vh]">
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium "
            >
              Passoword
            </label>
            <input
              type="text"
              id="first_name"
              className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div className="flex justify-between">
            <Link
              href="/dashboard-doctor"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login as a doctor
              </span>
            </Link>
            <Link
              href="/dashboard-patient"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login as a patient
              </span>
            </Link>
          </div>

          <div
            id="toast-default"
            className="flex mt-[4vh] items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div className="ml-3 text-sm font-normal">
              Backend Requires SSL Certificate which we were unable to install.
              <br />
              Hence we would be grateful if you could turn off connection
              security in your browser. For more info :
              <a href="https://github.com/vercel/vercel/discussions/5287" > Link</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
