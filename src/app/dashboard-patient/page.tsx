"use client"
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/searchBar";
import Landing from "@/components/landing";

import axios from "axios";
import { useEffect ,useState} from "react";


export default function dasboardPatient() {

  const uuid = "4b5df29f-9";
  const [patientData, setPatientData] = useState({} as any);

  useEffect(() => {
    axios.get(`http://3.83.94.126:8000/patient/?id=${uuid}`).then((res) => {
      setPatientData(res.data)
      localStorage.setItem("patientData",JSON.stringify(res.data))
    });
  }, []);
  return (
    <main className="">
      <Sidebar
        profileName={patientData.name}
        profileIconLink={
          "https://images.unsplash.com/photo-1595703013566-db085ae93c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
        }
      />
      <div className="ml-[16rem]">
        <SearchBar uuid={patientData.short_uuid}/>
        <Landing name={patientData.name} />
      </div>
    </main>
  );
}
