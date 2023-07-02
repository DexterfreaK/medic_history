"use client";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface AppointmentBoxProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  upload?: boolean;
}
function AppointmnetBox(props: AppointmentBoxProps) {
  return (
    <div className="w-100% my-[2vh]">
      <div className="relative w-[320px]">
        <svg
          width="320"
          height="164"
          viewBox="0 0 320 174"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_12_39)">
            <rect
              width="320"
              height="174"
              rx="12"
              fill="url(#paint0_linear_12_39)"
            />
            <path
              opacity="0.1"
              d="M7.96482 127.515C22.4168 115.253 35.5858 109.723 46.6717 108.905C57.7467 108.088 66.7758 111.969 72.9998 118.603C76.0686 121.873 77.9119 126.603 78.5627 132.248C79.2132 137.89 78.6678 144.412 76.9928 151.22C73.6422 164.839 65.789 179.533 54.0846 190.516C30.7018 212.455 4.13791 208.165 -8.31183 194.896C-20.7161 181.676 -22.4284 153.303 7.96482 127.515Z"
              stroke="white"
            />
            <path
              opacity="0.1"
              d="M4.12912 108.322C21.4167 93.7441 37.3839 87.403 50.9788 86.7973C64.5654 86.1919 75.8252 91.3114 83.7359 99.7424C91.5749 108.097 93.4847 123.476 89.8586 140.172C86.2395 156.834 77.1327 174.654 63.165 187.759C35.2664 213.936 2.45454 207.725 -13.3722 190.857C-29.153 174.039 -32.2188 138.973 4.12912 108.322Z"
              stroke="white"
            />
            <path
              opacity="0.1"
              d="M-2.72317 91.193C16.3564 75.3544 34.5541 69.1324 50.4476 69.5032C66.3403 69.8739 79.9848 76.8374 89.9659 87.4749C99.8805 98.0416 103.332 116.428 100.419 135.857C97.5092 155.267 88.2629 175.592 72.9535 189.957C42.3906 218.633 3.40419 208.738 -16.5769 187.442C-26.5507 176.812 -33.1025 161.068 -32.1592 143.83C-31.2166 126.605 -22.7867 107.848 -2.72317 91.193Z"
              stroke="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_12_39"
              x1="-21"
              y1="-17"
              x2="419.5"
              y2="229"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5862D9" />
              <stop offset="1" stop-color="#C15ADA" />
            </linearGradient>
            <clipPath id="clip0_12_39">
              <rect width="320" height="174" rx="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="absolute inset-[2vw] text-white text-xl">
          {props.upload ? "Upload Previous Reports" : "Make An Appointment"}
        </div>
        <button type="button" onClick={() => props.setModal(true)}>
          <div className=" text-black text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=" absolute w-10 h-10 text-black z-50 bottom-[3vw] right-[35px] bg-white rounded-full p-1"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function UpcomingAppointmentBox() {
  return (
    <div className="relative m-[1vw] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-[1vw]">
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Family Doctor Visit
        </h5>
        <p className="text-gray-500">03.07.2023 at 07:23 PM</p>
      </div>
      <div className="flex justify-stretch w-100">
        <button
          type="button"
          className="text-[#5D64B8] bg-[#EEEEFC] focus:ring-4 focus:ring-[#06DBB6] font-lg rounded-lg px-5 py-2.5 mr-2 mb-2  focus:outline-none"
        >
          Reschedule
        </button>
        <button
          type="button"
          className="text-[#EEEEFC] bg-[#5D64B8] focus:ring-4 focus:ring-[#06DBB6] font-lg rounded-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none "
        >
          Details
        </button>
      </div>

      <div className="h-5 w-5 absolute bg-[#06DBB6] top-0 left-0 rounded-full" />
    </div>
  );
}

function AppointmentModal(props: AppointmentBoxProps) {
  return (
    <div className="modal z-[1000] fixed w-[100vw] h-[100vh] top-0 left-0 flex items-center justify-center">
      <div className="relative bg-white min-h-[60vh] w-[60vw] rounded-2xl border-2 p-2">
        <button
          type="button"
          className="absolute top-[20px] right-[10px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => props.setModal(false)}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="w-[100%] text-4xl font-bold p-[3vw]">
          Create a new Appointment
        </div>
        <div>
          <div className="px-[3vw] py-[1vh]">
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium "
            >
              Doctor UUID
            </label>
            <input
              type="text"
              id="first_name"
              className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="px-[3vw] mt-[1vh">
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium "
            >
              Date & Time for Appointment
            </label>
            <input
              type="datetime-local"
              id="first_name"
              className="w-[30%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="px-[3vw] mt-[1vh]">
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium "
            >
              Reason For Appointment
            </label>
            <textarea
              className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadModalComp(props: AppointmentBoxProps) {
  return (
    <div className="modal z-[1000] fixed w-[100vw] h-[100vh] top-0 left-0 flex items-center justify-center">
      <div className="relative bg-white min-h-[60vh] w-[60vw] rounded-2xl border-2 p-2">
        <button
          type="button"
          className="absolute top-[20px] right-[10px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2.5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => props.setModal(false)}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="w-[100%] text-4xl font-bold p-[3vw]">
          Upload Previous Reports
        </div>
        <div>
          <div className="px-[3vw] mt-[1vh">
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium "
            >
              Date & Time for Appointment
            </label>
            <input
              type="datetime-local"
              id="first_name"
              className="w-[30%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="px-[3vw] mt-[1vh]">
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium "
            >
              Reason For Appointment
            </label>
            <textarea
              className="w-[90%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="px-[3vw] mt-[1vh]">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>
          <div className="px-[3vw] mt-[2vh]">
            <button
              type="button"
              className="text-white w-[100%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
interface LandingProps {
  name: string;
}

export default function Landing(props: LandingProps) {
  const [modal, setModal] = useState(false);
  const [UploadModal, setUploadModal] = useState(false);

  return (
    <>
      {modal && <AppointmentModal setModal={setModal} />}
      {UploadModal && <UploadModalComp setModal={setUploadModal} />}
      <div className="flex z-[500] relative">
        <div className=" w-[60vw] px-[3vw] border-r-2">
          <div className="headline_greeting text-[#20234B] text-3xl font-bold mt-[3vw] ">
            Welcome, {props.name}👋
          </div>
          <div className="subtext_greeting text-[#6F7173]">
            Have any medical issue? we’re here to help you
          </div>
          <div className="flex">
            <AppointmnetBox setModal={setModal} />
            <AppointmnetBox setModal={setUploadModal} upload />
          </div>
          <div className="w-100%">
            <div className="font-bold text-xl">Upcoming Appointments</div>
            <div className="flex p-[1vw]">
              <UpcomingAppointmentBox />
              <UpcomingAppointmentBox />
            </div>
          </div>

          <div className="w-100%">
            <div className="font-bold text-xl">Current Prescriptions</div>
            <div className="flex p-[1vw]">
              <UpcomingAppointmentBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
