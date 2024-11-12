"use client"
import React, { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

import Card from "../Card"
import Loader from "../Loader"
import { getSeriesByCharacterId } from "@/lib/api"

interface ISeries {
  id: string
  title: string
  thumbnail: {
    path: string
    extension: string
  }
}
const Series = ({
  characterId,
  available,
}: {
  characterId: string
  available: number
}) => {
  const [isOpen, setOpen] = useState(false)
  const [series, setSeries] = useState<ISeries[] | null>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSeriesByCharacterId(characterId)
      setSeries(data)
    }
    fetchData()
  }, [characterId])
  console.log(series)
  return (
    <div className="w-full space-y-4">
      <div
        onClick={() => setOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between"
      >
        <h1 className="cursor-pointer text-4xl font-bold text-white">
          View Series ( {available} available)
        </h1>
        <ArrowRight
          size={40}
          className={`${isOpen && "rotate-90"} text-white transition-all`}
        />
      </div>
      {isOpen &&
        (!series ? (
          <Loader />
        ) : (
          <div className="grid w-full grid-cols-3 gap-4 max-md:gap-2 md:grid-cols-4 lg:grid-cols-5">
            {series.map((series) => {
              const thumbnailUrl =
                series.thumbnail.path + "." + series.thumbnail.extension
              const link = ""
              return (
                <Card
                  key={series.id}
                  title={series.title}
                  link={link}
                  thumbnailUrl={thumbnailUrl}
                  type="series"
                />
              )
            })}
          </div>
        ))}
    </div>
  )
}

export default Series
