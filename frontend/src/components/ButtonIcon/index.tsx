import './styles.css';

import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

const ButtonIcon = () => {
  return (
    <button className="btn btn-primary btn-container">
      <div className="btn-text">
        <p>Inicie agora a sua busca</p>
      </div>
      <div className="btn-icon">
        <ArrowIcon />
      </div>
    </button>
  );
};

export default ButtonIcon;
