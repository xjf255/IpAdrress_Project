import { ArrowIcon } from "../Icons";

export function Input({ip,setIp}){
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const ipAddress = formData.get('ipAddress')?.toString().trim()
    if (ipAddress && ipAddress !== ip) {
      setIp(ipAddress)
    }
  }

  return(
    <label>
    <h1>IP Address Tracker</h1>
    <form onSubmit={handleSubmit}>
      <input defaultValue={ip} name='ipAddress' placeholder='Search for any IP address or domain' />
      <button type='submit'><ArrowIcon /></button>
    </form>
  </label>
  )
}