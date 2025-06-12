import styled from "styled-components";
import watch_bg from "/assets/watch_bg.jpg";
import WhiteButton from "../Header/Buttons/WhiteButton";

const AboutUs = () => {
  return (
    <Wrapper className="text-white flex flex-col text-center justify-center space-y-3">
      <h2 className="text-6xl tracking-wide">GET YOUR EPIC TIME</h2>
      <p className="tracking-wide">Inspiration through dedicated craftsmanship.</p>
      <button className="w-[100px] mx-auto">
        <WhiteButton btnTitle={"ABOUT US"} />
      </button>
    </Wrapper>
  );
};

export default AboutUs;

const Wrapper = styled.div`
  background: url(${watch_bg});
  height: 340px;
  width: 100%;
  background-size: cover;
  background-position-y: top;
`;
