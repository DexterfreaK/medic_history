interface appointmentBoxProps {
  patientName: string;
  patientAdd: string;
  patientMob: string;
  patientLastVisit: string;
}

function PatientBox(props: appointmentBoxProps) {
  return (
    <div className="relative m-[1vw] w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-[1vw]">
        <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {props.patientName}
        </h5>
        <p className="text-[#97969F]">{props.patientAdd}</p>
        <p className="text-[#97969F]">
          Last visited : {props.patientLastVisit}
        </p>
      </div>
      <div className="flex w-100 justify-between flex mt-[2vw]">
        <div className="grid place-items-center text-[#97969F]">
          {props.patientMob}
        </div>
        <button
          type="button"
          className="text-[#E40000] border-2 border-[#E40000] font-lg rounded-md px-5 py-2.5 mr-2 mb-2 focus:outline-none "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default function PatientListLanding() {
  return (
    <div>
      <div className="w-[100%] text-4xl font-bold p-[3vw]">
        Current Patient List
      </div>
      <div className="grid grid-cols-3">
        {new Array(10).fill(0).map((_, i) => (
          <PatientBox
            patientLastVisit="12/12/2021"
            patientName="Mansingh"
            patientAdd="Clock Tower Jail,Road No 11,Pilani(Raj)"
            patientMob="9702764548"
          />
        ))}
      </div>
    </div>
  );
}
