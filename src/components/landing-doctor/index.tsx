
interface BasicDocinfoProps {
  designation: string;
  hospital: string;
  operatingHours : string;
}

interface medicalRequestProps{
  patientName : string;
  time : string;
}

interface LandingProps {
  name: string;
  designation: string;
  hospital: string;
  operatingHours: string;
}


function BasicDocinfo(props: BasicDocinfoProps) {
  return (
    <div className="flex relative m-[1vw] w-[350px] p-4  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-[1vw]">
    
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {props.designation}
        </h5>
        <p className="text-gray-500">{props.hospital}</p>
        <p className="text-gray-500">{props.operatingHours}</p>

        <button
          type="button"
          className="mt-[4vh] text-[#545FDD] hover:text-white border border-[#545FDD] hover:bg-[#545FDD] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
        >
          Edit Info
        </button>
      </div>
      <img
        className="object-cover w-24"
        src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/858809/standing-clipart-md.png"
        alt=""
      />
    </div>
  );
}


function MedicalRequest(props : medicalRequestProps){
  return(
    <div>
      {props.patientName}
    </div>
  )

}

export default function Landing(props: LandingProps) {
  return (
    <div className="flex ">
      <div className="w-[60vw] px-[3vw] border-r-2">
        <div className="headline_greeting text-[#20234B] text-3xl font-bold mt-[3vw] ">
          Welcome, {props.name}🩺
        </div>
        <div className="subtext_greeting text-[#6F7173]">
          Dashboard is up-to-date with Requests
        </div>

        <div className="w-100% mt-[4vh]">
          <div className="font-bold text-xl">Basic Info</div>
          <div className="flex">
            <BasicDocinfo
              designation={props.designation}
              hospital={props.hospital}
              operatingHours={props.operatingHours}
            />
          </div>
        </div>

        <div className="w-100%">
          <div className="font-bold text-xl mb-5">Create New Reciept</div>
          <a
            className="border-dashed flex p-[5vw] border-2 rounded-3xl justify-items-center justify-center place-items-center"
            href="/dashboard-doctor/create-new-reciept"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#545FDD"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
