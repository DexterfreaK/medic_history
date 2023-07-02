import axios from "axios";
import { useState } from "react";
interface BasicDocinfoProps {
  docName: String;
  designation: string;
  hospital: string;
  operatingHours: string;
  lastVisited: string;
}
interface DocinfoProps {
  docID: Array<string>;
}

function BasicDocinfo(props: BasicDocinfoProps) {
  return (
    <div className="flex justify-between relative m-[1vw] w-[350px] p-4 mx-[30px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-[1vw]">
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {props.docName}
        </h5>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {props.designation}
        </h5>
        <div className="my-[2vh]">
          <p className="text-gray-500">{props.lastVisited}</p>
          <p className="text-gray-500">{props.hospital}</p>
          <p className="text-gray-500">
            Operating Hours : {props.operatingHours}
          </p>
        </div>
      </div>
      <img
        className="object-cover w-24"
        src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/858809/standing-clipart-md.png"
        alt=""
      />
    </div>
  );
}

const Doctor = ({ ID }: { ID: any }) => {
  const [docData, setDocData] = useState({} as any);
  console.log(ID);

  axios
    .get(`http://3.82.104.37:8000/doc/?id=${ID.slice(0, 10)}`)
    .then((res) => {
      console.log(res.data);
     
      setDocData(res.data);
    });
  return (
    <BasicDocinfo
      docName={docData.name}
      designation={docData.designation}
      hospital={docData.hospital}
      operatingHours={docData.working_hrs}
      lastVisited="Last Visited: 12/12/2020"
    />
  );
};

export default function DoctorsConsultedLanding(props: DocinfoProps) {
  return (
    <div>
      <div className="w-[100%] text-4xl font-bold p-[3vw]">
        Doctors Consulted
      </div>
      <div className="grid grid-cols-3">
        {props.docID.map((ID, i) => (
          <Doctor key={i} ID={ID} />
        ))}
      </div>
    </div>
  );
}
