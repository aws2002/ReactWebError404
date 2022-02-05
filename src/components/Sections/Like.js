import ImgLike1 from "../../images/image 2.png";
import ImgLike2 from "../../images/image 3.png";
export default function Like() {
  const dataCard = [
    {
      id: 1,
      img: ImgLike1,
      titel: "An NFT like no other",
      supText_1:
        "Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don’t miss out on the release Don’t miss out on the release ",
        supText_2:
        " Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don’t miss out on the release of our new NFT. Don’t miss out on the release Don’t miss out on the release Don’t miss out on the release ",
    },
    {
      id: 2,
      img: ImgLike2,
      titel: "An NFT like no other",
      supText_1:
        "Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don’t miss out on the release Don’t miss out on the release ",
      supText_2:
        " Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don’t miss out on the release of our new NFT. Don’t miss out on the release Don’t miss out on the release Don’t miss out on the release ",
    },
  ];
  return (
    <section className="like my-10 px-6">
      <div className=" container">
        <div className=" grid gap-6 grid-cols-2">
          {dataCard.map((item) => (
            <div className="md:col-span-1 col-span-2 bg-color_2 py-14 px-14 rounded-xl" key={item.id}>
              <ul>
                <li>
                  <img src={item.img} alt="" />
                </li>
                <li>
                  <h3 className="text-white  font-bold text-3xl my-7">{item.titel}</h3>
                </li>
                <li>
                  <p className="text-text_color mb-10 font-semibold">{item.supText_1}</p>
                </li>
                <li>
                <p className="text-text_color mb-10 font-semibold">{item.supText_2}</p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
