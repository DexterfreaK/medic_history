import Image from "next/image";

export default function Sidebar() {
  const sidebarItem = [
    {
      name: "Home",
      icon: "/",
      link: "/",
    },
    {
      name: "Timeline View",
      icon: "/",
      link: "/",
    },
    {
      name: "Medical History",
      icon: "/",
      link: "/",
    },
    {
      name: "Doctors Consulted",
      icon: "/",
      link: "/",
    },
  ];


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
          <div className="text-center py-[5vh] font-bold text-3xl">Medic History</div>
          <ul className="space-y-2 my-[10vh] font-medium">
            {sidebarItem.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center p-[3.5vh] text-gray-900 rounded-lg hover:text-[#D9DEFF] hover:bg-[#545fdd] "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    className="hover:color:white"
                  >
                    <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" />
                  </svg>
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="text-center border-gray-300 border-2 rounded-lg p-[.8vw] mb-[5vh] mx-[2vw] flex items-center">
            <Image
              src={
                "https://images.unsplash.com/photo-1595703013566-db085ae93c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
              }
              alt="Profile Icon"
              className="object-cover rounded-full"
              width={40}
              height={40}
              style={{ height: "40px" }}
            />
            <div className="mx-[1vw]">Otter King</div>
          </div>
        </div>
      </aside>
    </>
  );
}
