

import Header from './components/Header'
import InfoBar from './components/InfoBar'
import Map from './components/Map'
import { isValidIP } from './components/Search';

import { useState } from 'react'
import axios from 'axios'

function App() {

  interface LocationState { // must be an object with city and region
    city: string;
    region: string;
  }

  const [ip, updateIp] = useState("")
  const [location, updateLoc] = useState<LocationState>(
    { 
      city: "", 
      region: "" 
    })
  const [timezone, updateTimez] = useState("")
  const [isp, updateIsp] = useState("")
  const [lat, updateLat] = useState(49.282730)
  const [long, updateLong] = useState(-123.120735)

  const ipInfo = (Ip : string) => {
    // gets geolocation info on the ip
    const api_key = 'at_f15zuOqz6V9EWXNblGN9H9lZcPfCq'
    const url = 'https://geo.ipify.org/api/v2/country,city?'
    // if Ip is an ip address, search by IP, else search by domain name
    const method = isValidIP(Ip) ? "ipAddress" : "domain" 

    axios.get(`${url}apiKey=${api_key}&${method}=${Ip} `)
    // updates states
      .then(res => {
        console.log(res.data)
        updateIp(res.data.ip)
        updateLoc({
          city : `${res.data.location.city}`, 
          region : `${res.data.location.region}`
        })
        updateTimez(`UTC ${res.data.location.timezone}`)
        updateIsp(res.data.isp)
        updateLong(res.data.location.lng)
        updateLat(res.data.location.lat)
      })
      .catch(err => console.log(err))
  }
  
  return (
    <>
      <div className="container">
        <Header 
            ipInfo={ipInfo}
            title="Mind Node Map"/>
        {ip !== "" &&       
            <InfoBar 
                ip= {ip}
                location={location}
                timezone={timezone}
                isp = {isp} /> }
      </div>
      <Map 
          latitude={lat}
          longitude={long}/>
    </>
  )
}

export default App
