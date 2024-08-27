import { useContext } from "react";
import { ArrowIcon } from "../Icons";
import { IpContext } from "../context/ip";

export function Input() {

  const { ip, changeIp } = useContext(IpContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const ipAddress = formData.get('ipAddress')?.toString().trim()
    if (ipAddress && ipAddress !== ip) {
      changeIp({ ip: ipAddress })
    }
  }

  return (
    <label>
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input defaultValue={ip} name='ipAddress' placeholder='Search for any IP address or domain' />
        <button type='submit'><ArrowIcon /></button>
      </form>
    </label>
  )
}