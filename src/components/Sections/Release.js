import React from "react";
import Img_1 from "../../images/img 4.png";
import { FaArrowRight } from "react-icons/fa";
export default function Release() {
    const dataRelease=[
        {
            id:1,
            titel:"Initial Release 4/11",
            subText_1:"We have released four limited edition NFTs early which can be bid on via OpenSea .",
            subText_2:"These will be the only four of these NFTs we ever make, so be sure not to miss out!",
            subText_3:"50% of proceeds go to charity.",
            img:Img_1,
            btn:"Check them out",
            order:"",
            href_1:"",
            href_2:"",
            bg:"bg_1"
        },
        {
            id:2,
            titel:"Initial Release 4/11",
            subText_1:"We have released four limited edition NFTs early which can be bid on via OpenSea .",
            subText_2:"These will be the only four of these NFTs we ever make, so be sure not to miss out!",
            subText_3:"50% of proceeds go to charity.",
            img:Img_1,
            btn:"Check them out",
            order:"order-1",
            href_1:"",
            href_2:"",
            bg:"bg_2"
        },
    ]
  return (
    <section>
      <div className=" container px-6">
        <div className=" grid grid-cols-1 gap-x-14">
          {dataRelease.map((item)=>(
            <div className={`col-span-1 ${item.bg} rounded-xl mb-20`} key={item.id}>
            <div className=" grid grid-cols-12 pt-14 px-14 h-full">
              <div className={`md:col-span-5 d--flex ${item.order} col-span-12 my-11`}>
                <ul>
                  <li>
                    <h3 className={`text-5xl font-bold mb-8`}>
                      {item.titel}
                    </h3>
                  </li>
                  <li className=" mb-4">
                    <p className=" font-semibold">
                      {item.subText_1} <a href={item.href_1} className="underline">OpenSea</a> .
                    </p>
                  </li>
                  <li className=" mb-4">
                    <p className=" font-semibold">
                      {item.subText_2}
                    </p>
                  </li>
                  <li className=" mb-4">
                    <p className=" font-semibold">
                    {item.subText_3}
                    </p>
                  </li>
                  <li>
                    <a href={item.href_2} className=" font-semibold">
                      {item.btn} <FaArrowRight className="ml-3"/>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-7 flex justify-center">
                <img src={Img_1} alt="" />
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
