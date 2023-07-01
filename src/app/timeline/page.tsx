import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/searchBar";
import TimelineComp from "@/components/TimelineComp";

export default function timeline() {
  return (
    <>
      <Sidebar />
      <div className="ml-[17rem]">
        <SearchBar/>
        <TimelineComp />
        
      </div>
    </>
  );
}
