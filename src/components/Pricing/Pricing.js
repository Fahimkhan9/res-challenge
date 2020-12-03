import PricingCard from "./PricingCard";

const pricingdata = [
  {
    price: "$199",
    category: "For Basix",
  },
  {
    price: "$399",
    category: "For preferred",
  },
  {
    price: "$599",
    category: "For Elite",
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section pt-5">
      <div className="container">
        <h3 className="text-center text-brand pb-3">
          Choose your Dedicated Team
        </h3>
        <div className="row">
          {pricingdata.map((pricingdata) => (
            <PricingCard pricingdata={pricingdata} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
