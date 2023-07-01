"use client";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface appointmentBoxProps {
  VisitName: string;
  VisitDate: string;
  ReceiptURL: string;
  setPreviewUrl?: Dispatch<SetStateAction<string>>;
}

function UpcomingAppointmentBox(props: appointmentBoxProps) {
  return (
    <div className="relative m-[1vw] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-[1vw]">
        <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {props.VisitName}
        </h5>
        <p className="text-gray-500">{props.VisitDate}</p>
      </div>
      <div className="flex justify-stretch w-100">
        <button
          type="button"
          className="text-[#5D64B8] bg-[#EEEEFC] focus:ring-4 focus:ring-[#06DBB6] font-lg rounded-lg px-5 py-2.5 mr-2 mb-2  focus:outline-none"
          onClick={() => {
            props.setPreviewUrl && props.setPreviewUrl(props.ReceiptURL);
          }}
        >
          Preview
        </button>
        <button
          type="button"
          className="text-[#EEEEFC] bg-[#5D64B8] focus:ring-4 focus:ring-[#06DBB6] font-lg rounded-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none "
        >
          Donwload
        </button>
      </div>

      <div className="h-5 w-5 absolute bg-[#06DBB6] top-0 left-0 rounded-full" />
    </div>
  );
}

export default function TimelineComp() {
  const [PreviewUrl, setPreviewUrl] = useState("");

  return (
    <>
      <div className="w-[100%] text-4xl font-bold p-[3vw]">Timeline</div>
      <div className="flex">
        <div>
          <div className="w-[50vw]">
            <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 ">
              <time className="text-lg font-semibold text-gray-900 dark:text-white">
                July 2nd, 2023
              </time>
              <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700 flex">
                <UpcomingAppointmentBox
                  setPreviewUrl={setPreviewUrl}
                  VisitName="Family Doctor Visit"
                  VisitDate="03.07.2023 at 07:23 PM"
                  ReceiptURL="https://www.drishtiias.com/pdf/1594399406-world-war-i-1.pdf"
                />
                <UpcomingAppointmentBox
                  setPreviewUrl={setPreviewUrl}
                  VisitName="Family Doctor Visit"
                  VisitDate="03.07.2023 at 07:23 PM"
                  ReceiptURL="https://eforms.com/images/2019/01/Medical-Bill-Receipt-Template.png"
                />

                {/* <UpcomingAppointmentBox /> */}
              </ol>
            </div>

            <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 ">
              <time className="text-lg font-semibold text-gray-900 dark:text-white">
                July 1st, 2023
              </time>
              <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700 flex">
                <UpcomingAppointmentBox
                  setPreviewUrl={setPreviewUrl}
                  VisitName="Family Doctor Visit"
                  VisitDate="03.07.2023 at 07:23 PM"
                  ReceiptURL="https://images.template.net/wp-content/uploads/2017/05/Doctor-Payment-Receipt.jpg"
                />
              </ol>
            </div>

            <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 ">
              <time className="text-lg font-semibold text-gray-900 dark:text-white">
                June 30th, 2023
              </time>
              <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700 flex">
                <UpcomingAppointmentBox
                  setPreviewUrl={setPreviewUrl}
                  VisitName="Family Doctor Visit"
                  VisitDate="03.07.2023 at 07:23 PM"
                  ReceiptURL="https://images.template.net/wp-content/uploads/2017/05/Doctor-Payment-Receipt.jpg"
                />
              </ol>
            </div>

            <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 ">
              <time className="text-lg font-semibold text-gray-900 dark:text-white">
                June 30th, 2023
              </time>
              <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700 flex">
                <UpcomingAppointmentBox
                  setPreviewUrl={setPreviewUrl}
                  VisitName="Family Doctor Visit"
                  VisitDate="03.07.2023 at 07:23 PM"
                  ReceiptURL="https://images.template.net/wp-content/uploads/2017/05/Doctor-Payment-Receipt.jpg"
                />
              </ol>
            </div>
          </div>
        </div>
        <div className="rounded-lg relative border-2">
          <iframe
            className="sticky top-0"
            src={PreviewUrl}
            style={{ minHeight: "100vh", width: "32vw" }}
          />
        </div>
      </div>
    </>
  );
}
