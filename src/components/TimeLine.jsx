import TimePoint from "/src/components/TimePoint.jsx";

/**
 * A timeline component
 * @param {*} param0 
 * @returns 
 */
function TimeLine({ data, className }) {
  return (
    <div className={`flex ${className || ""}`}>
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

export default TimeLine;
