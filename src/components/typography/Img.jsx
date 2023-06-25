/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

export default function Img({ src, className }) {
  return (
    <div className="relative">
      <Image src={src || "/images/objects.png"} fill={true} className={`${className}`} />
    </div>
  );
}
