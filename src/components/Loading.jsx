/**
 * Loading component, used before data is ready
 * @param {*} param0 
 * @returns 
 */
function Loading({ className }) {
  return (
    <div className={`flex justify-center items-center ${className || ""}`}>
      <span className="loading loading-spinner text-neutral"></span>
    </div>
  );
}

export default Loading;