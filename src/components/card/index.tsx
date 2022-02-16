import "./style.css";
interface CardProps {
  title: string;
  value: string;
  greenColor?: boolean;
}

const Card = ({ title, value, greenColor }: CardProps) => {
  return (
    <>
      {greenColor ? (
        <div className="card">
          <p id="card-title">{title}</p>
          <span id="green">{value}</span>
        </div>
      ) : (
        <div className="card">
          <p id="card-title">{title}</p>
          <span id="card-span">{value}</span>
        </div>
      )}
    </>
  );
};

export default Card;
