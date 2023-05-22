import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  .middle-block {
    //background-color: orange;
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input-email {
    width: 100%;
    input[type="text"] {
      line-height: 25px;
      font-size: 16px;
      width: 100%;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      border: 0px;
      border-bottom: 1px solid #ccc;
      outline: none;
    }
    input[type="text"]:focus {
      z-index: 1;
      border-bottom: 1px solid orange;
      cursor: text;
    }
  }
`;

function Login() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <Container>
      <div className="middle-block">
        <img
          height="60px"
          width="120px"
          src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg"
          alt=""
          style={{ margin: "30px 0px" }}
        />
        <div
          style={{
            fontWeight: "600",
            alignSelf: "flex-start",
            fontSize: "larger",
          }}
        >
          Login / Register
        </div>
        <div
          style={{
            margin: "15px 0px",
            fontWeight: "600",
            alignSelf: "flex-start",
          }}
        >
          Email ID/Mobile No.
        </div>
        <div className="input-email">
          <input type="text" placeholder="Enter Your Email Id or Number." />
        </div>
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "orangered",
            padding: "10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigateToHome();
          }}
        >
          <span>CONTINUE</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <span
            style={{
              height: "0px",
              borderBottom: "1px solid lightgrey",
              width: "120px",
            }}
          ></span>
          <span>OR</span>
          <span
            style={{
              height: "0px",
              borderBottom: "1px solid lightgrey",
              width: "120px",
            }}
          ></span>
        </div>
        <div
          style={{
            margin: "5px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            cursor: "pointer",
            border: "1px solid grey",
          }}
          onClick={() => {
            navigateToHome();
          }}
        >
          FACEBOOK
        </div>
        <div
          style={{
            margin: "5px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            cursor: "pointer",
            border: "1px solid grey",
          }}
          onClick={() => {
            navigateToHome();
          }}
        >
          GOOGLE
        </div>
        <div
          style={{
            fontWeight: "bold",
            color: "#0000ffe4",
            fontSize: "smaller",
            opacity: "0.6",
          }}
        >
          New to FirstCry? Register Here
        </div>
        <div
          style={{
            width: "100%",
            borderBottom: "1px solid grey",
            marginTop: "20px",
          }}
        ></div>
        <div style={{ fontSize: "12px", marginTop: "8px" }}>
          By continuing, you agree to Firstcry's{" "}
          <span style={{ color: "#0000ffe4" }}>Conditions of Use</span> and{" "}
          <span style={{ color: "#0000ffe4" }}>Privacy Notice.</span>
        </div>
      </div>
    </Container>
  );
}

export default Login;
