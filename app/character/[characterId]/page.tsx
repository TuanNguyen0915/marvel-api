import CharacterHeader from "@/components/characterPage/CharacterHeader"
import Comic from "@/components/characterPage/Comic"
import Series from "@/components/characterPage/Series"
import { getCharacterById } from "@/lib/api"
import React from "react"

const CharacterPage = async ({
  params,
}: {
  params: { characterId: string }
}) => {
  const { characterId } = params
  const characterData = await getCharacterById(characterId)
  const thumbnailUrl =
    characterData.thumbnail.path + "." + characterData.thumbnail.extension
  return (
    <div className="w-full space-y-10 lg:space-y-10">
      <CharacterHeader name={characterData.name}
        thumbnailUrl={thumbnailUrl}
        description={characterData.description} />
      {characterData.comics.available > 0 ? (
        <Comic
          characterId={characterId}
          available={characterData.comics.available}
        />
      ) : (
        <h1 className="text-7xl text-white">No Comics Found</h1>
      )}
      {characterData.series.available > 0 ? (
        <Series
          characterId={characterId}
          available={characterData.series.available}
        />
      ) : (
        <h1 className="text-7xl text-white">No Series Found</h1>
      )}
    </div>
  )
}

export default CharacterPage
