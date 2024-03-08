function TimePoint({ time, role, detail }) {
  return (
    <li className="relative flex items-baseline gap-6 pb-5">
      <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          className="bi bi-circle-fill fill-gray-400"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
      </div>
      <div>
        <p className="text-xl text-gray-600">{time}</p>
        <p className="mt-2 text-gray-600">As a {role}</p>
        <p className="mt-2 text-gray-600">{detail}</p>
      </div>
    </li>
  );
}

export default TimePoint;
