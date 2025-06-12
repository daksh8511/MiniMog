import styled from "styled-components";
import first from "/assets/1.jpg";
import second from "/assets/2.jpg";
import third from "/assets/3.jpg";

const OurJournal = () => {
  return (
    <Wrapper>
      <h2 className="text-center text-4xl my-20">OUR JOURNAL</h2>

      <div className="grid grid-cols-1 min-md:gap-5 min-md:grid-cols-1 min-lg:grid-cols-3 gap-4">
        <div className="group">
          <div className="w-full overflow-hidden">
            <img
              src={third}
              alt=""
              className="transform group-hover:scale-[1.2] duration-200 w-full"
            />
          </div>
          <div className="space-y-2">
            <h5>May 15, 2021</h5>
            <h2 className="text-3xl">The Kairos VS. The Chronos</h2>
            <p className="text-gray-500">
              They are two of our most popular collections, and at first glance,
              they just look...
            </p>
            <span>Read more</span>
          </div>
        </div>

        <div className="group">
          <div className="w-full overflow-hidden">
            <img
              src={second}
              alt=""
              className="transform group-hover:scale-[1.2] duration-200 w-full"
            />
          </div>
          <div className="space-y-2">
            <h5>May 15, 2021</h5>
            <h2 className="text-3xl">A Message From Us To You</h2>
            <p className="text-gray-500">
              As a watch company, we have always considered time to be precious.
              The world as...
            </p>
            <span>Read more</span>
          </div>
        </div>

        <div className="group">
          <div className="w-full overflow-hidden">
            <img
              src={first}
              alt=""
              className="transform group-hover:scale-[1.2] duration-200 w-full"
            />
          </div>
          <div className="space-y-2">
            <h5>May 15, 2021</h5>
            <h2 className="text-3xl">Behind The Design</h2>
            <p className="text-gray-500">
              They are two of our most popular collections, and at first glance,
              they just look...
            </p>
            <span>Read more</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurJournal;

const Wrapper = styled.div`
  span {
    position: relative;
  }
  span:before {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    border: 1px solid black;
    width: 100%;
    transition: all 0.3s ease;
  }
  span:hover:before {
    width: 10%;
    right: 0;
    border: 1px solid black;
  }
`;
