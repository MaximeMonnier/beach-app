import NavBar from "../components/NavBar";
import CardRugby from "../components/Card/CardRugby";
import CardTennis from "../components/Card/CardTennis";
import CardVolley from "../components/Card/CardVolley";
import FullCalendar from "../components/FullCalendar";

type Props = {};

function Terrain({}: Props) {
  return (
    <div className="bg-bg-5 dark:bg-bg-3">
      <div className="h-screen p-2 flex flex-col justify-between">
        <div className="w-full">
          <NavBar />
        </div>
      <FullCalendar/>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
        <CardRugby />
        <CardTennis />
        <CardVolley />
      </div>
    </div>
  );
}

export default Terrain;
