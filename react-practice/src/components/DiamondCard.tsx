interface DiamondCardProps {
  image: string;
  name: string;
  price?: string;
  sale?: boolean;
}

export default function DiamondCard({
  image,
  name,
  price = "Unknown",
  sale,
}: DiamondCardProps) {
  return (
    <div className="DiamondCard">
      <img src={image} alt="" width="100px" />
      <h2>{name}</h2>
      <p>{price}</p>
      <p style={{ color: "red", fontWeight: "bold" }}>{sale && "SALE"}</p>
    </div>
  );
}
