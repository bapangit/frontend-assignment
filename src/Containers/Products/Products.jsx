import { CountContext } from "Components/Contexts/UserContext";
import { useContext, useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
`;

const CardContainer = styled.div`
  margin: 10px;
  border-radius: 6px;
  overflow: hidden;
  background-color: white;
  padding: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transform: translateY(-10px);
  }
  transition: 0.2s all;
`;
const Card = ({ imgSrc, name, price }) => {
  const [added, setAdded] = useState(false);
  const { count, addCount } = useContext(CountContext);
  const onAdded = () => {
    setAdded(true);
    addCount();
  };
  return (
    <CardContainer>
      <div style={{ width: "100%", position: "relative" }}>
        <img src={imgSrc} width="100%" alt="" />
        {added && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "#8d8d8d92",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ backgroundColor: "white", padding: "4px 10px" }}>
              Added to Cart
            </span>
          </div>
        )}
      </div>

      <div>{name}</div>
      <div>
        <span
          style={{ fontSize: "larger", margin: "0px 4px", fontWeight: "600" }}
        >
          {price.priceCurrent}
        </span>
        <span
          style={{
            fontSize: "medium",
            margin: "0px 4px",
            textDecoration: "line-through",
          }}
        >
          {price.priceMain}
        </span>
        <span
          style={{ fontSize: "medium", margin: "0px 4px", color: "orange" }}
        >
          ( {price.discount}%)
        </span>
      </div>
      <div
        style={{
          width: "120px",
          padding: "5px",
          fontSize: "small",
          fontWeight: "bold",
          backgroundColor: "orangered",
          textAlign: "center",
          borderRadius: "2px",
          cursor: "pointer",
          marginTop: "5px",
        }}
        onClick={() => {
          onAdded();
        }}
      >
        ADD TO CART
      </div>
    </CardContainer>
  );
};

function Products() {
  const [products] = useState([
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/13382313a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12014314a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12927681a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/10016852a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/13382313a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12014314a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12927681a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/10016852a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/13382313a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12014314a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/12927681a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/products/300x364/10016852a.webp",
      name: "Zero Sinker Half Sleeves Vests Panda Print Pack of 3 - Peach Yellow &...",
      price: {
        priceCurrent: 576.73,
        priceMain: 749,
        discount: 23,
        clubPrice: 561.75,
      },
    },
  ]);
  return (
    <Container>
      {products.map((val, key) => {
        return <Card key={key} {...val} />;
      })}
    </Container>
  );
}

export default Products;
