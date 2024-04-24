import terrain from "../assets/sans-bg/2.png";
import sable from "../assets/sable/s1.jpg";

type Props = {};

function TerrainComponent({}: Props) {
  return (
    <div
      className="w-full h-full border border-red-600 flex flex-col justify-around items-center rounded-xl"
      style={{ backgroundImage: `url(${sable})` }}
    >
      <div className="w-full flex justify-around gap-2">
        <div className="w-1/6 bg-bg-1 p-4 rounded-xl cursor-pointer hover:bg-bg-6 dark:bg-bg-3 dark:hover:bg-bg-2">
          <h2 className="text-center text-color-3 mb-2 dark:text-color-1">
            Terrain 1
          </h2>
          <img className="w-full" src={terrain} alt="terrain" />
        </div>
        <div className="w-1/6 bg-bg-1 p-4 rounded-xl cursor-pointer hover:bg-bg-6 dark:bg-bg-3 dark:hover:bg-bg-2">
          <h2 className="text-center text-color-3 mb-2 dark:text-color-1">
            Terrain 1
          </h2>
          <img className="w-full" src={terrain} alt="terrain" />
        </div>
        <div className="w-1/6 bg-bg-1 p-4 rounded-xl cursor-pointer hover:bg-bg-6 dark:bg-bg-3 dark:hover:bg-bg-2">
          <h2 className="text-center text-color-3 mb-2 dark:text-color-1">
            Terrain 1
          </h2>
          <img className="w-full" src={terrain} alt="terrain" />
        </div>
        <div className="w-1/6 bg-bg-1 p-4 rounded-xl cursor-pointer hover:bg-bg-6 dark:bg-bg-3 dark:hover:bg-bg-2">
          <h2 className="text-center text-color-3 mb-2 dark:text-color-1">
            Terrain 1
          </h2>
          <img className="w-full" src={terrain} alt="terrain" />
        </div>
      </div>
      <div className="w-full flex justify-around gap-2">
        <div className="w-1/6 bg-bg-1 p-4 rounded-xl cursor-pointer hover:bg-bg-6 dark:bg-bg-3 dark:hover:bg-bg-2">
          <h2 className="text-center text-color-3 mb-2 dark:text-color-1">
            Terrain 1
          </h2>
          <img className="w-full" src={terrain} alt="terrain" />
        </div>
        <div className="w-1/6 bg-bg-1 p-4 rounded-xl cursor-pointer hover:bg-bg-6 dark:bg-bg-3 dark:hover:bg-bg-2">
          <h2 className="text-center text-color-3 mb-2 dark:text-color-1">
            Terrain 1
          </h2>
          <img className="w-full" src={terrain} alt="terrain" />
        </div>
        <div className="w-1/6 bg-bg-1 p-4 rounded-xl cursor-pointer hover:bg-bg-6 dark:bg-bg-3 dark:hover:bg-bg-2">
          <h2 className="text-center text-color-3 mb-2 dark:text-color-1">
            Terrain 1
          </h2>
          <img className="w-full" src={terrain} alt="terrain" />
        </div>
        <div className="w-1/6 bg-bg-1 p-4 rounded-xl cursor-pointer hover:bg-bg-6 dark:bg-bg-3 dark:hover:bg-bg-2">
          <h2 className="text-center text-color-3 mb-2 dark:text-color-1">
            Terrain 1
          </h2>
          <img className="w-full" src={terrain} alt="terrain" />
        </div>
      </div>
    </div>
  );
}

export default TerrainComponent;
