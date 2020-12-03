import AchievementCard from "./AchievementCard";

const achievemetndata = [
  {
    title: "700+",
    number: "Happy Clients",
    logo: "",
  },
  {
    title: "140+",
    number: "Personal projects Completed",
    logo: "",
  },
  {
    title: "25+",
    number: "Crazy Minds",
    logo: "",
  },
  {
    title: "75+",
    number: "Running Projects",
    logo: "",
  },
];

const Achievement = () => {
  return (
    <section className="achievement  pt-5">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-5">
            <h3>Our Achievements</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              perspiciatis quia, ea eum molestias quis maxime, adipisci
              consequatur accusantium iste praesentium, dignissimos sunt aliquid
              hic nobis quod mollitia accusamus veritatis neque nihil in dolorem
              cum nostrum. Necessitatibus aliquam explicabo facilis.
            </p>
          </div>
          <div className="col-md-6">
            <div className="row">
              {achievemetndata.map((achievemetndata) => (
                <AchievementCard achievemetndata={achievemetndata} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
