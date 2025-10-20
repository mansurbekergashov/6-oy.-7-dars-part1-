import styled from "styled-components";
import Span1 from "./components/Span1";
import Span2 from "./components/Span2";
import Span3 from "./components/Span3";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export default function App() {
  return (
    <Wrapper>
      <Span1 />
      <Span2 />
      <Span3 />
    </Wrapper>
  );
}
