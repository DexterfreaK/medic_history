import Sidebar from "@/components/Sidebar";
import NewReciepts from "@/components/newReciepts";


import Image from "next/image";

export default function Home() {

  return (
    <main className="">
      <Sidebar
        doctorSidebar
        profileName={""}
        profileIconLink={
          'https://images.unsplash.com/photo-1595703013566-db085ae93c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"'
        }
      />
      <div className="ml-[16rem]">
        {/* <SearchBar /> */}
        <NewReciepts />
      </div>
    </main>
  );
}
