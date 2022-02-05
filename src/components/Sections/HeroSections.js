import ImgHeroSections from "../../images/imgHeroSec.png"
export default function HeroSections() {
  return (
    <section className="heroSections h-screen overflow-x-hidden">
      <div className="container">
        <div className=" grid grid-cols-12 pt-20">
          <div className="col-span-6 d--flex px-6">
            <div>
              <span className="text-color_1 text-lg font-semibold">Launching Soon</span>
              <h2 className=" my-5 text-white md:text-8xl text-5xl font-bold">
              An NFT like no other
              </h2>
              <p className=" text-text_color mb-5">
                Don’t miss out on the release of our new NFT. Sign up <br />{" "}
                below to receive updates when we go live.
              </p>

              <div className="outer relative h-[60px] w-[180px] rounded-[50px]">
                <button className=" font-semibold text-xl bg-bg_color z-10 text-white h-[50px] w-[170px] rounded-[50px]">Sign Up</button>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="flex align-middle justify-center relative bg_grdcolor">
              <div className="img z-10">
              <img className=" w-42" src={ImgHeroSections} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
