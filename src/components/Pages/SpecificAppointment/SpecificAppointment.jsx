import NavBar from "../../NavBar/NavBar";

const SpecificAppointment = () => {
  const appointment = {
    name: 'Max',
    surname: 'Doe',
    email: 'max.doe@example.com',
    date: '2022-03-25',
    pet_name: 'Bobby',
    pet_species: 'Dog',
    service: 'Check-up',
    comment: 'Bobby has been itching a lot recently.'
  };

  return (
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <h2 class="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
        {appointment?.name}'s Appointment
      </h2>
      <div className="mx-auto flex w-full max-w-[500px] flex-col items-start justify-start gap-4 rounded-md border-2 border-gray-300 p-4 shadow-lg">
        <div>
          <span className="font-bold text-blackGreen">Name: </span>
          {appointment?.name}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Surname: </span>{" "}
          {appointment?.surname}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Email: </span>{" "}
          {appointment?.email}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Reception time: </span>{" "}
          {appointment?.date}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Pet Name: </span>{" "}
          {appointment?.pet_name}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Pet Species: </span>{" "}
          {appointment?.pet_species}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Service: </span>{" "}
          {appointment?.service}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Comment: </span>{" "}
          {appointment?.comment}
        </div>
      </div>
    </div>
  );
};

export default SpecificAppointment;
