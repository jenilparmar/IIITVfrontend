import Initialheader from "./Jenil/Component/Initialheader";
import SecondHeader from "./Jenil/Component/SecondHeader";

export default function Home() {
  return (
   <>
  <div className="w-screen h-fit  flex flex-col overflow-x-hidden">
    <Initialheader/>
    <SecondHeader/>
  </div>
   </>
  );
}
