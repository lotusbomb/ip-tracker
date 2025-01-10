/* eslint-disable react/prop-types */

const Stats = ({ipAddress, location, timezone, isp}) => {
    return (
      <section>
          <div className='bg-white rounded-lg p-4 z-10 items-center text-center justify-center flex flex-col md:flex-row gap-3'>
              <div className='w-full border-slate-300 flex flex-col gap-2 items-center md:border-r-2 px-4'>
                  <p className='text-sm text-slate-400 font-semibold'>IP ADDRESS</p>
                  <p className="text-black font-bold text-lg">{ipAddress}</p>
              </div>
              <div className='w-full border-slate-300 flex flex-col gap-2 items-center md:border-r-2 px-4'>
                  <p className='text-xs text-slate-400 font-semibold'>LOCATION</p>
                  <p className='text-black font-bold text-[15px] uppercase'>{location}</p>
              </div>
              <div className='w-full border-slate-300 flex flex-col gap-2 items-center md:border-r-2 px-4'>
                  <p className='text-sm text-slate-400 font-semibold'>TIMEZONE</p>
                  <p className='text-black font-bold text-lg'>{timezone}</p>
              </div>
              <div className='w-full border-slate-300 flex flex-col gap-2 items-center px-4'>
                  <p className='text-sm text-slate-400 font-semibold'>ISP</p>
                  <p className='text-black font-bold text-[15px] uppercase'>{isp}</p>
              </div>
          </div>
      </section>
    )
  }
  
  export default Stats