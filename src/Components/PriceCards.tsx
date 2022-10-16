import React from "react";

interface PriceCardsProps {
  toggle?: "annually" | "monthly";
}

interface CardPros {
  title: string;
  price: number;
  items: string[];
}

export function PriceCards(props: PriceCardsProps) {
  const { toggle } = props;
  return (
    <div className="card-container">
      <div className="card side-card">
        <Card
          title="Basic"
          price={toggle === "annually" ? 199.99 : 19.99}
          items={[
            "500 GB Storage",
            "2 Users Allowed",
            "Send up to 3 GB",
          ]}
        />
      </div>
      <div className="card primary-card">
        <Card
          title="Professional"
          price={toggle === "annually" ? 249.99 : 24.99}
          items={[
            " 1 TB Storage",
            "5 Users Allowed",
            "Send up to 10 GB",
          ]}
        />
      </div>
      <div className="card side-card">
        <Card
          title="Master"
          price={toggle === "annually" ? 399.99 : 39.99}
          items={[
            "2 TB Storage",
            "10 Users Allowed",
            "Send up to 20 GB",
          ]}
        />
      </div>
    </div>
  );
}

const Card = (props: CardPros) => {
  const { title, price, items } = props;
  return (
    <>
      <h3>{title}</h3>
      <div className="card-price">
        <span className="card-price-dollar"> $</span>
        <span> {price}</span>
      </div>

      {items.length > 0 && (
        <ul className="card-price-list">
          <li className="card-price-item"> </li>
          {items.map((item, index) => (
            <li key={index} className="card-price-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      <button className="card-price-button">
        Learn More
      </button>
    </>
  );
};
