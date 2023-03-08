import Product from "./Product"

export default async function Home() {
  
  const data = await fetch(
    `https://dummyjson.com/products/`
  )
  const res = await data.json()
  return (
    <main>
      <div className="grid grid-cols-fluid gap-16">
        {res.products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
          />
        ))}
      </div>
    </main>
  )
}
