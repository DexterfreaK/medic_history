"use client";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/searchBar";
import Landing from "@/components/landing-doctor";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import PatientListlanding from "@/components/patientListLanding";

export default function Home() {

  const docID = "9bf88a89-1";

  const [docData, setDocData] = useState({} as any);
  useEffect(() => {
    axios.get(`http://3.82.104.37:8000/doc/?id=${docID}`).then((res) => {
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
        <PatientListlanding/>
      </div>
    </main>
  );
}
