import Image from "next/image";
import Hi from "./Components/Hi";
import HeadPage from "./Components/HeadPage";
import Properties from "./Components/Properties";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Architecture from "./Components/Architecture";

export default function Home() {
  return (
    <div>
      <HeadPage/>
      <Properties/>
      <Features/>
      <Architecture/>
      <Footer/>
    </div>
  );
}
