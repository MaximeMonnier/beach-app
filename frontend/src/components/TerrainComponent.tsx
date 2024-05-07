import terrain from "../assets/sans-bg/2.png";

interface TerrainProps {
  id: number;
  terrain_name: string;
  terrain_type_id: number;
}

const TerrainComponent: React.FC<TerrainProps> = ({
  id,
  terrain_name,
  terrain_type_id,
}) => {
  return (
    <div className="w-1/6 bg-bg-1 p-4 rounded-xl cursor-pointer hover:bg-bg-6 dark:bg-bg-3 dark:hover:bg-bg-2">
      <h2 className="text-center text-color-3 mb-2 dark:text-color-1">
        {terrain_name}
      </h2>
      <img className="w-full" src={terrain} alt="terrain" />
    </div>
  );
};

export default TerrainComponent;
