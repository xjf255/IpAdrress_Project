import { ip, signal } from "../types"

interface Props {
  ip:ip,
  signal:signal
}

export async function getAPI({ ip, signal }:Props) {

  const APIKEY = import.meta.env.VITE_API_KEY
  const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${APIKEY}&ipAddress=${ip}`, {signal:signal})
  if (!response.ok) {
    throw new Error("IP no existente")
  }
  return await response.json()
}