import './App.css'
import { Map } from './components/Map'
import { Input } from './components/Input'
import ListData from './components/ListData'
import useFetchData from './hooks/useFetchData'


function App() {
  const { error, data, loading } = useFetchData()

  return (
    <>
      <header>
        <Input />
        {loading === false && !error
          ? <ListData data={data} />
          : error ? <h2> {error} </h2> : <h2>cargando...</h2>}
      </header>
      <main>
        <Map position={[data.location.lat, data.location.lng]} />
      </main>
    </>
  )
}

export default App
