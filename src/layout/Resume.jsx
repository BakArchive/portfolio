import ColorFont from "@/components/ColorFont";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import config from "@/config";

// Question: usually, we split component by business or functionality?
function Resume() {
  const titleClass = "mt-10 font-medium text-4xl md:text-6xl lg:text-7xl";
  const subTitleClass = "my-10 font-medium text-2xl md:text-2xl lg:text-4xl";
  const content = "text-lg md:text-xl lg:text-2xl";

  return (
    <>
      <h1 className={titleClass}>
        I'm <ColorFont text={config.resume.name} />
      </h1>

      <section className="mt-10 grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-8">
          <p className={content}>
            {config.resume.intro}
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <img className="w-64 m-auto" src="/t-rex.svg" />
        </div>
      </section>

      <section className="mt-10">
        <h2 className={`${subTitleClass} text-center`}>My Skill Set</h2>
        <Skills data={config.resume.skills} />
      </section>

      <section className="mt-10">
        <h2 className={`${subTitleClass} text-center`}>My Qualifications</h2>
        <div className="grid grid-cols-12 gap-3">
          {config.resume.qualifications.map((item, index) => (
            <div
              key={index}
              className="card col-span-full md:col-span-6 lg:col-span-3 bg-base-100 hover:bg-base-200 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                {item.detail && <p>{item.detail}</p>}
                {item.link && (
                  <div className="card-actions justify-end">
                    <a href={item.link} target="_blank">
                      <i className="text-xl ti ti-link"></i>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className={subTitleClass}>My Experience</h2>
        <Experience data={config.resume.experience} />
      </section>
    </>
  );
}

export default Resume;
