

function About() {
    return ( 
        <div className="w-full px-8 py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
            <h1 className="font-['Neue_Montreal'] text-[4.2vw] leading-[4.5vw] tracking-tight">
            Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>
            <div className="flex gap-5 w-full border-t-[2px] border-[#85a60c] mt-20 pt-10">
                <div className="w-1/2 ">
                    <h1 className="text-5xl">Our Approach: </h1>
                    <button className="flex items-center gap-10 px-6 py-4 bg-zinc-900 mt-10 rounded-full text-white">Read More
                    <div className="rounded-full w-3 h-3 bg-zinc-100"></div>
                    </button>

                </div>
                <div className="w-1/2 h-[60vh] bg-[#4d6005] rounded-3xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>

            </div>

        </div>
    )
}

export default About;