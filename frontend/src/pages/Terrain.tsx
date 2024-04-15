import NavBar from "../components/NavBar";
import CardRugby from "../components/Card/CardRugby";
import CardTennis from "../components/Card/CardTennis";
import CardVolley from "../components/Card/CardVolley";
import BG from "../assets/bg-run.jpg";


type Props = {};

function Terrain({}: Props) {
  return (
    <div className="h-screen p-2 flex flex-col justify-between">
      <div className="w-full">
        <NavBar />
      </div>

      <div className="w-full flex-grow flex flex-col sm:flex-row justify-between items-center gap-2 py-2">
        <div className="w-full sm:w-1/6 h-full p-2 text-color-3 bg-bg-1 flex flex-col justify-between rounded-xl dark:text-color-1 dark:bg-bg-2">
          <h2>Méteo</h2>
          <h2>Ville</h2>
          <h2>Date</h2>
          <h2>Jour</h2>
          <h2>Océan</h2>
        </div>
        <div
          className="w-full sm:w-auto h-full rounded-xl flex flex-col justify-between"
          style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover" }}
        >
          <div className="w-full h-2/3 sm:h-full border border-red-600 flex items-center p-4">
            <h1 className="text-color-1 text-2xl">
              Le Volcan est entré en éruption !!!! Proposer de changer de photos
              avec un système de vote
            </h1>
          </div>
          <div className="w-full h-1/3 sm:h-auto border border-red-600 flex justify-center">
            <p className="text-color-1">Voir plus</p>
          </div>
        </div>
        <div className="w-full sm:w-2/6 h-full bg-bg-1 rounded-xl text-color-3 flex flex-col justify-between p-2 dark:text-color-1 dark:bg-bg-2">
          <h2>Information</h2>
          <h2>Terrain dispo</h2>
          <h2>Participant</h2>
        </div>
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
