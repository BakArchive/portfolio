export default function Content({ text, className }: { text?: string; className?: string }) {
  return (
    <p className={`text-lg md:text-xl lg:text-2xl ${className || ""}`}>
      {text}
    </p>
  );
}
