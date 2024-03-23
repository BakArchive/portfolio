import TimePoint from "/src/components/TimePoint.jsx";

function Experience({ data }) {
  return (
    <div className="flex">
      <ul>
        {data.map((item, index) => (
          <TimePoint
            key={index}
            time={item.time}
            role={item.role}
            sections={item.sections}
          />
        ))}
      </ul>
    </div>
  );
}

export default Experience;
