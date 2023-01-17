import * as C from "./style";

const Modal = ({ status, setStatus, children }) => {
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modalBg")) {
      setStatus(false);
    }
  };

  return (
    <C.Container className="modalBg" status={status} onClick={handleModalClick}>
      <C.ModalBody>{children}</C.ModalBody>
    </C.Container>
  );
};

export default Modal;
