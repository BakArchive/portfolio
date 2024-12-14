export default function SectionTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2 className={`font-medium text-2xl md:text-2xl lg:text-4xl ${className}`}>
      {text}
    </h2>
  );
}
