import { useState } from 'react';
import { ContactForm } from '../Form/Form';
import { Sheet } from '../Sheet/Sheet';
import { Title } from '../Title/Title';
import css from './App.module.css';
import { Modal } from '../Modal/Modal';

export const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [isModalShown, setIsModalShown] = useState(false);

  const handleFormData = data => {
    setIsSubmitted(true);
    setIsModalShown(true);
    setFormData(data);
  };

  return (
    <div className={css.app}>
      {isSubmitted ? (
        <Sheet formData={formData} />
      ) : (
        <>
          <Title className={css.heading} text="Создание анкеты" />
          <ContactForm onSubmit={handleFormData} />
        </>
      )}
      <Modal isModalShown={isModalShown} setIsModalShown={setIsModalShown} />
    </div>
  );
};
