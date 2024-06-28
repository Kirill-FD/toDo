import { FunctionComponent } from 'react';

import addIcon from '../../assets/icons/add-button.svg';

import styles from '../../styles/ui/header.module.scss';

type HeaderProps = {
  modalToggler: () => void;
}

const Header: FunctionComponent<HeaderProps> = ( {modalToggler} ) => {
  return (
    <header className={`container ${styles.header}`}>
      <h1 className='largeHeader'>ToDo4U</h1>
      <img 
        src={addIcon} 
        onClick={modalToggler}
        alt='add todo icon' 
        className={styles.addIcon} 
        tabIndex={0}
      />
    </header>
  );
};

export default Header;