import rugby from '../../assets/logo/rugby.webp'


type Props = {};

function CardRugby({}: Props) {
  return (
    <article className="rounded-xl border border-color-1 bg-bg-1 p-4 dark:bg-bg-2">
    <div className="flex  justify-around items-center gap-4">
      <img
        alt="logo_rugby"
        src={rugby}
        className="size-16 rounded-full object-cover"
      />

      <div>
        <h3 className="text-lg font-medium text-color-3 dark:text-color-1">
          Terrain de Rugby
        </h3>
      </div>

      <div>
        <button className="text-color-1  bg-bg-3 px-2 py-1 rounded-md hover:bg-bg-2 hover:text-color-1 dark:text-color-3 dark:bg-bg-1 dark:hover:bg-bg-3 dark:hover:text-color-1">Voire</button>
      </div>
    </div>

    <ul className="mt-4 space-y-2">
      <li>
        <div className="block h-full rounded-lg border border-color-3 p-4 hover:border-color-2 dark:border-color-1 dark:hover:border-color-3">
          <strong className="font-medium text-color-3 dark:text-color-1">
            Terrain réserver
          </strong>

          <p className="mt-1 text-xs font-medium text-color-3 dark:text-color-1">
            Terrain réserver tout les mardi matin de 10h à 12h
          </p>
        </div>
      </li>
    </ul>
  </article>
  );
}

export default CardRugby;
