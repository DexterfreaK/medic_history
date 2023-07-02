"use client";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/searchBar";
import Landing from "@/components/landing-doctor";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import DoctorsConsultedLanding from "@/components/doctorsConsultedLanding";

export default function Home() {
  const patientId = "7110489d-2"; ;
  const [docData, setDocData] = useState([] as any);
  useEffect(() => {
    axios
      .get(`http://3.82.104.37:8000/patient/?id=${patientId}`)
      .then((res) => {
        console.log(res.data);
        setDocData(res.data.doc);
        console.log(res.data.doc);
        localStorage.setItem("doctorData", JSON.stringify(res.data));
      });
  }, []);

  return (
    <main className="">
      <Sidebar
        profileName={docData.name}
        profileIconLink={
          'https://images.unsplash.com/photo-1595703013566-db085ae93c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"'
        }

      />
      <div className="ml-[16rem]">
        <SearchBar uuid={docData.short_uuid} />
        <DoctorsConsultedLanding docID={docData}/>
      </div>
    </main>
  );
}
