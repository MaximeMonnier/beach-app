import rugby from '../../assets/logo/rugby.webp'


type Props = {};

function CardRugby({}: Props) {
  return (
    <article className="rounded-xl text-color-3 border border-color-1 bg-bg-2 p-4">
      <div className="flex  justify-around items-center gap-4">
        <img
          alt=""
          src={rugby}
          className="size-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-medium text-color-3">
            Terrain de Tennis
          </h3>
        </div>

        <div>
          <button className="text-color-3">Voire</button>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        <li>
          <div
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-red-600"
          >
            <strong className="font-medium text-color-3">
              Terrain réserver
            </strong>

            <p className="mt-1 text-xs font-medium text-color-3">Terrain réserver tout les mardi matin de 10h à 12h</p>
          </div>
        </li>
      </ul>
    </article>
  );
}

export default CardRugby;
