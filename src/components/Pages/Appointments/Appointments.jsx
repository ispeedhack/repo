import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";

const Appointments = () => {
    const appointments = [
        {
            id: '1',
            name: 'Max',
            date: '2022-03-25'
        },
        {
            id: '2',
            name: 'Lucy',
            date: '2022-03-26'
        },
        {
            id: '3',
            name: 'Charlie',
            date: '2022-03-27'
        },
        {
            id: '4',
            name: 'Jack',
            date: '2022-03-28'
        }
    ];


  return (
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <h2 className="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
        Appointments
      </h2>
      <div>
        <ul className="mx-auto flex h-auto w-full max-w-[500px] flex-col gap-5 px-5">
          {appointments.map((appoint) => {
            return (
              <li className="w-full rounded-md border-2 border-gray-300 bg-[#f2ffe2de] shadow-lg">
                <div className="text-md flex h-32 w-full flex-col items-center justify-center gap-5 font-bold text-blackGreen">
                  {appoint.name} requested an appointment for: {appoint.date}
                  <Link to={`/appointments/${appoint.id}`}>
                    <button className="rounded-md px-4 py-2 underline">
                      See detailed information {"->"}
                    </button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;
