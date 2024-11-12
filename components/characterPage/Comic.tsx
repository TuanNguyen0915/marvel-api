"use client"
import React, { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { getComicsByCharacterId } from "@/lib/api"
import Card from "../Card"
import Loader from "../Loader"
interface IComic {
  id: string
  title: string
  thumbnail: {
    path: string
    extension: string
  }
}
const Comic = ({
  characterId,
  available,
}: {
  characterId: string
  available: number
}) => {
  const [isOpen, setOpen] = useState(false)
  const [comics, setComics] = useState<IComic[] | null>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getComicsByCharacterId(characterId)
      setComics(data)
    }
    fetchData()
  }, [characterId])
  return (
    <div className="w-full space-y-4">
      <div
        onClick={() => setOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between"
      >
        <h1 className="cursor-pointer text-4xl font-bold text-white">
          View Comics ( {available} available)
        </h1>
        <ArrowRight
          size={40}
          className={`${isOpen && "rotate-90"} text-white transition-all`}
        />
      </div>
      {isOpen &&
        (!comics ? (
          <Loader />
        ) : (
          <div className="grid w-full grid-cols-3 gap-4 max-md:gap-2 md:grid-cols-4 lg:grid-cols-5">
            {comics.map((comic) => {
              const thumbnailUrl =
                comic.thumbnail.path + "." + comic.thumbnail.extension
              const link = ""
              return (
                <Card
                  key={comic.id}
                  title={comic.title}
                  link={link}
                  thumbnailUrl={thumbnailUrl}
                  type="comic"
                />
              )
            })}
          </div>
        ))}
    </div>
  )
}

export default Comic
