import { INFO_DATA, SPECIAL_ENTRIES } from "../constant";
import { IData, ILocation } from "../types";

interface Props {
  data: IData
}

export default function ListData({ data }: Props) {
  return (
    <ul className='ip__data'>
      {
        Object.entries(INFO_DATA).map(([key, label]) => {
          return (
            <li key={key}>
              <h2>{label}</h2>
              {SPECIAL_ENTRIES.includes(key)
                ? <p className="ip__info">{data.location[key as keyof ILocation]}</p>
                : <p className="ip__info">{data[key as keyof ILocation] }</p>}
            </li>
          )
        })
      }
    </ul>
  )
}