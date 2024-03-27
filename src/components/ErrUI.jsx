/**
 * The general Error UI
 * @param {int} err the error code
 * @param {string} className extra class for layout
 */
function ErrUI({ err, className }) {
  const errDict = {
    401: "Missing or invalid authentication",
    403: "No Authorization",
    404: "Not Found",
  };
  const prompt = errDict[err] || null;

  return (
    <p className={`flex justify-center items-center ${className}`}>
      {prompt || err}
    </p>
  );
}

export default ErrUI;
