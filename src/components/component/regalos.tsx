/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/hRI920Noqtw
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Caudex } from 'next/font/google'
import { Fraunces } from 'next/font/google'

caudex({
  subsets: ['latin'],
  display: 'swap',
})

fraunces({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SVGProps, useState } from "react"



export function Regalos() {
  const products = [
    {
      id: 1,
      image: "9.jpg",
      title: "Mini picnic",
      description: "30.000",
    },
    {
      id: 2,
      image: "5.jpg",
      title: "Caja decorativa",
      description: "10.000",
    },
    {
      id: 3,
      image: "6.jpg",
      title: "Ancheta 1",
      description: "45.000",
    },
    {
      id: 4,
      image: "7.jpg",
      title: "Ancheta 2",
      description: "50.000",
    },
    {
      id: 5,
      image: "8.jpg",
      title: "Ancheta 3",
      description: "50.000",
    },
    {
      id: 6,
      image: "9.jpg",
      title: "Ancheta 4",
      description: "50.000",
    },
    {
      id: 7,
      image: "10.png",
      title: "Ancheta 5",
      description: "55.000",
    },
    {
      id: 8,
      image: "Caja de Regalo Decorativa.jpg",
      title: "Caja de Regalo Decorativa",
      description: "5.000",
    },
    {
      id: 9,
      image: "Taza Personalizada.jpg",
      title: "Taza Personalizada",
      description: "15.000",
    },
    {
      id: 10,
      image: "Portarretratos.webp",
      title: "Portarretratos",
      description: "30.000",
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [cartCount, setCartCount] = useState(0)
  const [showAlert, setShowAlert] = useState(false)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
    setShowAlert(true) // Mostrar alerta cuando se agrega al carrito
  }

  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      
      <main className="container mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-background rounded-lg shadow-md overflow-hidden">
            <img
              src={`/${product.image}`} // Usar el nombre de archivo del producto
              alt={product.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-muted-foreground mt-2">{product.description}</p>
              <Button className="mt-4 w-full" onClick={handleAddToCart}>
                Agregar al carrito
              </Button>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

function CircleCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function ShoppingCartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
