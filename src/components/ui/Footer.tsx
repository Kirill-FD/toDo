import { FunctionComponent } from 'react';

import styles from '../../styles/ui/footer.module.scss';

const Footer: FunctionComponent = () => {
  return (
    <footer className={`container ${styles.footer}`}>
      <p>Made by Kirill P. © 2024</p>
    </footer>
  );
};

export default Footer;