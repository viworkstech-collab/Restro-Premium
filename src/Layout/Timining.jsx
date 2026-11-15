 import Animated from '../components/Animated'
 import restroTiming from "../assets/restro-timing.png"
 import { timingData } from "../data/data"

const Timining = () => {
  return (
  <section id="timing" className="px-auto mt-44">
    <Animated scale={0.8} y={0} className="w-full max-5xl h-162.5 rounded-3xl bg-cover bg-center flex items-center justify-center md:justify-start px-9 md:px-10 overflow-hidden mx-auto" style={{ backgroundImage: `url(${restroTiming})` }}>
        {/*White Card OverLay*/}
        <div className="bg-white rounded-3xl p-6 w-full max-w-sm">
            <Animated delay={0.2}>
                <h3 className="text-3xl mb-10 font-medium">Opening Time:</h3>
            </Animated>
            <div className="space-y-5">
              {timingData.map((item, index)=>(
                    <Animated key={index} delay={index*0.15} className="flex justify-between items-center hover:text-orange-500">
                        <span className={`font-medium text-base ${item.day === "Closed" ? "text-zinc-400" : ""}`}>
                            {item.day}
                        </span>
                        <span className="font-medium text-zinc-500">{item.hours}</span>
                    </Animated>
                ))}
                <Animated delay={0.3} className="mt-10 flex justify-center">
                    <a href="#booking-process" className='bg-orange-500  hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition'>
                        Book a table
                    </a>

                </Animated>

            </div>
        </div>
    
    
    </Animated>

  </section>
  )
}

export default Timining;