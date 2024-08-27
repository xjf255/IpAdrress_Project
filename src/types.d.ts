type signal = AbortSignal
type ip = string

interface ILocation {
  region: string
  timezone: string
  lat: number
  lng: number
}

export interface IData extends Partial<ILocation>{
  ip: string
  location: ILocation
  isp: string
}