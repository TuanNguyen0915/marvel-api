// import axios from 'axios'
import md5 from "md5"

const timeStamp = new Date().getTime()
const hash = md5(
  String(
    timeStamp +
      process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY! +
      process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!,
  ),
)
export const getCharacterByBane = async (name: string) => {
  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}&hash=${hash}&ts=${timeStamp}&limit=100`
  const res = await fetch(url)
  const result = await res.json()
  const { data } = result
  return data.results
}

export const getCharacterById = async (id: string) => {
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}&hash=${hash}&ts=${timeStamp}&limit=50`
  const res = await fetch(url)
  const result = await res.json()
  const { data } = result
  return data.results[0]
}

export const getComicsByCharacterId = async (id: string) => {
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}&hash=${hash}&ts=${timeStamp}&limit=50`
  const res = await fetch(url)
  const result = await res.json()
  const { data } = result
  return data.results
}


export const getSeriesByCharacterId = async (id: string) => { 
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}/series?apikey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY}&hash=${hash}&ts=${timeStamp}&limit=50`  
  const res = await fetch(url)  
  const result = await res.json()  
  const { data } = result  
  return data.results  
}