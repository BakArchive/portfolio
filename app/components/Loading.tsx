export default function Loading({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <span className="loading loading-spinner text-neutral"></span>
    </div>
  );
}
