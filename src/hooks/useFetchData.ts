import { useState, useEffect, useCallback, useContext } from "react"
import { IData, signal } from "../types"
import { DATA_EXAMPLE } from "../constant"
import { getAPI } from "../services/getAPI"
import { IpContext } from "../context/ip"

export default function useFetchData() {
  const [data, setData] = useState<IData>(DATA_EXAMPLE)
  const { ip } = useContext(IpContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()



  const fetchData = useCallback(async (signal: signal) => {
    try {
      setLoading(true)
      const data = await getAPI({ ip, signal })
      setData(data)
      setError(undefined)
    } catch (err) {
      if (err instanceof Error) {
        if (err.name !== 'AbortError') {
          setError(`Error en obtencion de datos, ${err}`)
        }
      } else {
        setError("An unknown error occurred")
      }
    } finally {
      setLoading(false)
    }
  }, [ip])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetchData(signal)

    return () => {
      controller.abort()
    }
  }, [ip, fetchData])

  return { error, data, loading }
}