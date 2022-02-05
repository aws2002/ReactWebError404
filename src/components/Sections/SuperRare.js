import Slider from "react-slick";
import Img_1 from "../../images/Rectangle 5.png";
import Img_2 from "../../images/image 5.png";
import Img_3 from "../../images/Rectangle 5 (3).png"
import Img_4 from "../../images/Rectangle 5 (2).png"
import Img_5 from "../../images/Rectangle 5 (1).png"
export default function SuperRare() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dataSuperRare = [
    {
      id: "#12983",
      img: Img_1,
      name: "Purple Man",
      time: "1 day left",
      price: "2.99 ETH",
    },
    {
      id: "#12983",
      img: Img_3,
      name: "Beige",
      time: "1 day left",
      price: "2.99 ETH",
    },

    {
      id: "#12983",
      img: Img_4,
      name: "Green",
      time: "1 day left",
      price: "2.99 ETH",
    },
    {
      id: "#12983",
      img: Img_5,
      name: "Red Man",
      time: "1 day left",
      price: "2.99 ETH",
    },
    {
        id: "#12983",
        img: Img_4,
        name: "Green",
        time: "1 day left",
        price: "2.99 ETH",
      },
  ];
  return (
    <section className="superRare overflow-hidden my-10 px-6">
      <div className="container">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-12">
            <h3 className=" text-white text-5xl font-bold mb-8">
              LE Super Rare Auction
            </h3>
            <p className=" text-text_color font-semibold">
              We have released four limited edition NFTs early which can be bid
              on via{" "}
              <a href="" className="underline ">
                OpenSea
              </a>{" "}
              .
            </p>
            <Slider {...settings}>
              {dataSuperRare.map((item)=>(
                  <div className="my-10" key={item.id}>
                  <div className="md:mr-5 mr-0">
                    <img className="w-full" src={item.img} alt="" />
                    <div className="rounded-b-2xl bg-black text-white p-4 pb-5">
                      <div className=" grid grid-cols-2">
                        <div className="col-span-1">
                          <span className=" text-color_3 font-semibold">
                            Gloop Series
                          </span>
                        </div>
                        <div className="col-span-1 text-right">
                          <span className=" text-text_color">Top bid</span>
                        </div>
                        <div className="col-span-1">
                          <h4 className=" font-bold text-xl my-2">{item.name}</h4>
                        </div>
                        <div className="col-span-1 text-right">
                          <p className="my-2 text-xl">
                            <img className="mr-2" src={Img_2} alt="" /> {item.price}
                          </p>
                        </div>
                        <div className="col-span-1">
                          <span className=" text-text_color">{item.id}</span>
                        </div>
                        <div className="col-span-1 text-right">
                          <span className=" text-text_color">{item.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
