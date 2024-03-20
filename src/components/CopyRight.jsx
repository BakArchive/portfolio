function CopyRight() {
  const time = new Date().getFullYear();
  return (
    <p className="text-center">
      Crafted by Muen Yu | &#169;{time} All rights reserved
    </p>
  );
}

export default CopyRight;