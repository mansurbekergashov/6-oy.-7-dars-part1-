import styled from "styled-components";
import img from "/src/assets/Car-1.png";


const Card = styled.div`
  display: inline-block;
  background-color: #e28625;
  height: 500px;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  @media (max-width: 500px) {
    width: 340px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0;
  }
`;

const CardImg = styled.img`
  margin-left: 48px;
  margin-top: 48px;
  width: 64px;
  height: 40px;
`;

const CardTitle = styled.h1`
  color: #f2f2f2;
  margin-left: 48px;
  font-size: 40px;
  font-weight: 700;
  margin-top: 35px;
  font-family: "Big Shoulders";
`;

const CardText = styled.p`
  color: #f2f2f2;
  font-weight: 400;
  font-size: 15px;
  opacity: 70%;
  margin-left: 48px;
  margin-right: 48px;
  margin-top: 25px;
  font-family: "Lexend Deca";
`;

const CardBtn = styled.a`
  display: flex;
  width: 146px;
  height: 48px;
  border-radius: 25px;
  background-color: #fff;
  color: #e28625;
  margin-left: 48px;
  justify-content: center;
  align-items: center;
  margin-top: 115px;
  font-family: "Lexend Deca";
  font-weight: 400;
  text-decoration: none;

   &:hover {
    opacity: 70%;
  }

  &:active{
    border: 1px solid white;
    background-color: transparent;
    color: #fff;
  }

  
  @media (max-width: 800px) {
    margin-top: 40px;
  }

  @media (max-width: 630px) {
    margin-top: 20px;
    width: 80px;
    height: 30px;
    font-size: 10px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
    width: 120px;
    height: 40px;
    font-size: 14px;
  }
`;


function Span1() {
  return (
    <Card>
      <CardImg src={img} alt="Car" />
      <CardTitle>SEDANS</CardTitle>
      <CardText>
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </CardText>
      <CardBtn href = "#">Learn More</CardBtn>
    </Card>
  );
}

export default Span1;
