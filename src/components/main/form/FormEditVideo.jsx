import styled from "styled-components";
import CardEdit from "./CardEdit";

const BoxBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(3, 18, 47, 0.8);
  display: flex;
  align-items: center;
`;

const Dialog = styled.dialog`
  width: 70%;
  overflow-y: scroll;
  margin: auto;
  background-color: #03122f;
  border: 5px solid #6BD1FF;
  border-radius: 15px;
  @media (min-width: 1044px) {
    overflow-y: unset;
    h4 {
      font-size: 40px;
    }
  }
`;

export default function FormEditVideo() {
  return (
    <>
      <BoxBackground>
        <Dialog open={true}>
          <CardEdit />
        </Dialog>
      </BoxBackground>
    </>
  );
}
