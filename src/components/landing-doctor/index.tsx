"use Client";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface BasicDocinfoProps {
  designation: string;
  hospital: string;
  operatingHours: string;
  setShowModal: Dispatch<SetStateAction<any>>;
}

interface medicalRequestProps {
  patientName: string;
  time: string;
}

interface LandingProps {
  name: string;
  designation: string;
  hospital: string;
  operatingHours: string;
  setName?: Dispatch<SetStateAction<any>>;
  setDesignation?: Dispatch<SetStateAction<any>>;
  setHospital?: Dispatch<SetStateAction<any>>;
  setWorkingHrs?: Dispatch<SetStateAction<any>>;
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
          onClick={() => {
            props.setShowModal(true);
          }}
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

function MedicalRequest(props: medicalRequestProps) {
  return <div>{props.patientName}</div>;
}

function EditModal(props: LandingProps) {
  return (
    <div className="w-[25vw] border-[#545FDD] rounded-xl m-[2vw] border-2 h-auto">
      <div className="">
        <div className="m-[1rem] font-bold text-xl text-center text-[#545FDD]">
          Edit Personal Info
        </div>

        <div className="grid place-items-center">
          <div className="mt-[3vh]">
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium "
            >
              Position
            </label>
            <input
              type="text"
              id="first_name"
              className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={props.designation}
              onChange={(e) => {
                props.setDesignation && props.setDesignation(e.target.value);
              }}
              required
            />
          </div>
          <div className="mt-[3vh]">
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium "
            >
              Hospital
            </label>
            <input
              type="text"
              id="first_name"
              className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={props.hospital}
              onChange={(e) => {
                props.setHospital && props.setHospital(e.target.value);
              }}
              required
            />
          </div>
          <div className="mt-[3vh]">
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium "
            >
              Working Hours
            </label>
            <div className="flex">
              <input
                type="time"
                id="first_name"
                className="w-[90%] mx-[1vw] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={
                  props.operatingHours && props.operatingHours.split(" ")[0]
                }
                // onChange={}
                required
              />
              to
              <input
                type="time"
                id="first_name"
                className="w-[90%] mx-[1vw] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={
                  props.operatingHours && props.operatingHours.split(" ")[2]
                }
                required
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-[10vh] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}


export default function Landing(props: LandingProps) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(props.name);
  const [designation, setdesignation] = useState(props.designation);
  const [hospital, setHospital] = useState(props.hospital);
  const [working_hrs, setWorking_hrs] = useState(props.operatingHours);

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
              setShowModal={setShowModal}
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
      {showModal && (
        <EditModal
          name={props.name}
          designation={props.designation}
          hospital={props.hospital}
          operatingHours={props.operatingHours}
          setDesignation={setdesignation}
          setWorkingHrs={setWorking_hrs}
          setHospital={setHospital}
        />
      )}
    </div>
  );
}
