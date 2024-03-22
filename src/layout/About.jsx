import ColorFont from "@/components/ColorFont";
import LeetCode from "@/components/LeetCode";
import Animes from "@/components/Animes";

function About() {
  const titleClass = "my-5 font-medium text-4xl md:text-6xl lg:text-7xl";
  const subTitleClass = "my-5 font-medium text-2xl md:text-2xl lg:text-4xl";
  const content = "m-5 text-lg md:text-xl lg:text-2xl";
  return (
    <>
      <h1 className={titleClass}>
        I'm <ColorFont text="Multifaceted" />
      </h1>

      <section>
        <h2 className={subTitleClass}>Blogger</h2>
        <p className={content}>
          Over the years since 2017, my blog has been a canvas for sharing my
          evolving experiences and thoughts, capturing a journey of personal
          growth and exploration. Each post reflects a chapter of my life,
          offering insights, reflections, and moments that have shaped me along
          the way.
        </p>
      </section>

      <section>
        <h2 className={subTitleClass}>HomeLab Player</h2>
        <p className={content}>
          In early 2022, I built my own personal server at my home. It serves
          storage based on ZFS and self-hosted services managed by K3s, so I can
          deploy various docker images upon it. With the connectivity of
          Cloudflare, I can access them everywhere to improve my efficiency and
          protect my data security. Now, it plays an important role in my daily
          life and I am satisfied with how it works.
        </p>
      </section>

      <section>
        <h2 className={subTitleClass}>LeetCoder</h2>
        <div className="grid grid-cols-12">
          <p className={content + " col-span-12 md:col-span-6"}>
            The most attractive thing to me on LeetCode is when someone's
            algorithm effectively solving a question which made me headache,
            which always blows my mind. Now I try to post my own solutions on LeetCode to
            reinforce my understanding to them.
          </p>
          <div className="col-span-12 md:col-span-6 p-5">
            <LeetCode />
          </div>
        </div>
      </section>

      <section>
        <h2 className={subTitleClass}>Anime Fan</h2>
        <p className="text-center m-10 text-xl">
          I appreciate the artistry and storytelling found in Japanese anime.
        </p>
        <div className="m-5">
          <Animes />
        </div>
      </section>
    </>
  );
}

export default About;
