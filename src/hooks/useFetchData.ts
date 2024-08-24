import { useState, useEffect, useCallback } from "react"
import { IData } from "../types"
import { DATA_EXAMPLE } from "../constant"
import { getAPI } from "../services/getAPI"
// type Abo

export default function useFetchData() {
  const [data, setData] = useState<IData>(DATA_EXAMPLE)
  const [ip, setIp] = useState<string>("192.212.174.101")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const fetchData = useCallback(async (signal) => {
    try {
      setLoading(true)
      const data = await getAPI({ ip, signal })
      setData(data)
      setError(undefined)
    } catch (err) {
      if (err instanceof Error) {
        if (err.name !== 'AbortError') {
          setError(`Error fetching data:, ${err}`)
        }
      } else {
        setError("An unknown error occurred")
      }
    } finally {
      setLoading(false)
    }
  },[ip])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    
    fetchData(signal)

    return () => {
      controller.abort()
    }
  }, [ip,fetchData])

  return { error, data, setIp, ip, loading }
}