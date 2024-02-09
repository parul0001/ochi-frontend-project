

function Cards() {
    return (
        <div  className="w-full h-screen bg-zinc-100 flex gap-5 items-center px-20">
            <div className="cardcontainer w-1/2 h-[60vh]">
                <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className="absolute left-10 bottom-10 px-2 py-1 rounded-full border-2 border-[#CDEA68] text-[#CDEA68]"> &copy;2019-2024</button>
                </div>
            </div>
            <div className="cardcontainer w-1/2 h-[60vh] flex gap-5">
            <div className="card relative w-full rounded-xl h-full bg-[#212121] flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className="absolute left-10 bottom-10 px-2 py-1 rounded-full border-2 border-zinc-100 text-white uppercase text-[12px]">Rating 5.0 on clutch</button>
                </div>
            <div className="card relative w-full rounded-xl h-full bg-[#212121] flex items-center justify-center">
                    <img  className="w-24" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className="absolute left-10 bottom-10 px-2 py-1 rounded-full border-2 border-zinc-100 text-white uppercase text-[12px]"> Business Bootcamp alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;