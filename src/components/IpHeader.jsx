/* eslint-disable react/prop-types */
import { useState } from 'react'
import Arrow from '../images/icon-arrow.svg'

const IpHeader = ({setIpAddress, fetchLocation}) => {
  const [ipAddress, setLocalIpAddress] = useState("")
  const handleClick = () => {
    setIpAddress(ipAddress)
    fetchLocation(ipAddress)
  }
  return (
    <section>
      <div className='relative items-center text-center justify-center flex flex-col search-bar-container bg-cover h-96'>
        <div className=''>
          <h1 className='text-white font-semibold md:text-2xl text-xl'>IP Address Tracker</h1>
          <button className="flex md:flex-row items-center md:items-stretch p-2 md:p-4 w-full md:w-auto">
            <input
              className="text-gray-700 p-3 bg-white rounded-l-lg placeholder:text-sm md:rounded-tr-none w-full md:w-[25rem]"
              type="text"
              placeholder="Search for any IP address or domain"
              value={ipAddress}
              onChange={(event) => setLocalIpAddress(event.target.value)}
            />
            <span
              className="bg-black rounded-r-lg md:rounded-bl-none h-12 p-4 flex justify-center items-center cursor-pointer"
              onClick={handleClick}
            >
              <img src={Arrow} alt="icon-arrow" className="" />
            </span>
          </button>

        </div>
      </div>
    </section>
  )
}

export default IpHeader