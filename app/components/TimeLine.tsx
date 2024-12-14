import TimePoint from "./TimePoint";

export default function TimeLine({
  data,
  className,
}: {
  data: {
    time: string;
    role: string;
    sections: { section: string; detail: string }[];
  }[];
  className?: string;
}) {
  return (
    <div className={`flex ${className}`}>
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
