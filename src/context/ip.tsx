import { createContext, ReactNode, useState } from "react";
import { ip } from "../types";

interface IProviderProp {
  children: ReactNode
}

export const IpContext = createContext({
  ip: "192.212.174.101",
  changeIp: ({ ip }: { ip: ip }) => { ip }
})

export const IpProvider = ({ children }: IProviderProp) => {
  const [ip, setIp] = useState<ip>("192.212.174.101")

  const changeIp = ({ ip }: { ip: ip }) => {
    setIp(ip)
  }

  return (
    <IpContext.Provider value={
      {
        ip,
        changeIp
      }
    }>
      {children}
    </IpContext.Provider>
  )
}