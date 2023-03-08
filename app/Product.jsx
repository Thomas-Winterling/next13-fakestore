import Link from "next/link"
import Image from "next/image"

export default function Product({ title, thumbnail, id }) {
  return (
    <div>
      <h1>{title.substring(0, 25)}</h1>
      <Link href={`/${id}`}>
        <Image
          src={thumbnail}
          width={800}
          height={800}
          alt={title}
          className="object-fill h-48 w-96"
        />
      </Link>
    </div>
  )
}
