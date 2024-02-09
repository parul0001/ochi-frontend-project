


function Featured() {
    return (    
        <div className="w- full py-10">
            <div className="w-full px-10 border-b-[1px] pb-20 border-zinc-700">
                <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight ">Featured projects</h1>
            </div>
            <div className="px-12">
                <div className="card w-full flex gap-10 mt-10">
                    <div  className="cardContainer relative w-1/2 h-[80vh]  rounded-xl">
                        <h1 className="absolute left-full -translate-x-10 top-1/2 -translate-y-1/2 text-6xl text-[#CDEA68] leading-none tracking-tighter">{''.split('').map( (item, index) => <span key={index}>{item}</span>)}</h1>
                        <div className="card w-full h-full
                         rounded-xl overflow-hidden">
                            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                        </div>
                    </div>
                    <div  className="cardContainer relative w-1/2 h-[80vh]  rounded-xl">
                    <h1 className="absolute right-full translate-x-10 top-1/2 -translate-y-1/2 text-6xl text-[#CDEA68] leading-none tracking-tighter">{''.split('').map( (item, index) => <span key={index}>{item}</span>)}</h1>
                    <div className="card w-full h-full
                         rounded-xl overflow-hidden"><img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" /></div> 
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Featured;