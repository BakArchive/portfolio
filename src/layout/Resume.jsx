import ColorFont from "@/components/ColorFont";

function Resume() {
  const titleClass = "my-5 font-medium text-4xl md:text-6xl lg:text-7xl";
  return (
    <h1 className={titleClass}>
      I'm <ColorFont text="professional" />
    </h1>
  );
}

export default Resume;
