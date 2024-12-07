const year: number = new Date().getFullYear();

export default function FootNote() {
  return (
      <p className="text-center">Crafted by Muen Yu | ©{year} All rights reserved</p>
  );
}
