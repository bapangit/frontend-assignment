import { styled } from "styled-components";
import { TfiSearch } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountContext } from "Components/Contexts/UserContext";

const NavigationBar = styled.div`
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-block {
    display: flex;
    gap: 12px;
    padding: 0px 40px;
    height: 36px;
    .search-block {
      display: flex;
      position: relative;
      width: 320px;
      .search {
        width: 100%;
        padding: 0px 25px 0px 8px;
        z-index: 0;
      }
      input[type="text"] {
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
      }
      input[type="text"]:focus {
        z-index: 1;
        border: 1px solid orange;
        cursor: text;
      }
      .icon {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        color: orange;
        z-index: 1;
        cursor: pointer;
      }
    }
  }
  .right-block {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: small;
    .link-item {
      display: flex;
      align-items: center;
      gap: 4px;
      border-right: 1px solid grey;
      padding: 0px 5px;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
const BottomNavigationBar = styled.div`
  height: 45px;
  width: 100%;
  background-color: #ffd91c;
  display: flex;
  padding-top: 3px;
  div {
    padding: 5px;
    display: flex;
    align-items: center;
    font-size: small;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: white;
    }
  }
`;

function AppLayout({ children, user }) {
  const navigate = useNavigate();
  const { count, addCount } = useContext(CountContext);
  const [rightBlockData] = useState([
    { Icon: SlLocationPin, text: "Select location" },
    { Icon: null, text: "Stores & Preschools" },
    { Icon: null, text: "Support" },
    { Icon: null, text: "Track Order" },
    { Icon: null, text: "FirstCry Parenting" },
  ]);

  const [bottomNavData] = useState([
    "BOY FASHION",
    "GIRL FASHION",
    "FOOT WEAR",
    "TOYS",
    "DIAPERING",
    "GEAR",
    "FEEDING",
    "BATH",
    "NURSERY",
    "MOMS",
    "HEALTH",
    "BOUTIQUES",
  ]);

  return (
    <div>
      <NavigationBar>
        <div className="left-block">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
            alt="logo"
          />

          <div className="search-block">
            <input type="text" className="search" />
            <span className="icon">
              <TfiSearch />
            </span>
          </div>
        </div>
        <div className="right-block">
          {rightBlockData.map(({ Icon, text }, index) => {
            return (
              <div className="link-item" key={index}>
                {Icon && <Icon />}
                {text}
              </div>
            );
          })}
          {user ? (
            <div className="link-item">Logout</div>
          ) : (
            <div
              className="link-item"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login / Register
            </div>
          )}
          <div className="link-item" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: "larger" }}>
              <AiOutlineShoppingCart />
            </span>{" "}
            Cart{" "}
            <span style={{ color: "orangered", fontSize: "large" }}>
              ({count})
            </span>
          </div>
        </div>
      </NavigationBar>
      <BottomNavigationBar>
        {bottomNavData.map((text, index) => {
          return <div>{text}</div>;
        })}
      </BottomNavigationBar>
      {children}
    </div>
  );
}

export default AppLayout;
