"use client"
import React from "react"

import Link from "next/link"

interface CardProps {
  thumbnailUrl?: string
  title?: string
  link?: string
  type?: string
}

const Card = ({ thumbnailUrl, title, link, type }: CardProps) => {
  return (
    <Link
      href={`${link}`}
      className="group relative h-[450px] w-full cursor-pointer overflow-hidden rounded-lg"
    >
      {/* BACKGROUND IMAGE */}
      <div
        style={{
          backgroundImage: `url(${thumbnailUrl})`,
        }}
        className="absolute h-full w-full rounded-lg bg-cover bg-center bg-no-repeat grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
      />
      {/* CONTENT */}
      <div className="absolute bottom-4 flex w-full items-center justify-center">
        <div className="bg-paper-box w-[80%] rounded-sm shadow-md z-10">
          <h1 className="line-clamp-1 text-center text-3xl text-gray-800 transition-all group-hover:hidden">
            {title}
          </h1>
          <h1 className="hidden w-full text-3xl text-red-500 group-hover:flex group-hover:items-center group-hover:justify-center">
            view {type}
          </h1>
        </div>
      </div>
    </Link>
  )
}

export default Card
