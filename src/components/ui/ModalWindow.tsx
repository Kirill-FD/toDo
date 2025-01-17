import { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';

import styles from '../../styles/ui/modalWindow.module.scss';

import todos from '../../store/todos';

import Input from './Input';
import TextArea from './TextArea';

type ModalProps = {
  children: JSX.Element | JSX.Element[];
  modalToggler: () => void;
}

const ModalWindow: FunctionComponent<ModalProps> = observer(({ children, modalToggler }) => {
  return (
    <div className={styles.blackout}>
      {/* <button
          className={styles.buttonClose}
          onClick={modalToggler}
        /> */}
      <div className={`${styles.flexColumn} ${styles.controls}`}>
        <button
          className={styles.buttonClose}
          onClick={modalToggler}
        />
        <div className={styles.flexCell}>
          <Input
            value={todos.todoTitle}
            onChange={(e) => todos.titleHandler(e.target.value)}
            placeholder='ToDo title'
          />
          <TextArea
            value={todos.todoText}
            onChange={(e) => todos.textHandler(e.target.value)}
            placeholder='ToDo text'
          />
        </div>
        {children}
        {/* <button
          className={styles.buttonClose}
          onClick={modalToggler}
        /> */}
      </div>
    </div>
  );
});

export default ModalWindow;