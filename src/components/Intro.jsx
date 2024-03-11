import Title from "/src/components/Title.jsx";
import Anchor from "/src/components/Anchor.jsx";

function Intro({data}) {
  return (
    <section>
      <Anchor id="Intro" />
      <Title text={data.title} bold={data.boldTitle} />
      <p className="my-5 text-xl">
        {data.description}
      </p>
      <div className="flex flex-wrap justify-evenly border border-dashed m-auto rounded-full lg:w-3/4">
        {
          data.links.map((item,index)=>(
            <a
            className="text-xl text-slate-500"
            key={index}
            href={item.link}
            target="_blank"
          >
            {item.name}
          </a>
          ))
        }
      </div>
    </section>
  );
}

export default Intro;
