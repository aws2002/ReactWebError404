import Logo_404 from "../../images/image-left.png"
import Logo_404_2 from "../../images/right-shape.png"
export default function Error404() {
  return (
    <div className=" container sm:px-6 py-7 px-12 ">
      <div className="grid grid-cols-12 gap-x-20">
        <div className="md:col-span-6 col-span-12 md:w-full w-96">
            <img src={Logo_404} alt="image-left"/>
            <h1 className=" text-5xl my-8 font-bold text-white">We can't find the page you are looking for.</h1>
            <span className=" font-semibold text-white">This page has been relocated or removed.</span>
            <button className=" block mt-7 text-white bg-amber-400 font-semibold px-12 py-3 mb-10">Go Home</button>
        </div>
        <div className="md:col-span-6 col-span-12 md:w-full w-96">
            <img src={Logo_404_2} alt="image-left" className="min-w-full" />
        </div>
      </div>
    </div>
  );
}
