import styled from "styled-components";

const Tag = styled.div`
  width: 440px;
  height: 70px;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.greenCards};
  color:  ${(props) => props.theme.colors.primaryWhite};
  /* font-family: var(--font-Roboto); */
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function TagCategorie({props}) {
  return (
    <>
      <Tag>
      <h2>{props}</h2>
      </Tag>
    </>
  );
}
