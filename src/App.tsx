import { useEffect, useState } from 'react'
import './App.css'
import { IData } from './types'
import { Map } from './components/Map'
import { APIKEY,DATA_EXAMPLE } from './constant'
import { Input } from './components/Input'
import ListData from './components/ListData'


function App() {
  const [data, setData] = useState<IData>(DATA_EXAMPLE)
  const [ip, setIp] = useState<string>("192.212.174.101")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        if (isMounted) {
          setLoading(true)
          const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${APIKEY}&ipAddress=${ip}`)
          if (!response.ok) {
            throw new Error("response was not ok");
          }
          const data = await response.json()
          setData(data)
          setLoading(false)
        }
      } catch (error) {
        setError(`Error fetching data:, ${error}`)
        setLoading(false)
      }
    }
    fetchData()

    return () => { isMounted = false }
  }, [ip])

  return (
    <>
      <header>
        <Input ip={ip} setIp={setIp}/>
        {loading === false && !error 
        ? <ListData data={data}/>
          : error ? <h2> {error} </h2> :<h2>cargando...</h2>}
      </header>
      <main>
        <Map position={[data.location.lat, data.location.lng]} />
      </main>
    </>
  )
}

export default App
