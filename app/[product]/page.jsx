
import Image from "next/image"
import Link from "next/link"

export async function generateStaticParams() {
  
  const data = await fetch(
    `https://dummyjson.com/products`
  )
  const res = await data.json()

  return res.products.map((product) => ({
    product: toString(product.id),
  }))
}

export default async function ProductDetail({ params }) {
  const { product } = params
  const data = await fetch(
    `https://dummyjson.com/products/${product}`
  )
  const res = await data.json()

  return (
    <div>
      <div>
        <h2 className="text-4xl">{res.title}</h2>
        <h1 className="text-lg ">Price: {res.price} $</h1>
        <h1 className="text-lg ">
          Product description: <br/> 
          {res.description}
        </h1>
        <Image
          className="my-12"
          src={res.thumbnail}
          alt={res.title}
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="flex justify-between">
        <button class="btn btn-orange">
          Buy Product
        </button>
        <button class="btn btn-green">
          <Link href="/">
            Back
          </Link>
        </button>
      </div>
    </div>
  )
}
