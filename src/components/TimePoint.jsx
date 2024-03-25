function TimePoint({ time, role, sections, className }) {
  return (
    <li className={`relative flex items-baseline gap-6 pb-5 ${className}`}>
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
        <p className="text-xl text-base-content">{time}</p>
        <p className="mt-2 text-base-content">As a {role}</p>
        {sections.map((item, index) => (
          <p key={index} className="mt-2 text-base-content">
            <span className="font-bold">{item.section}: </span>{item.detail}
          </p>
        ))}
      </div>
    </li>
  );
}

export default TimePoint;
