import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { IpProvider } from './context/ip.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <IpProvider>
    <App />
  </IpProvider>,
)
