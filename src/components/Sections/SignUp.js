import Img_1 from "../../images/img-1.png";
export default function SignUp() {
  return (
    <section className="signUp my-14">
      <div className="container overflow-hidden">
        <div className=" grid grid-cols-12 pt-20 border-opacity-40 border-gray-500 border-y-2">
          <div className="col-span-6 d--flex  px-6">
            <div>
              <span className="text-color_1 text-lg font-semibold">Launching Soon</span>
              <h2 className=" my-5 text-white md:text-6xl text-5xl font-bold">
                An NFT like no other
              </h2>
              <p className=" text-text_color mb-5">
                Don’t miss out on the release of our new NFT. Sign up <br />{" "}
                below to receive updates when we go live.
              </p>

              <div class="outer relative h-[60px] w-[180px] rounded-[50px]">
                <button className=" font-semibold text-xl bg-bg_color z-10 text-white h-[50px] w-[170px] rounded-[50px]">Sign Up</button>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex align-middle justify-center relative bg_grdcolor">
              <div className="img z-10">
              <img className=" w-42" src={Img_1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
