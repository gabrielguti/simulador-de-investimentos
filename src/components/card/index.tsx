import "./style.css";
interface CardProps {
  title: string;
  value: number;
  greenColor?: boolean;
}

const Card = ({ title, value, greenColor }: CardProps) => {
  return (
    <>
      {greenColor ? (
        <div className="card">
          <p>{title}</p>
          <span id="green">{value}</span>
        </div>
      ) : (
        <div className="card">
          <p>{title}</p>
          <span>{value}</span>
        </div>
      )}
    </>
  );
};

export default Card;
