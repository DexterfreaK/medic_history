"use client";
import Image from "next/image";
import header from "@/assets/header.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import pill from "@/assets/pill.png";
import { useRouter } from "next/navigation";

interface DrugProps {
  drugName: String;
  drugclass: String;
  setDosageData?: Dispatch<SetStateAction<any>>;
  dosageData?: Array<any>;
  currentItems?: number;
  setCurrentItems?: Dispatch<SetStateAction<any>>;
  Insidetable?: boolean;
}
interface SidebarProps {
  setPrescriptionData: Dispatch<SetStateAction<any>>;
}

interface DrugCellProps {
  printmode?: boolean;
  dosage: {
    morning: string;
    evening: string;
    night: string;
    afterfood: boolean;
  };
  duration: string;
  drugname: string;
  drugclass: string;
}

interface BasicInfoProps {
  uuid?: string;
  setUuid?: Dispatch<SetStateAction<any>>;

  name?: string;
  setName?: Dispatch<SetStateAction<any>>;

  age?: any;
  setAge?: Dispatch<SetStateAction<any>>;

  add?: string;
  setAdd?: Dispatch<SetStateAction<any>>;

  weight?: any;
  setWeight?: Dispatch<SetStateAction<any>>;

  height?: any;
  setHeight?: Dispatch<SetStateAction<any>>;

  gender?: string;
  setGender?: Dispatch<SetStateAction<any>>;

  setFollowUp?: Dispatch<SetStateAction<any>>;

