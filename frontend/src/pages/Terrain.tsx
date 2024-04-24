import NavBar from "../components/NavBar";
import CardRugby from "../components/Card/CardRugby";
import CardTennis from "../components/Card/CardTennis";
import CardVolley from "../components/Card/CardVolley";
import FullCalendar from "../components/FullCalendar";
import TerrainComponent from "../components/TerrainComponent";

type Props = {};

function Terrain({}: Props) {
  return (
    <div className="bg-bg-5 dark:bg-bg-3">
      <div className="h-screen p-2 flex flex-col justify-between">
        <div className="w-full">
          <NavBar />
        </div>
        <div className="w-full flex-grow flex flex-col sm:flex-row justify-between items-center gap-2 py-2">
          {/* <div className="w-full sm:w-1/6 h-full p-2 text-color-3 bg-bg-1 flex flex-col justify-between rounded-xl dark:text-color-1 dark:bg-bg-2">
            <h2>Méteo</h2>
            <h2>Ville</h2>
            <h2>Date</h2>
            <h2>Jour</h2>
            <h2>Océan</h2>
          </div> */}
          <div className="w-full sm:w-4/6 h-full rounded-xl flex flex-col justify-between">
            <div className="w-full h-2/3 sm:h-full border border-red-600 flex items-center px-4">
              <TerrainComponent />
            </div>
          </div>
          <div className="w-full sm:w-2/6 h-full flex-grow flex flex-col justify-around items-start gap-2">
            <div className="w-full bg-bg-1 rounded-xl text-color-3 flex flex-col justify-between p-2 dark:text-color-1 dark:bg-bg-2">
              <FullCalendar />
            </div>
            <div className="w-full h-full bg-bg-1 rounded-xl text-color-3 flex flex-col justify-between p-2 dark:text-color-1 dark:bg-bg-2">
              <div className="w-full bg-bg-3 rounded-xl h-10 flex items-center">
                <button className="bg-bg-2 text-color-1 px-2 rounded-xl hover:bg-bg-1 hover:text-color-3 dark:bg-bg-1 dark:text-color-3 dark:hover:bg-bg-2 dark:hover:text-color-1">
                  <a href="/terrain">
                    BooK{" "}
                    <i
                      className="fa-solid fa-archway text-color-1 dark:text-color-3"
                      aria-hidden="true"
                    ></i>
                  </a>
                </button>
                <button className="bg-bg-2 text-color-1 px-2 rounded-xl hover:bg-bg-1 hover:text-color-3 dark:bg-bg-1 dark:text-color-3 dark:hover:bg-bg-2 dark:hover:text-color-1">
                  <a href="/terrain">
                    Météo{" "}
                    <i
                      className="fa-solid fa-archway text-color-1 dark:text-color-3"
                      aria-hidden="true"
                    ></i>
                  </a>
                </button>
                <button className="bg-bg-2 text-color-1 px-2 rounded-xl hover:bg-bg-1 hover:text-color-3 dark:bg-bg-1 dark:text-color-3 dark:hover:bg-bg-2 dark:hover:text-color-1">
                  <a href="/terrain">
                    Détails{" "}
                    <i
                      className="fa-solid fa-archway text-color-1 dark:text-color-3"
                      aria-hidden="true"
                    ></i>
                  </a>
                </button>
              </div>
              <h2>Information</h2>
              <h2>Terrain dispo</h2>
              <h2>Participant</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-12 h-2 bg-bg-1 dark:bg-bg-2"></div>

      <div
        id="section1"
        className="w-full mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <CardRugby />
        <CardTennis />
        <CardVolley />
      </div>
    </div>
  );
}

export default Terrain;
