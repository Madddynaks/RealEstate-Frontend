// app/page.js (or any other component file)
import { Oswald } from "next/font/google";
import { Poppins } from "next/font/google";
import Narrow from "../Common/Narrow";

const oswald = Oswald({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function Hi() {
  return (
    <Narrow>
      <h1 className={`text-6xl ${oswald.className}`}>Hello, World!</h1>
      <p className={`${poppins.className}`}>This is a paragraph using the Poppins font.</p>
    </Narrow>
  );
}