  Diagnosis?: string;
  setDiagnosis?: Dispatch<SetStateAction<any>>;
}
function Sidebar(props: SidebarProps) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(0);

  useEffect(() => {
    axios
      .get(`http://3.82.104.37:8000/scrape/?format=json&searchitem=${query}`)
      .then((res) => {
        JSON.stringify(res.data) != "{}" && props.setPrescriptionData(res.data);
        console.log(res.data["drug name"]);
      });
  }, [searchResults]);

  return (
    <form className="p-[1vw]">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      ></label>
      <div className="text-[11px] my-[1vh] text-gray-800">
        Search drugs Here and add to prescription (Can choose any drugs webscrapped from
        https://www.drugs.com/drug_information.html )
      </div>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Drugs..."
          required
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => {
            setSearchResults(searchResults + 1);
            e.preventDefault();
          }}
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

function BasicInfo(props: BasicInfoProps) {
  const today = new Date();
  return (
    <div>
      <div>
        <Image src={header} alt="" width={1000} style={{ height: "200px" }} />
      </div>
      <div className="my-[4vh]">
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Patient UUID [Try to use 64aa3e4e-5 to autofill patient details]
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="T"
              onChange={(e) => props.setUuid && props.setUuid(e.target.value)}
            />
          </div>

          <div className="grid gap-2 mb-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 w-[18vw] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                value={props.name}
                onChange={(e) => props.setName && props.setName(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Age
              </label>
              <input
                type="number"
                className="bg-gray-50 border w-[18vw] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={props.age}
                onChange={(e) => props.setAge && props.setAge(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="add"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                className="bg-gray-50 border w-[18vw] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder="123-45-678"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={props.add}
                onChange={(e) => props.setAdd && props.setAdd(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 w-[18vw] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                value={props.gender}
                onChange={(e) =>
                  props.setGender && props.setGender(e.target.value)
                }
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Weight (in kg)
              </label>
              <input
                type="number"
                id="company"
                className="bg-gray-50 border w-[18vw] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Flowbite"
                required
                value={props.weight}
                onChange={(e) =>
                  props.setWeight && props.setWeight(e.target.value)
                }
              />
            </div>

            <div>
              <label
                htmlFor="add"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Height (in cm)
              </label>
              <input
                type="number"
                className="bg-gray-50 border w-[18vw] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // placeholder="123-45-678"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={props.height}
                onChange={(e) =>
                  props.setHeight && props.setHeight(e.target.value)
                }
                required
              />
            </div>
          </div>
          <div className="grid gap-2 mb-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="current_date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date of prescription
              </label>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  datepicker-autohide
                  type="text"
                  id="current_date"
                  className=" w-[18vw] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  defaultValue={
                    today.toUTCString().slice(0, 16) +
                    ", " +
                    today.toLocaleTimeString()
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="current_date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Follow Up
              </label>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  datepicker-autohide
                  type="date"
                  id="current_date"
                  onChange={(e) =>
                    props.setFollowUp && props.setFollowUp(e.target.value)
                  }
                  className=" w-[18vw] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
              <div className="flex items-center space-x-1 sm:pr-4">
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Attach file</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Embed map</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Format code</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Add emoji</span>
                </button>
              </div>
              <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Add list</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Settings</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Timeline</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Download</span>
                </button>
              </div>
            </div>
            <button
              type="button"
              data-tooltip-target="tooltip-fullscreen"
              className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Full screen</span>
            </button>
            <div
              id="tooltip-fullscreen"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Show full screen
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea
              id="editor"
              rows={1}
              className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Start your Diagnosis reciept here..."
              onChange={(e) =>
                props.setDiagnosis && props.setDiagnosis(e.target.value)
              }
              required
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}

function BasicInfoPrint(props: BasicInfoProps) {

  const today = new Date();
  return (
    <div>
      <div>
        <Image
          src={header}
          alt=""
          width={1000}
          height={10}
          style={{ height: "200px" }}
        />
      </div>
      <div className="my-[4vh]">
        <form>
          <div className="mb-6 flex">
            <div className="text-sm font-bold text-gray-900">
              Patient UUID:{" "}
            </div>{" "}
            <div className="text-sm font-bold text-gray-900">{props.uuid}</div>
          </div>

          <div className="grid gap-2 mb-6 md:grid-cols-2">
            <div className="flex">
              <div className="text-sm font-bold text-gray-900">Name: </div>{" "}
              <div className="text-sm font-bold text-gray-900">
                {props.name}
              </div>
            </div>

            <div className="flex">
              <div className="text-sm font-medium text-gray-900">Age: </div>{" "}
              <div className="text-sm font-medium text-gray-900">
                {props.age}
              </div>
            </div>

            <div className="flex">
              <div className="text-sm font-medium text-gray-900">Address: </div>{" "}
              <div className="text-sm font-medium text-gray-900">
                {props.add}
              </div>
            </div>

            <div className="flex">
              <div className="text-sm font-medium text-gray-900">Gender: </div>{" "}
              <div className="text-sm font-medium text-gray-900">
                {props.gender}
              </div>
            </div>

            <div className="flex">
              <div className="text-sm font-medium text-gray-900">Weight: </div>{" "}
              <div className="text-sm font-medium text-gray-900">
                {props.weight} Kgs
              </div>
            </div>

            <div className="flex">
              <div className="text-sm font-medium text-gray-900">Height: </div>{" "}
              <div className="text-sm font-medium text-gray-900">
                {props.height} cms
              </div>
            </div>
          </div>
          <div className="grid gap-2 mb-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="current_date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date of prescription
              </label>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  disabled
                  type="text"
                  id="current_date"
                  className=" w-[18vw] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  defaultValue={
                    today.toUTCString().slice(0, 16) +
                    ", " +
                    today.toLocaleTimeString()
                  }
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="current_date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Follow Up
              </label>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  disabled
                  type="date"
                  id="current_date"
                  onChange={(e) =>
                    props.setFollowUp && props.setFollowUp(e.target.value)
                  }
                  className=" w-[18vw] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="flex">
          <div className="text-md font-bold font-[1100] mr-[1vw]">
            Diagnosis:{" "}
          </div>{" "}
          <div className="text-sm font-medium text-gray-900">
            {props.Diagnosis}
          </div>
        </div>
      </div>
    </div>
  );
}

function Drug(props: DrugProps) {
  return (
    <div className="block bg-white w-[12vw] p-2 text-[#545FDD] border border-[#545FDD] rounded-lg shadow flex justify-between">
      <div>
        <h5 className="mb-2 text-lg font-bold tracking-tight ">
          {props.drugName}
        </h5>
        <p className="mb-2 text-sm font-md tracking-tight font-grey-800">
          {props.drugclass}
        </p>
      </div>
      <div className="grid place-items-center">
        {!props.Insidetable && (
          <button
            onClick={() => {
              props.setDosageData &&
                props.dosageData &&
                props.setDosageData([
                  ...props.dosageData,
                  {
                    id: props.currentItems && props.currentItems + 1,
                    DrugName: props.drugName,
                    DrugClass: props.drugclass,
                    dosage: {
                      morning: "0",
                      evening: "0",
                      night: "0",
                      afterfood: false,
                    },
                    duration: "0",
                  },
                ]);
              props.setCurrentItems &&
                props.setCurrentItems(
                  props.currentItems && props.currentItems + 1
                );

              console.log(props.dosageData);
            }}
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

function DrugCell(props: DrugCellProps) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <Drug
          drugName={props.drugname}
          drugclass={props.drugclass}
          Insidetable
        />
      </th>
      <td className="px-6 py-4 ">
        <div className="flex">
          <div className="flex">
            {!props.printmode && (
              <input type="number" className="w-[5vw]" defaultValue={0} />
            )}
            {props.printmode && (
              <div className="text-xs py-4">{props.dosage?.morning}</div>
            )}

            <div className="text-xs p-4">Morning, </div>
          </div>

          <div className="flex">
            {!props.printmode && (
              <input type="number" className="w-[5vw]" defaultValue={0} />
            )}
            {props.printmode && (
              <div className="text-xs py-4">{props.dosage?.evening}</div>
            )}
            <div className="text-xs p-4">Evening</div>
          </div>

          <div className="flex">
            {!props.printmode && (
              <input type="number" className="w-[5vw]" defaultValue={0} />
            )}
            {props.printmode && (
              <div className="text-xs py-4">{props.dosage?.night}</div>
            )}
            <div className="text-xs p-4">Night</div>
          </div>

          <div className="flex text-xs">
            {!props.printmode && (
              <select name="" id="" className="text-xs p-2">
                <option value="Before Food" className="">
                  Before Food
                </option>
                <option value="After Food">After Food</option>
              </select>
            )}
            {props.printmode && (
              <div className="text-xs py-4">
                {props.dosage?.afterfood ? "After Food" : "Before Food"}
              </div>
            )}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 ">
        <div className="flex">
          {!props.printmode && (
            <input type="number" className="w-[5vw]" defaultValue={0} />
          )}
          {props.printmode && (
            <div className="text-xs py-4">{props.duration}</div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default function NewReciepts() {
  const [print, setPrint] = useState(false);
  const [data, setdata] = useState(null);
  const [uuid, setUuid] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [add, setAdd] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [prescriptionData, setPrescriptionData] = useState(null);
  const [FollowUp, setFollowUp] = useState("");
  const [Diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState([]);

  const [currentItem, setCurrentItem] = useState(0);

  const [dosageData, setDosageData] = useState<any[]>([]);

  // get current date time

  useEffect(() => {
    axios.get(`http://3.82.104.37:8000/patient/?id=${uuid}`).then((res) => {
      setdata(res.data);
      setName(res.data.name);
      setAge(res.data.age);
      setAdd(res.data.address);
      setGender(res.data.gender);
      setWeight(res.data.weight);
      setHeight(res.data.height);
      console.log(res.data);
      console.log(dosageData);
    });
  }, [uuid]);

  return (
    <div>
      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setPrint(!print)}
        >
          Print
        </button>
      </div>
      {!print && (
        <div className="flex  p-[1rem]">
          <div className="w-[900px]">
            <BasicInfo
              setUuid={setUuid}
              name={name}
              setAdd={setAdd}
              add={add}
              height={height}
              setHeight={setHeight}
              gender={gender}
              setGender={setGender}
              setName={setName}
              age={age}
              setAge={setAge}
              weight={weight}
              setWeight={setWeight}
              setFollowUp={setFollowUp}
              setDiagnosis={setDiagnosis}
            />
            <div className="">
              <div className="text-sm font-medium text-gray-900 mb-[2vh]">
                Prescription
              </div>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-center">
                        Medicine Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Dosage
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dosageData &&
                      dosageData.map((data, key) => (
                        <DrugCell
                          drugname={data.DrugName}
                          drugclass={data.DrugClass}
                          dosage={data.dosage}
                          duration={data.duration}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[75vh] sticky top-0 bg-[#F9FAFB] ml-[1rem] rounded-3xl ">
            <Sidebar setPrescriptionData={setPrescriptionData} />
            <div className="grid justify-items-center">
              {prescriptionData && (
                // <div className="m-[1vw] p-[1vw]  text-white"></div>
                <Drug
                  drugName={prescriptionData["drug name"]}
                  drugclass={prescriptionData["drug class"]}
                  setDosageData={setDosageData}
                  dosageData={dosageData}
                  setCurrentItems={setCurrentItem}
                  currentItems={currentItem}
                />
              )}
            </div>
          </div>
        </div>
      )}
      {print && (
        <div className="flex  p-[1rem]">
          <div className="w-[1000px]">
            <BasicInfoPrint
              uuid={uuid}
              name={name}
              add={add}
              height={height}
              gender={gender}
              age={age}
              weight={weight}
              Diagnosis={Diagnosis}
            />

            <div className="mt-[5vh]">
              <div className="text-md font-bold text-gray-900 mb-[2vh]">
                Prescription:
              </div>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 ">
                        Medicine Name
                      </th>
                      <th scope="col" className="px-6 py-3 ">
                        Dosage
                      </th>
                      <th scope="col" className="px-6 py-3 ">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dosageData &&
                      dosageData.map((data, key) => (
                        <DrugCell
                          drugname={data.DrugName}
                          drugclass={data.DrugClass}
                          dosage={data.dosage}
                          duration={data.duration}
                          printmode
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
