import Card from "@/components/Card"
import { getCharacterByBane } from "@/lib/api"
import React from "react"

export interface ICharacter {
  thumbnail: {
    path: string
    extension: string
  }
  id: string
  name: string
}

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>
}) => {
  const query = (await searchParams).query
  if (!query) return null
  const charactersData = await getCharacterByBane(query) as ICharacter[]
  return (
    <div>
      <h1 className="text-center text-4xl text-red-500">
        <span className="text-yellow-400">Search for:</span> {query} (
        {charactersData.length}{" "}
        {charactersData.length === 1 ? "result" : "results"})
      </h1>
      <div className="mt-20 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {charactersData.map((character) => {
          const thumbnailUrl =
            character.thumbnail.path + "." + character.thumbnail.extension
          const link = `/character/${character.id}`
          return (
            <Card
              key={character.id}
              title={character.name}
              link={link}
              thumbnailUrl={thumbnailUrl}
              type="character"
            />
          )
        })}
      </div>
    </div>
  )
}

export default SearchPage
