import { useEffect, useState } from 'react'
import './App.css'
import { ArrowIcon } from './Icons'
import { IData } from './types'
import { Map } from './components/Map'
import { APIKEY,DATA_EXAMPLE } from './constant'


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
          const response = await fetch(`https://geo.pify.org/api/v2/country,city?apiKey=${APIKEY}&ipAddress=${ip}`)
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const ipAddress = formData.get('ipAddress')?.toString().trim()
    if (ipAddress && ipAddress !== ip) {
      setIp(ipAddress)
    }
  }

  return (
    <>
      <header>
        <label>
          <h1>IP Address Tracker</h1>
          <form onSubmit={handleSubmit}>
            <input defaultValue={ip} name='ipAddress' placeholder='Search for any IP address or domain' />
            <button type='submit'><ArrowIcon /></button>
          </form>
        </label>

        {loading === false && !error ? <ul className='ip__data'>
          <li>
            <h2>Ip address</h2>
            <p className="ip__info">{data.ip}</p>
          </li>
          <li>
            <h2>Location</h2>
            <p className="ip__info">{data.location.region}</p>
          </li>
          <li>
            <h2>TimeZone</h2>
            <p className="ip__info">UTC {data.location.timezone}</p>
          </li>
          <li>
            <h2>isp</h2>
            <p className="ip__info">{data.isp}</p>
          </li>
        </ul>
          : error ? <h2> {error} </h2> :<h2>cargando...</h2>}
      </header>
      <main>
        <Map position={[data.location.lat, data.location.lng]} />
      </main>
    </>
  )
}

export default App
