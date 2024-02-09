import { motion } from 'framer-motion'

function Marquee() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed='.1' className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
            <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap mb-4">
                <motion.h1 initial={{x: 0}} animate={{x: '-100%'}} transition={{ease: 'linear', repeat: Infinity, duration: 5}} className="text-[25vw] pr-10 leading-none font-['Founders_Grotesk_X_Condensed'] font-semibold uppercase pt-10 -mb-10">We are Ochi</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: '-100%'}} transition={{ease: 'linear', repeat: Infinity, duration: 5}} className="text-[25vw] leading-none font-['Founders_Grotesk_X_Condensed'] font-semibold uppercase pt-10 -mb-10">We are Ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee;