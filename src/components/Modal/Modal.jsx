import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import styles from './Modal.module.css';
import { Button } from '../Button/Button';
const modalRoot = document.querySelector('#modal-root');

const Template = ({ closeModal }) => {
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setTimeout(closeModal, 3000);
    return () => {
      clearTimeout(timerId.current);
    };
  }, [closeModal]);

  return (
    <div className={styles.notifications}>
      <span>Форма успешно отправлена</span>
      <Button onClick={closeModal}>close</Button>
    </div>
  );
};

export const Modal = ({ isModalShown, setIsModalShown }) => {
  return (
    isModalShown &&
    createPortal(
      <Template closeModal={() => setIsModalShown(false)} />,
      modalRoot
    )
  );
};
