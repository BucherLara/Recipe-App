import Image from "next/image";
import pizza from "/public/pizza.jpeg";
// import { CiPizza } from "react-icons/Ci";

export default function Veggie() {
  return (
    <>
      <h1> This is the veggie Page </h1>
      <p>Vegan pizza</p>
      <Image src={pizza} alt="picture of pizza" />
    </>
  );
}
