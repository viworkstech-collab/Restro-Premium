import Animated from './Animated'
import {socialLinks, quickLinks, sitemapLinks} from '../data/data.jsx';
import { Mail, Phone } from 'lucide-react'
const Footer = () => {
  return (
    <footer className="relative mt-30 overflow-hidden ">
        <div className="max-w-7xl mx-auto">
            {/* Row */}
            <div className="flex flex-wrap gap-3 justify-between pb-8 pl-5 pr-12">
                {/* Column 1 - Brand & Socails */}
                <div className="flex flex-col items-start text-left">
                    <Animated>
                        <img src="/logo.svg" alt="logo"  />
                    </Animated>
                       <Animated delay={0.2}>
                        <p  className="mt-3 text-sm/5.5 text-zinc-600 max-w-81.25 ">
                            Serving freshly prepared dish with authentic flavors, premium ingredients 
                            and exceptional hospitality every day.
                        </p>
                       </Animated>
                       <div className="flex items-center gap-1.5 mt-6">
                        {socialLinks.map((item, index)=>(
                            <Animated key={index} delay={index*0.05}>
                                <a href={item.href} className="size-7.5 rounded-full border 
                                border-slate-300 grid place-content-center ">{item.icon}</a>
                            </Animated>
                        ))}
                       </div>
                </div>
                <div className="flex flex-wrap gap-15 sm:gap-10 md:gap-19 lg:gap-20 mt-10">
                {/* Column 2 - Ouick Links */}
                <div className='flex flex-col items-start'>
                    <p className="font-medium mb-2.5">Quick Links</p>
                    <div className="flex flex-col gap-1.5">
                        {quickLinks.map((link, index)=>(
                            <Animated key={link.name} delay={index * 0.05}>
                                <a href={link.href} className='text-zinc-600 text-zinc-600 hover:text-black transition-colors'>
                                    {link.name}
                                </a>
                            </Animated>
                        ))}
                    </div>
                </div>
                    {/* Column 3 - Get in Touch */}
                    <div>
                         <p className="font-medium mb-2.5">GET in Touch</p>
                         <div className="space-y-1">
                            <Animated>
                                <a href="mailto:Restro@gmail.com" className="flex items-center gap-1 text-zinc-600 hover:text-black transition-colors">
                                    <Mail size={16} className="shrink-0" />
                                    Restro@gmail.com
                                </a>
                            </Animated>
                            <Animated>
                                <a href="tel:9875-451-540" className="flex items-center gap-1 text-zinc-600 hover:text-black transition-colors">
                                    <Phone size={16} className="shrink-0" />
                                    9875-451-540
                                </a>
                            </Animated>
                         </div>

                    </div>
                    {/* Column 4 - Sitemap */}
                    <div>
                        <p className="font-medium mb-2.5">Sitemap</p>
                        <div className="flex flex-col gap-1.5">
                            {sitemapLinks.map((link, index)=>(
                                <Animated key={link.name} delay={index * 0.05}>
                                    <a href={link.href} className="text-zinc-600 hover:text-black transition-colors">
                                        {link.name}
                                    </a>

                                </Animated>
                            ))}

                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t text-zinc-500 border-slate-200 py-4.5 flex justify-between items-center">
                <p>© 2026 All Rights Reserved To ViworkTech.</p>
                <p>Designed & built by <a href="https://www.viworktech.co.in/">ViworkTech</a></p>
            </div>
        </div>

        {/* Watermark Logo backdrop */}
        <div className="absolute bottom-11 left-20 w-full text-center select-none pointer-events-none -z-1 overflow-hidden">
            <span className='block text-[clamp(90px,20vw,270px)] leading-[0.8] tracking-wide font-urbanist font-semibold text-zinc-200'>Restro</span>
        </div>
    </footer>
  )
}

export default Footer