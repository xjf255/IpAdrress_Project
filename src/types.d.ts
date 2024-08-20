interface ILocation {
  region:string
  timezone:string
  lat:number
  lng:number
}

export interface IData {
  ip:string
  location:ILocation
  isp:string
}