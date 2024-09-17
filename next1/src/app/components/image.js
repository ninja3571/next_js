import Image from "next/image";

export default function Imagge() {
  return (
    <div>
    <Image
      src="/components/cat.png"
      width={500}
      height={300}
      alt="image"
      priority
    />
    </div>
  )
}