import Title from "/src/components/Title.jsx";
import TimePoint from "/src/components/TimePoint.jsx";
import Anchor from "/src/components/Anchor.jsx";

function Experience({data}) {
  return (
    <section>
      <Anchor id="Experience" />
      <Title text={data.title} bold={data.boldTitle} />
      <div className="flex">
        <ul>
          {data.items.map((item, index) => (
            <TimePoint
              key={index}
              time={item.time}
              role={item.role}
              sections={item.sections}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
