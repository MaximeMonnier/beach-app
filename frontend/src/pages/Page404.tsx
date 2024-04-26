import { Link } from "react-router-dom";

type Props = {};

function Page404({}: Props) {
  return (
    <div className="bg-bg-5 dark:bg-bg-3">
      <div className="h-screen grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-color-1">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-color-3 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-color-1">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="bg-bg-2 text-color-1 p-2 rounded-xl mt-4 hover:bg-bg-1 hover:text-color-3 dark:bg-bg-1 dark:text-color-3 dark:hover:bg-bg-2 dark:hover:text-color-1">
              <Link to="/accueil">Accueil</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;
