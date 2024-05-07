import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCsrfToken } from "../../utils/getCsrfToken";
import axios from "axios";

interface TerrainProps {
  id: number;
  terrain_name: string;
  terrain_type_id: number;
}

interface FormReservationProps {
  date_start: Date;
  date_fin: Date;
  terrains: TerrainProps[];
  userinfo: { id: number; username: string };
  closemodale: () => void;
}

const FormReservation: React.FC<FormReservationProps> = ({
  terrains,
  userinfo,
  closemodale,
}) => {
  // const navigate = useNavigate();
  const [terrainId, setTerrainId] = useState<number | undefined>();
  const [dateStart, setDateStart] = useState<string>("");
  const [dateFin, setDateFin] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    const formData = {
      users_id: userinfo.id,
      terrain_id: terrainId,
      date_start: dateStart,
      date_end: dateFin,
    };

    try {
      axios.defaults.withCredentials = true;
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      const csrfToken = getCsrfToken();

      const response = await axios.post(
        "http://localhost:8000/api/reservation",
        formData,
        {
          headers: {
            "X-XSRF-TOKEN": csrfToken,
          },
        }
      );

      console.log("Données envoyer", response.data);
      setIsSubmitting(false);
      setTerrainId(undefined);
      setDateStart("");
      setDateFin("");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setErrors(
          error.response.data.errors || {
            form: "Une erreur inconnue est survenue.",
          }
        );
      } else {
        setErrors({ form: "Problème de connexion ou erreur serveur." });
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="number"
          className="hidden"
          name="users_id"
          value={userinfo.id}
          readOnly
        />
        <select
          className="select select-md select-bordered w-full max-w-xs bg-bg-2 text-color-1 dark:bg-bg-1 dark:text-color-3"
          name="terrain_id"
          value={terrainId ?? ""}
          onChange={(e) => setTerrainId(Number(e.target.value))}
        >
          <option value="">Choisissez un terrain</option>
          {terrains.map((terrain) => (
            <option key={terrain.id} value={terrain.id}>
              {terrain.terrain_name}
            </option>
          ))}
        </select>
        <label htmlFor="date_start">Date de début</label>
        <input
          type="date"
          id="date_start"
          value={dateStart}
          onChange={(e) => setDateStart(e.target.value)}
          className="input input-md input-bordered w-full bg-bg-2 text-color-1 dark:bg-bg-1 dark:text-color-3"
        />
        <label htmlFor="date_fin">Date de fin</label>
        <input
          type="date"
          id="date_end"
          value={dateFin}
          onChange={(e) => setDateFin(e.target.value)}
          className="input input-md input-bordered w-full bg-bg-2 text-color-1 dark:bg-bg-1 dark:text-color-3"
        />
        <button
          type="submit"
          onClick={closemodale}
          disabled={isSubmitting}
          className="btn mt-2 bg-bg-2 text-color-1 hover:bg-bg-3 dark:bg-bg-1 dark:text-color-3"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default FormReservation;
