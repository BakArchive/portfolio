"use client";

import { useState } from "react";

const experiences = [
  {
    id: 1,
    period: "2015 ~ 2019",
    title: "Bachelor",
    description: "Detailed description about experience 1.",
    image: "/images/experience1.jpg",
  },
  {
    id: 2,
    period: "2021 ~ 2022",
    title: "SAGI GAMES",
    description: "Detailed description about experience 2.",
    image: "/images/experience2.jpg",
  },
  {
    id: 3,
    period: "2023 ~ 2024",
    title: "QUT",
    description: "Detailed description about experience 3.",
    image: "/images/experience3.jpg",
  },
];

export default function Carousel() {
  const [selected, setSelected] = useState(experiences[0]);

  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="w-full lg:w-3/5 flex flex-col items-center">
        <div
          className="w-full h-full min-h-96 bg-cover bg-center animate-moveBg"
          style={{ backgroundImage: `url(${selected.image})` }}
        ></div>

        <div className="flex w-full justify-center md:justify-end flex-wrap p-4 gap-2">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelected(exp)}
              className={`px-4 py-2 text-sm font-bold ${
                selected.id === exp.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-800"
              } rounded-lg hover:bg-blue-400`}
            >
              {exp.period}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side: Details */}
      <div className="w-full lg:w-2/5 p-8 flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-right">{selected.title}</h1>
        <h1 className="text-2xl font-bold text-right">{selected.period}</h1>
        <p className="mt-4 text-lg">{selected.description}</p>
      </div>
    </div>
  );
}
