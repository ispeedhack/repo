import React, { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import {medicationsByPurpose} from "./data";

const Calculator = () => {
    const [weight, setWeight] = useState(0);
    const [medication, setMedication] = useState("");
    const [dosage, setDosage] = useState(0);
    const [unit, setUnit] = useState("");

    const calculateDosage = () => {
        const flatMedications = medicationsByPurpose.flatMap(group => group.medications)
        const medicationData = flatMedications.find(med => med.name === medication);
        const dosagePerKg = medicationData ? medicationData.dosagePerKg : 0;
        const dosage = Math.round((weight * dosagePerKg) * 10) / 10;
        setDosage(dosage);
        setUnit(medicationData.unit);
    };

    return (
        <div className="min-h-screen bg-[#adc6af]">
            <NavBar bg={"#adc6af"} />
            <h2 className="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-bgGreen md:text-6xl xl:text-7xl">
                Калькулятор дозування ліків
            </h2>
            <div className="mx-auto p-4 space-y-4 text-center md:max-w-md lg:max-w-lg">
                <input className="w-full p-3 bg-gray-100 text-gray-700 border-2 border-gray-200 rounded-md shadow-md focus:outline-none focus:border-indigo-500"
                       type="number"
                       onChange={(e) => setWeight(e.target.value)}
                       placeholder="Введіть вагу вашого улюбленця, кг"
                />

                <select className="w-full p-3 bg-gray-100 text-gray-700 border-2 border-gray-200 rounded-md shadow-md focus:outline-none focus:border-indigo-500"
                        onChange={(e) => setMedication(e.target.value)}
                >
                    <option>Оберіть препарат</option>
                    {medicationsByPurpose.map((group) => (
                        <optgroup key={group.purpose} label={group.purpose}>
                            {group.medications.map((med) => (
                                <option key={med.name} value={med.name}>
                                    {med.name}
                                </option>
                            ))}
                        </optgroup>
                    ))}
                </select>
                <button className="services-button h-[45px] w-[200px] border border-bgGreen bg-[#adc6af] text-bgGreen"
                        onClick={calculateDosage}
                >
                    Розрахувати дозування
                </button>
            </div>
            {dosage && (
                <p className="mt-4 text-center text-bgGreen font-bold text-2xl">
                    Необхідне дозування - {dosage}{unit}
                </p>
            )}
        </div>
    );
};

export default Calculator;