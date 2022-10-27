import Image from "next/image";

export default function Desserts() {
  return (
    <>
      <h1>These are the yummy Desserts</h1>
      <p>lovely vegan blueberry cake</p>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="Picture of Blueberry-Cake"
        width={600}
        height={400}
      />
    </>
  );
}
