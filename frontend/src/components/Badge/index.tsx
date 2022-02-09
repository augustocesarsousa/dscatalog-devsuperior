import './styles.css';

type Props = {
  name: string;
};

const Badge = ({ name }: Props) => {
  return <div className="badge-container">{name}</div>;
};

export default Badge;
