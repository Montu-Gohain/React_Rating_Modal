/* eslint-disable react/prop-types */
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Modal = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ShowModalButton onClick={() => setShowModal(true)}>
        Show Modal
      </ShowModalButton>
      {showModal && (
        <ModalBackground onClick={() => setShowModal(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <HideButton onClick={() => setShowModal(false)} />
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;

// Todo : Styled Components here .

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: auto;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Aligning the items in center */
  display: flex;
  align-items: center;
  justify-content: center;
`;
// ^ SlideDown Animation

const SlideDown = keyframes`
  from{
    transform: translateY(-30%);
    opacity: 0.1;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
`;
const ModalBody = styled.div`
  width: 920px;
  height: 444px;
  border-radius: 20px;
  padding: 10px;
  background-color: #1a1832;
  color: white;
  animation: ${SlideDown} 400ms ease-in;
  position: relative;
  z-index: 2;
`;
// ^ Hide modal Button
const HideButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
  right: 35px;
  top: 20px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1.8px;
    background-color: white;
    transform: translate(0, -50%);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
const ShowModalButton = styled.button`
  position: fixed;
  border-radius: 5px;
  color: white;
  margin: 20px 0px 0px 20px;
  border: none;
  padding: 15px;
  font-family: Inter, sans-serif;
  font-size: large;
  background-color: #7a58f4;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
