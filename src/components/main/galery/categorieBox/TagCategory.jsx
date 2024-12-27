/* eslint-disable react/prop-types */
import styled from "styled-components";

const Tag = styled.div`
  width: 440px;
  height: 70px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.greenCards};
  color: ${(props) => props.theme.colors.primaryWhite};
  font-size: x-large;
  font-weight: 800;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
    font-size: large;
  }
  @media (max-width: 1439px) {
    margin: 0 auto 20px;
  }
`;

export default function TagCategorie({ categoria }) {
  return (
    <>
      <Tag style={{ backgroundColor: `${categoria.color}` }}>
        <h2>{categoria.categoria}</h2>
      </Tag>
    </>
  );
}
