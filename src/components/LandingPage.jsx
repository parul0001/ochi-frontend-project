import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full h-screen bg-zinc-900 pt-1">
            <div className="textStructure mt-40 px-20">
                <div className="masker">
                    <h1 className="uppercase text-[8vw] font-['Founders_Grotesk_X_Condensed'] leading-[7vw]  font-bold">
                        We Create
                        </h1>
                </div>
                <div className="masker">
                    <div className="w-fit flex">
                    <motion.div initial={{width: 0}} animate={{width: '9vw'}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className="w-[9vw] h-[5vw] mr-[1vw] rounded-md    bg-[#FFFFFF] relative -top-[.5vw] overflow-hidden">
                    </motion.div>
                    <h1 className="uppercase text-[8vw] font-['Founders_Grotesk_X_Condensed'] leading-[7vw]  font-bold">
                        Eye Opening
                        </h1>

                    </div>
        
                </div>
                <div className="masker">
                    <h1 className="uppercase text-[8vw] font-['Founders_Grotesk_X_Condensed'] leading-[7vw]  font-bold">
                        Presentations
                        </h1>
                </div>
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-14">
            {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => {
                return (
                    <p  key={index} className="text-md tracking-tight leading-none font-light">{item}</p>
                )
            })}
            <div className="start flex items-center gap-3">
                <div className="px-4 py-2 border-[1px] border-zinc-400 rounded-full uppercase text-sm">start the project</div>
                <div className="w-3 h-3 rounded-full">
                    <span className="rotate-[45deg]">
                        <FaArrowUpLong />
                    </span>
                </div>
            </div>
            </div>
            
        </div>
    )

}

export default LandingPage;