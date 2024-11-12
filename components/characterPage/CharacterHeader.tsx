import Image from "next/image"
import React from "react"

const CharacterHeader = ({
  thumbnailUrl,
  name,
  description,
}: {
  thumbnailUrl: string
  name: string
  description?: string
}) => {
  return (
    <div className="flex w-full justify-between gap-4 max-md:flex-col">
      <Image
        priority={true}
        src={thumbnailUrl}
        alt={name}
        height={500}
        width={500}
        className="flex-1 rounded-md object-cover object-center"
      />

      <div className="flex-1 space-y-6">
        <h1 className="text-6xl font-extrabold text-red-500 max-md:text-2xl">
          {name}
        </h1>
        <p className="text-xl text-yellow-400 max-md:text-lg">
          {description ? description : "No description. We will update soon"}
        </p>
      </div>
    </div>
  )
}

export default CharacterHeader
