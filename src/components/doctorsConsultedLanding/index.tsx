

interface BasicDocinfoProps {
  docName:String;
  designation: string;
  hospital: string;
  operatingHours: string;
  lastVisited: string;
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
          <p className="text-gray-500">Operating Hours : {props.operatingHours}</p>
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

export default function DoctorsConsultedLanding() {
  return (
    <div>
      <div className="w-[100%] text-4xl font-bold p-[3vw]">
        Doctors Consulted
      </div>
      <div className="grid grid-cols-3">
        {new Array(4).fill(0).map((_, i) => (
          <BasicDocinfo
            key={i}
            docName={"Dr Mansingh Singh"}
            designation={"Cardiologist"}
            hospital={"Apollo Hospital"}
            operatingHours={"9am to 5pm"}
            lastVisited="Last Visited: 12/12/2020"
            
          />
        ))}
      </div>
    </div>
  );
}
