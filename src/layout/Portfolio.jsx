import ColorFont from "@/components/ColorFont";

function Portfolio() {
  const titleClass = "my-5 font-medium text-4xl md:text-6xl lg:text-7xl";
  return (
    <h1 className={titleClass}>
      I'm <ColorFont text="productive" />
    </h1>
  );
}

export default Portfolio;
