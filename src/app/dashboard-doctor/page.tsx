"use client";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/searchBar";
import Landing from "@/components/landing-doctor";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const sidebarItem = [
    {
      name: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      link: "/dashboard-doctor",
    },
    {
      name: "Patient List",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      link: "/dashboard-doctor/patientList",
    },
    {
      name: "Med Request",
      icon: "/",
      link: "/dashboard-doctor/medRequest",
    },
  ];

  const docID = "3cbb30bf-c";

  const [docData, setDocData] = useState({} as any);
  useEffect(() => {
    axios.get(`http://3.83.94.126:8000/doc/?id=${docID}`).then((res) => {
      setDocData(res.data);
      localStorage.setItem("doctorData", JSON.stringify(res.data));
    });
  }, []);

  return (
    <main className="">
      <Sidebar
        doctorSidebar
        profileName={docData.name}
        profileIconLink={
          'https://images.unsplash.com/photo-1595703013566-db085ae93c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"'
        }
      />
      <div className="ml-[16rem]">
        <SearchBar uuid={docData.short_uuid} />
        <Landing
          name={docData.name}
          designation={docData.designation}
          hospital={docData.location}
          operatingHours={docData.working_hrs}
        />
      </div>
    </main>
  );
}
