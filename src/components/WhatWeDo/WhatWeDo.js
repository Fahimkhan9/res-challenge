import idesign from "../../images/idesign.png";
import pro from "../../images/proto.png";
import illus from "../../images/illus.png";
import WhatWeDoCard from "./WhatWeDoCard";
const whatwedodata = [
  {
    title: "Experience Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam perferendis provident libero cumque corrupti!",
    img:
      "https://github.com/ProgrammingHero1/athena-design/raw/main/Illustration/Group%2065%402x.png",
  },
  {
    title: "Interface Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam perferendis provident libero cumque corrupti!",
    img: idesign,
  },
  {
    title: "Prototyping",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam perferendis provident libero cumque corrupti!",
    img: pro,
  },

  {
    title: "Illustration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam perferendis provident libero cumque corrupti!",
    img: illus,
  },
];

const WhatWeDo = () => {
  return (
    <section className="whatwedo pt-5">
      <div className="container">
        <h3 className="text-center pb-2">What we do</h3>
        <p className="text-center text-gray pb-1">
          Our main focus is to make user-experience simple and easy.Simplicity
          is our strength
        </p>
        <div className="row">
          {whatwedodata.map((whatwedodata) => (
            <WhatWeDoCard whatwedodata={whatwedodata} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
