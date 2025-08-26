import Counter from "@/app/_components/Counter";

export const metadata = {
  title: "Cabins",
  description: "Explore our cozy cabins at The Wild Oasis",
};

export default function Page() {

  return (
    <div>
      <h1>Cabins Page</h1>
      <p>This is inside cabins</p>
      <Counter/>
    </div>
  );
};