export async function getAPI({ ip, signal }) {

  const APIKEY = import.meta.env.VITE_API_KEY
  const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${APIKEY}&ipAddress=${ip}`, signal)
  if (!response.ok) {
    throw new Error("response was not ok")
  }
  return await response.json()
}