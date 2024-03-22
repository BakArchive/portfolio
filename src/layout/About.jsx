import ColorFont from "@/components/ColorFont";
import LeetCode from "@/components/LeetCode";

function About() {
  // <p>I am a</p>
  // <ul>
  //     <li>HomeLaber</li>
  //     <li>Summoner: Riot API</li>
  //     <li>Anime Fan: TMDB API</li>
  //     <li>LeetCoder: LeetCode API</li>
  //     <li>My Youtube: Youtube API</li>
  // </ul>
  const titleClass = "my-5 font-medium text-4xl md:text-6xl lg:text-7xl";
  const subTitleClass = "my-5 font-medium text-2xl md:text-2xl lg:text-4xl";
  const content = "m-5 text-lg md:text-xl lg:text-2xl";
  return (
    <>
      <h1 className={titleClass}>
        I'm <ColorFont text="versatile" />
      </h1>
      <section>
        <h2 className={subTitleClass}>HomeLab Player</h2>
        <p className={content}>
          In early 2022, I built my own personal server at my home. It serves
          storage based on ZFS and self-hosted services managed by K3s, so I can
          deploy various docker images upon it. With the connectivity of
          Cloudflare, I can access them everywhere to improve my efficiency and
          protect my data security. Now, it has played an important role in my
          daily life and I am satisfied with how it works.
        </p>
      </section>

      <section>
        <h2 className={subTitleClass}>LeetCoder</h2>
        <div className="grid grid-cols-12">
          <p className={content + " col-span-12 md:col-span-6"}>
            The most attractive thing on LeetCode is when you find someone's
            algorithm effectively solving a question which made you headache,
            which always blows your mind.
          </p>
          <div className="col-span-12 md:col-span-6 p-5">
            <LeetCode />
          </div>
        </div>
      </section>

      <section>
        <h2 className={subTitleClass}>Anime Fan</h2>
      </section>
    </>
  );
}

export default About;
