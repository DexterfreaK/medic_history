import Image from "next/image";

interface sidebarProps {
  sidebarItems: any;
  profileIconLink: String;
  profileName: String;
}

export default function Sidebar(props: sidebarProps) {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 drop-shadow-2xl shadow-2xl"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between drop-shadow-2xl">
          <div className="text-center py-[5vh] font-bold text-3xl">
            Medic History
          </div>
          <ul className="space-y-2 my-[10vh] font-medium">
            {props.sidebarItems.map((item: any, index: number) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="flex items-center p-[3.5vh] text-gray-900 rounded-lg hover:text-[#D9DEFF] hover:bg-[#545fdd] text-lg"
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="text-center border-gray-300 border-2 rounded-lg p-[.8vw] mb-[5vh] mx-[2vw] flex items-center">
            <Image
              src={`${props.profileIconLink}`}
              alt="Profile Icon"
              className="object-cover rounded-full"
              width={40}
              height={40}
              style={{ height: "40px" }}
            />
            <div className="mx-[1vw]">{props.profileName}</div>
          </div>
        </div>
      </aside>
    </>
  );
}
