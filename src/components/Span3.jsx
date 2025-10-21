import styled from "styled-components";
import img from "/src/assets/Car-3.png";


const Card = styled.div`
  display: inline-block;
  background-color: #004140;
  height: 500px;
  box-sizing: border-box;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

   @media (max-width: 500px) {
    width: 340px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 0;
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
  opacity: 70%;
  font-weight: 400;
  font-size: 15px;
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
  color: #004140;
  margin-left: 48px;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca";
  font-weight: 400;
  margin-top: 120px;
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



function Span3() {
  return (
    <Card>
      <CardImg src={img} alt="Car" />
      <CardTitle>LUXURY</CardTitle>
      <CardText>
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </CardText>
      <CardBtn href = "#">Learn More</CardBtn>
    </Card>
  );
}

export default Span3;
