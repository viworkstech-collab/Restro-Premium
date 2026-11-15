import Animated from '../components/Animated'
import heroBanner from "../assets/heroBanner.png"
import user1 from "../assets/user-1.jpeg"
import user2 from "../assets/user-2.jpeg"
import user3 from "../assets/user-3.jpeg"
import user4 from "../assets/user-4.jpeg"

import { Star } from 'lucide-react'

const avatars = [user1, user2, user3, user4]

const HeroSection = () => { 

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-auto bg-cover bg-center px-4 pt-20"
      style={{ backgroundImage: `url(${heroBanner})`}}>
        <Animated y={-20} delay={0.2}>
            <p className="text-orange-600"> WHERE FLAVOR MEETS ELEGANCE </p>

        </Animated>


        <Animated>
            <h1 className='text-5xl md:text-6xl font-medium max-w-3xl text-center mt-5
            font-urbanis text-balance'>Crafted for unforgettable dining moments</h1>
        </Animated>

        <Animated  delay={0.2}>
            <p className="max-w-md text-center mt-7 ">Experience carefully curated menus, fresh local ingredients and impeccable service in a space made for 
                every celebration.</p>
        </Animated>

        <Animated>
            <a href="#booking-process" className="inline-block mt-8 rounded-full bg-orange-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Book a table
            </a>
        </Animated>

        <Animated className="flex items-center justify-center md:justify-start mt-9">
            <div className="flex -space-x-3.5 pr-3">
                {avatars.map((src, i)=>(
                    <img key={i} src={src} alt="guest" className="size-10 border-2
                    border-slate-50 rounded-full hover:translate-y-px transition"   />
                ))}
            </div>
            <div>
                <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i)=>(
                        <Star key={i} className="size-3.5 fill-orange-500 text-orange-500 " />
                ))}
                </div>
                <p className="text-zinc-800">4.8/5 Rating - 10,000 reviews</p>
            </div>
        </Animated>
    </section>
  )
}

export default HeroSection