interface DiamondCardProps {
  image: string;
  name: string;
  price: string;
  sale?: boolean;
}

export default function DiamondCard(props: DiamondCardProps) {
  return (
    <div className="DiamondCard">
      <img src={props.image} alt="" width="100px" />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p style={{ color: "red", fontWeight: "bold" }}>{props.sale && "SALE"}</p>
    </div>
  );
}
