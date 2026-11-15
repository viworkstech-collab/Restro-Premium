import Animated from '../components/Animated'
 import about from '../assets/about.png'
 import left from '../assets/iconL.png'
  import  right  from '../assets/iconR.png'
const About = () => {
  return (
    <section id='about' className="auto mt-44">
        <div className='flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto'>
            {/* Left Side: Main Image */}
            <Animated scale={0.8} y={0} >
                <img src={about} alt="Dish" className="max-w-147 w-full h-full object-cover rounded-3xl " />
            </Animated>
             {/* Right Side:Content Details */}
             <div>
            <Animated scale={0.8} y={0} className="flex items-center gap-2" >
                <img src={left} alt="iconeLeft" />
                <span className="font-medium uppercase">
                    Crafted with Passion
                </span>
                <img src={right} alt="iconeRight" />
            </Animated>

             <Animated scale={0.8} y={0} className="flex items-center gap-2" >
                <h2 className='mt-5 text-4xl md:text-5xl text-balance'>
                    Experience dining beyond expctation
                </h2>
            </Animated>

             <Animated delay={0.2}>
                <p className="mt4.5 text-zinc-600 max-w-sm">
                    We combine fresh local ingrediendts, creative recipes and elegants presentation to deliver 
                    a memorable experience with every visit.
                </p>
             </Animated>
            
            <Animated className="mt-9 bg-orange-500 text-white p-2 pr-8 rounded-lg flex items-center gap-3 w-fit">
               <img src={about} alt="Bistro Royal Location Preview"
               className="size-15 rounded-lg object-cover shrink-0" />
               <div className="flex flex-col gap-2">
                <p className="font-medium">Bistro Royal, NY</p>
                <a href="#">View on Map</a>

               </div>
             </Animated>





             </div>


        </div>
    </section>
  )
}

export default About 