import img_1 from "../../images/dropbox.png"
import img_2 from "../../images/shopify.png"
import img_3 from "../../images/slack.png"
import img_4 from "../../images/atlassian.png"
import img_5 from "../../images/google.png"
export default function Brand() {
  const brand_item = [
    { img: img_1, id: 1 },
    { img: img_2, id: 2 },
    { img: img_3, id: 3 },
    { img: img_4, id: 4 },
    { img: img_5, id: 5 },
  ];
  return (
    <section className="brand my-14">
      <div className="container">
        <div className="grid-cols-5 grid gap-8">
          {brand_item.map((item) => (
            <div className="md:col-span-1 col-span-2 justify-center flex" key={item.id}>
              <img src={item.img} alt="" className=" w-32" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
