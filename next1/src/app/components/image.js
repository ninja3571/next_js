import Image from "next/image";

export default function Imagge() {
  return (
    <Image
      src="/components/cat.png"
      width={500}
      height={300}
      alt="image"
    />
  )
}