import Animated from '../components/Animated'
import Chef from '../assets/chef.png'
import {featuresData} from '../data/data'
import {ChefHat,Leaf,Heart} from 'lucide-react'

const Features = () => {

const iconMap={
    ChefHat,
    Leaf,
    Heart

}

  return (
   <section id="features" className="px-auto mt-20">

     <div className="text-center mb-16">
            <Animated>
                <p className="text-orange-500 font-medium uppercase mb-3">
                  What Sets Us Apart  
                </p>
            </Animated> 
            <Animated>
                <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance ">
                    Crafting memorable dining experiences
                </h2>
            </Animated> 
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-14 max-w-7xl mx-auto">
            <div className='space-y-10  max-w-md '>
                {featuresData.map((item,index)=>{
                    const IconComponent = iconMap[item.icon]
                    return(
                        <Animated key={index} y={150} delay={index*0.15} className='group flex items-start gap-4 text-left '>
                            {IconComponent &&(
                                <IconComponent  className="text-orange-600 size-5 shrink-0 mt-0.5 transition-all duration-300 group-hover:fill-orange-600"/>
                            )}
                            <div>
                                <h3 className='text-xl mb-2'>{item.title}</h3>
                                <p className='text-zinc-600 max-w-sm'>{item.description}</p>
                            </div>

                        </Animated>
                    )
                    
                })}
            </div>

            <Animated x={50} y={0}>
                <img src={Chef} alt='Chef' className='w-full max-w-sm h-111 object-cover rounded-3xl' />
            </Animated>

        </div >
   </section>
  )
}

export default Features