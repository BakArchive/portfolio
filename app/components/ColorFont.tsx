export default function ColorFont({ text, className }: { text: string; className?: string }) {
  return (
    <span
      className={`font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ${
        className || ""
      }`}
    >
      {text}
    </span>
  );
}
