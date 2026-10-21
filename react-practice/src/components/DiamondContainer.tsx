import DiamondCard from "./DiamondCard";
import type { DiamondCardProps } from "../data/data"; // Import the interface as a type

// Create a new interface for an array of DiamondCardProps
// The imported interface is an object interface, but data is an array of objects and so needs an array interface
interface DiamondContainerProps {
  data: DiamondCardProps[];
}

export default function DiamondContainer({ data }: DiamondContainerProps) {
  return (
    <div className="DiamondContainer">
      {data.map((listing) => (
        <DiamondCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}
