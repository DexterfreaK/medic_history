import Sidebar from '@/components/Sidebar'
import SearchBar from '@/components/searchBar'
import Landing from '@/components/landing'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="">
      <Sidebar />
      <div className="ml-[16rem]">
        <SearchBar />
        <Landing />
      </div>
    </main>
  );
}
