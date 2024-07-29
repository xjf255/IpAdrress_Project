import './App.css'

function App() {

  const DATA = {
    address: "192.212.174.101",
    location: 'nose',
    timeZone: 'utc',
    isp: "space"
  }

  return (
    <>
      <header>
        <label>
          <h1>IP Address Tracker</h1>
          <div>
            <input placeholder='Search for any IP address or domain' />
            <button> {">"} </button>
          </div>
        </label>

        <ul className='ip__data'>
          <li>
            <h2>Ip address</h2>
            <p className="ip__info">{DATA.address}</p>
          </li>
          <li>
            <h2>Location</h2>
            <p className="ip__info">{DATA.location}</p>
          </li>
          <li>
            <h2>TimeZone</h2>
            <p className="ip__info">{DATA.timeZone}</p>
          </li>
          <li>
            <h2>isp</h2>
            <p className="ip__info">{DATA.isp}</p>
          </li>
        </ul>
      </header>
      <main>
      </main>
    </>
  )
}

export default App
