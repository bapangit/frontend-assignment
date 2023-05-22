import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 10px;
  .slick-prev {
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    color: grey;
  }
  .sec-item-view {
    background-color: lightgray;
    margin-top: 20px;
    text-align: center;
  }
  .second-item-block {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px 48px;
  }
`;

const CardContainer = styled.div`
  margin: 10px;
  border-radius: 6px;
  overflow: hidden;
  background-color: white;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transform: translateY(-10px);
  }
  transition: 0.2s all;
`;
const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <CardContainer
      onClick={() => {
        navigate("products");
      }}
    >
      <img width="100%" src={data.imgSrc} alt="" />
      <div style={{ padding: "10px" }}>
        <div style={{ display: "flex", justifyContent: "left" }}>
          {data.title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "small", color: "grey" }}>{data.desc}</span>
          <span style={{ color: "orangered" }}>{data.tag}</span>
        </div>
      </div>
    </CardContainer>
  );
};

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    autoplay: true,
  };
  const [sliderItems] = useState([
    "https://cdn.fcglcdn.com/brainbees/banners/hp_dp_mamypoko_f45_feb_994x3991677649268929.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_buy3_vacay_desktop1684219258601.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diapers__20may1684566688665.png",
    "https://cdn.fcglcdn.com/brainbees/banners/hp_dp_mamypoko_f45_feb_994x3991677649268929.webp",
  ]);
  const [secondItemViewData] = useState([
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29885.webp",
      title: "Comfy,Chic & Cute",
      desc: "Footware, Sock & Tights",
      tag: "NEW TODAY",
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29886.webp",
      title: "Comfy,Chic & Cute",
      desc: "Footware, Sock & Tights",
      tag: "NEW TODAY",
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29890.webp",
      title: "Comfy,Chic & Cute",
      desc: "Footware, Sock & Tights",
      tag: "NEW TODAY",
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29889.webp",
      title: "Comfy,Chic & Cute",
      desc: "Footware, Sock & Tights",
      tag: "NEW TODAY",
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29885.webp",
      title: "Comfy,Chic & Cute",
      desc: "Footware, Sock & Tights",
      tag: "NEW TODAY",
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29886.webp",
      title: "Comfy,Chic & Cute",
      desc: "Footware, Sock & Tights",
      tag: "NEW TODAY",
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29890.webp",
      title: "Comfy,Chic & Cute",
      desc: "Footware, Sock & Tights",
      tag: "NEW TODAY",
    },
    {
      imgSrc:
        "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29889.webp",
      title: "Comfy,Chic & Cute",
      desc: "Footware, Sock & Tights",
      tag: "NEW TODAY",
    },
  ]);
  return (
    <Container>
      <Slider {...settings}>
        {sliderItems.map((val, key) => {
          return (
            <div key={key}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={val} alt="img" />
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="sec-item-view">
        <div style={{ fontWeight: "bold", fontSize: "larger" }}>
          PREMIUM BOUTIQUES
        </div>
        <div className="second-item-block">
          {secondItemViewData.map((data, key) => {
            return <Card key={key} data={data} />;
          })}
        </div>
      </div>
    </Container>
  );
}
