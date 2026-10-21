import DiamondCard from "./DiamondCard";

export default function DiamondContainer() {
  return (
    <div className="DiamondContainer">
      <DiamondCard
        image="src\assets\pexels-the-glorious-studio-10475791.jpg"
        name="Princess"
        price="$1,000"
        sale={true}
      />
      <DiamondCard
        image="src\assets\pexels-the-glorious-studio-10475793.jpg"
        name="Queen"
        price="$2,000"
        sale={false}
      />
      <DiamondCard
        image="src\assets\pexels-the-glorious-studio-10475794.jpg"
        name="Empress"
        price="$3,000"
        sale={false}
      />
    </div>
  );
}
