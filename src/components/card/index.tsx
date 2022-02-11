interface CardProps {
  title: string;
  value: number;
}

const Card = ({ title, value }: CardProps) => {
  return (
      <>
      <h2>{title}</h2>
      <span>{value}</span>
      </>
  );
};

export default Card;
