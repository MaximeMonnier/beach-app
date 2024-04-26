import NavBar from "../components/NavBar";

type Props = {};

function Meteo({}: Props) {
  return (
    <div className="bg-bg-5 dark:bg-bg-3">
      <div className="p-2">
        <NavBar />
      </div>
    </div>
  );
}

export default Meteo;
