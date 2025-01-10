import { useEffect, useState } from 'react'
import './App.css'
import IpHeader from './components/IpHeader'
import Stats from './components/Stats'
import Map from './components/Map'

function App() {

  const [IpAddress, setIpAddress] = useState("")
  const [location, setLocation] = useState("")
  const [timezone, setTimezone] = useState("")
  const [ISP, setISP] = useState("")
  const [coordinate, setCoordinate] = useState({  lat: 0, lng: 0,})

  const fetchLocation = (ipAddress = "") => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_rZ44tTDND1RezBQnlltQfsOrZT3yB&ipAddress=${ipAddress}`
    ) 
    .then((respond) => respond.json())
    .then((data) => {
      console.log(data)
      if (data.location){
        setIpAddress(data.ip)
        setLocation(
          `${data.location.city}, ${data.location.country}
          ${data.location.postalCode}`
        )
        setTimezone(`UTC ${data.location.timezone}`)
        setISP(`${data.isp}`)
        setCoordinate({lat:data.location.lat, lng:data.location.lng})
      } else{
        alert ("Invalid IP address. Please try again.")
      }
    })
    .catch((error) => {
      console.error("Error fetching IP Location:", error)
    })
  }

  useEffect(() => {
    fetchLocation()
  }, [])
  return (
    <>
      <div className='flex flex-col h-screen relative'>
        <IpHeader setIpAddress={setIpAddress} fetchLocation={fetchLocation} />
        <Stats ipAddress={IpAddress} location={location} timezone={timezone} isp={ISP} />
        <Map coordinate={coordinate}/>
      </div>
    </>
  )
}

export default App
