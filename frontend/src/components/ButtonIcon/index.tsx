import './styles.css';

import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => {
  return (
    <button className="btn btn-primary btn-container">
      <div className="btn-text">
        <p>{text}</p>
      </div>
      <div className="btn-icon">
        <ArrowIcon />
      </div>
    </button>
  );
};

export default ButtonIcon;
