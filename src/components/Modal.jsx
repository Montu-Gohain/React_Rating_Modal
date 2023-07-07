/* eslint-disable react/prop-types */
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Modal = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && (
        <ModalBackground onClick={() => setShowModal(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)}>Hide Modal</button>
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

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;
const ModalBody = styled.div`
  background-color: white;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  padding: 10px;
  animation: ${fadeIn} 0.3s ease-in;
`;
