import styled from "styled-components";
const Foodie = ({ to }) => {
  return (
    <div className="t_11">
      <a href={`/${to}`}>
        <div className="logo">
          Foo<Span>dy Zo</Span>ne
          {to === "" ? "" : to}{" "}
        </div>
      </a>
    </div>
  );
};

export default Foodie;
const Span = styled.span`
  color: #3e85bd;

  letter-spacing: 3px;
`;
