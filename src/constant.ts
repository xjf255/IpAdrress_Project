export const APIKEY = import.meta.env.VITE_API_KEY

export const DATA_EXAMPLE = {
  ip: "192.212.174.101",
  location: {
    region: 'Brooklyn, NY 10001',
    timezone: '-05:00',
    lat: 51.505,
    lng: -0.09,
  },
  isp: "SpaceX Starlink"
}

export const INFO_DATA = {
  ip: "Ip address",
  region: "Location",
  timezone: "TimeZone",
  isp: "Isp"
}

export const SPECIAL_ENTRIES = ["region", "timezone"]