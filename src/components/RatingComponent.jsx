/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const Ratings = ({ setCurrentRating, current }) => {
  const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <RatingsContainer>
      {rating.map((item) => (
        <RatingBox
          key={item}
          selected={current !== null && current === item}
          onClick={() => setCurrentRating(item)}
        >
          {item}
        </RatingBox>
      ))}
    </RatingsContainer>
  );
};
const LabelText = () => {
  return (
    <LabelsWrapper>
      <span>Not likely at all</span>
      <span>Extremely Likely</span>
    </LabelsWrapper>
  );
};
const RatingComponent = () => {
  const [currentRating, setCurrentRating] = useState(null);

  return (
    <Wrapper>
      <SecOne>
        <h1>
          How likely are you to recommend FrontendPro to someone you know?
        </h1>
      </SecOne>
      <SecTwo>
        <Ratings setCurrentRating={setCurrentRating} current={currentRating} />
        <LabelText />
      </SecTwo>
      <SecThree>
        <RegularButton onClick={() => setCurrentRating(null)}>
          Cancel
        </RegularButton>
        <RegularButton
          bg
          onClick={() => {
            alert(`Thanks for Giving ${currentRating} rating.`);
            setCurrentRating(null);
          }}
        >
          Submit
        </RegularButton>
      </SecThree>
    </Wrapper>
  );
};

export default RatingComponent;

// Todo : Defining our styled components

const RegularButton = styled.button`
  font-family: Inter, sans-serif;
  padding: 10px;
  width: 150px;
  border-radius: 5px;
  background-color: ${(props) => (props.bg ? "#7a58f4" : "transparent")};
  border: 1px solid #7a58f4;
  color: white;
  font-size: medium;
  cursor: pointer;
`;

const LabelsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-inline: 25px;
  color: #e7e7e7;
  font-size: 13px;
  font-family: Inter, sans-serif;
`;

const RatingBox = styled.p`
  width: 60px;
  height: 60px;
  margin-inline: 13px;
  background-color: #1a2036;
  border-radius: 10px;
  border: 1px solid #2e3650;
  color: #b1b9d8;
  display: grid;
  place-items: center;
  font-size: xx-large;
  font-family: Inter;
  transition: transform 300ms ease-in;
  background-color: ${(props) => (props.selected ? "#b1b9d8" : "transparent")};
  color: ${(props) => (props.selected ? "#1a2036" : "inherit")};
  /* &:hover {
    background-color: #b1b9d8;
    color: #1a2036;
    transform: translateY(-3px);
  } */
`;

const Wrapper = styled.div`
  /* background-color: maroon; */
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const SecOne = styled.div`
  width: 630px;
  height: 72px;
  padding: 5px;
  font-family: "Merriweather", serif;
  font-size: 12px;
  letter-spacing: 1px;
  text-align: center;
`;

const SecTwo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecThree = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-inline: 20px;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: -60px;
`;
const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
