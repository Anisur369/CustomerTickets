// import vector1 from "../assets/vector1.png";
// import vector2 from "../assets/vector2.png";


export default function HeroSection({count, count2}) {
  return (
    <>
<div className="bg-[#f5f5f5] w-full">
  <div className="flex flex-col sm:flex-row w-full sm:w-[1260px] mx-auto p-[0.5rem] gap-5 sm:gap-15 py-5 sm:py-20">

    <div className="card cardBackground bgImageColor rounded-box grid content-center h-38 sm:h-61 grow place-items-center">
      <span className="text-2xl mb-2">In-Progress</span>
      <span className="text-6xl font-semibold">{count}</span>
    </div>

    <div className="card cardBackground bgImageColor2 rounded-box grid content-center h-38 sm:h-60 grow place-items-center">
      <span className="text-2xl mb-2">Resolved</span>
      <span className="text-6xl font-semibold">{count2}</span>
    </div>
    

  </div>
</div>
    </>
  )
}