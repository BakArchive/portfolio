/**
 * the component showing copyright info
 * @param {*} param0 
 * @returns 
 */
function CopyRight({ className }) {
  const time = new Date().getFullYear();
  return (
    <p className={`text-center ${className || ""}`}>
      Crafted by Muen Yu | &#169;{time} All rights reserved
    </p>
  );
}

export default CopyRight;
