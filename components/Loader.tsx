"use client"

import { Loader2 } from "lucide-react"

const Loader = () => {
  return (
    <div className="mt-10 flex w-full items-center justify-center">
      <Loader2 className="animate-spin text-red-500" size={60} />
    </div>
  )
}

export default Loader
