import NavBar from "../components/NavBar";
import CardRugby from "../components/Card/CardRugby";
import CardTennis from "../components/Card/CardTennis";
import CardVolley from "../components/Card/CardVolley";
import FullCalendar from "../components/FullCalendar";
import TerrainComponent from "../components/TerrainComponent";
import React, { useEffect, useState } from "react";
import axios from "axios";
import sable from "../assets/sable/s1.jpg";
import FormReservation from "../components/Form/FormReservation";
import { Link } from "react-router-dom";

interface TerrainProps {
  id: number;
  terrain_name: string;
  terrain_type_id: number;
  first_name: string;
  familly_name: string;
  userinfo: { id: number; username: string };
}

const Terrain: React.FC = () => {
  const [Terrains, setTerrain] = useState<TerrainProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<TerrainProps[]>([]);
  const [Display, setDisplay] = useState(false);

  console.log(Display);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
    fetchTerrain();
  }, []);

  // const DisplayFullCalendar = (_e: any) => {
  //     document.
  // }

  const fetchTerrain = async () => {
    setLoading(true);
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get<TerrainProps[]>(
        "http://localhost:8000/api/terrain"
      );
      setTerrain(response.data);
      //   console.log(response.data);

      setLoading(false);
    } catch (error) {
      console.error("Impossible de récupérer les terrains");
    }
  };

  const openModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal.close();
  };

  return (
    <div className="bg-bg-5 dark:bg-bg-3">
      <div className="h-screen p-2 flex flex-col justify-between">
        <div className="w-full">
          <NavBar />
        </div>
        <div className="w-full flex-grow flex flex-col sm:flex-row justify-between items-center gap-2 py-2">
          <div className="w-full sm:w-4/6 h-full rounded-xl flex flex-col justify-between">
            <div
              className="w-full h-2/3 sm:h-full border border-red-600 flex items-center justify-between px-4 gap-16 flex-wrap"
              style={{ backgroundImage: `url(${sable})` }}
            >
              {Terrains.map((Terrain) => (
                <TerrainComponent
                  key={Terrain.id}
                  id={Terrain.id}
                  terrain_name={Terrain.terrain_name}
                  terrain_type_id={Terrain.terrain_type_id}
                />
              ))}
            </div>
          </div>

          <div className="w-full sm:w-2/6 h-full flex-grow flex flex-col justify-around items-start gap-2">
            <div className="w-full relative">
              <div
                className="w-full bg-bg-1 rounded-xl text-color-3 flex flex-col justify-between p-2 dark:text-color-1 dark:bg-bg-2"
                onMouseEnter={() => setDisplay(true)}
                onMouseLeave={() => setDisplay(false)}
              >
                <FullCalendar />
              </div>
              {Display && (
                <div
                  className="text-grey text-center absolute top-80 left-40 z-10 w-full text-xl"
                  onMouseEnter={() => setDisplay(true)}
                >
                  <span className="cursor-ponter">
                    <Link to="/fullcalendar">
                      <i className="fa-solid fa-display"></i>
                    </Link>
                  </span>
                </div>
              )}
            </div>

            <div className="w-full h-full bg-bg-1 rounded-xl text-color-3 flex flex-col justify-between p-2 dark:text-color-1 dark:bg-bg-2">
              <div className="w-full bg-bg-3 rounded-xl h-10 flex items-center">
                {/* Open the modal using the showModal() method */}
                <button
                  className="btn btn-sm bg-bg-2 text-color-1 px-2 rounded-xl hover:bg-bg-1 hover:text-color-3 dark:bg-bg-1 dark:text-color-3 dark:hover:bg-bg-2 dark:hover:text-color-1"
                  onClick={openModal}
                >
                  Réserver
                </button>

                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box bg-bg-1 dark:bg-bg-3">
                    <div className="w-full flex justify-between items-center">
                      <h3 className="font-bold text-lg mb-4">
                        Ajouter un article
                      </h3>
                      <button
                        type="button"
                        className="btn hover:bg-red-600 text-color-1"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>

                    <FormReservation
                      terrains={Terrains}
                      userinfo={userInfo}
                      closemodale={closeModal}
                    />
                  </div>
                </dialog>
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
              <p>idee cette partie doit etre dynamique pour faire afficher differnte info par exmple si je clique sur météo cela affiche la meteo comme un changement de page mais uniquement sur cette partie pareil pour detail ou autre</p>
              <p>attention ce code nique le full-screen</p>
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
};

export default Terrain;
