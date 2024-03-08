import Title from "/src/components/Title.jsx"
import Anchor from "/src/components/Anchor.jsx"

function Intro() {
  const links = {
    Blog: "https://mashiro.best",
    Linkedin: "https://www.linkedin.com/in/muen-yu-802b29228/",
    GitHub: "https://github.com/MuenYu",
    LeetCode: "https://leetcode.com/muenyu/",
  };

  return (
    <>
      <Anchor id="Intro" />
      <Title text="Hi, I'm" bold="Muen" />
      <p className="my-5 text-xl">
        I am a person with a strong curiosity, and it propels me towards the
        field of technology. I can feel my passion and eagerness for new
        knowledge and open source. I believe that learning by doing is the best
        strategy for me, and I have gained a lot of practical skills through
        this approach. In the future, I want to become a full-stack developer
        who knows every detail in software development process.
      </p>
      <div className="flex flex-wrap justify-evenly">
        {Object.keys(links).map((link, index) => (
          <a className="text-slate-500" key={index} href={links[link]} target="_blank">
            {link}
          </a>
        ))}
      </div>
    </>
  );
}

export default Intro;
