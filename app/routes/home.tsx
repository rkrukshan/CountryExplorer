import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Country Explorer" },
    { name: "description", content: "Welcome to Country Explorer!" },
  ];
}

export default function Home() {
  return (
    <div className="px-2 py-32 bg-white mb:px-0">
      <div className="container items-center max-w-6xl mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="space-y-6 sm:max-w-md lg:max-w-md">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                <span className="block xl:inline">Explore Countries with</span>
                <span className="block text-indigo-600 xl:inline">Real Time Data</span>
              </h1>
              <p className="mx-auto text-justify tracking-tighter text-gray-500 sm:max-w-md lg:text-xl">
                Explore facts on every nation from capitals to continents and uncover the world’s hidden wonders!
                Let me know if you want it more formal, playful, or themed for a specific audience!
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <Link to={"/countries"} className="flex items-center justify-center px-6 py-3 text-lg text-white bg-indigo-700 rounded-lg">
                  Explore Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="exploreTitle exploreDesc"
                  >
                    <title id="exploreTitle">Explore</title>
                    <desc id="exploreDesc">
                      A compass icon representing exploration
                    </desc>
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <circle
                        cx="12"
                        cy="12"
                        r="1.2"
                        fill="currentColor"
                        stroke="none"
                      />
                      <path d="M16.5 7.5l-4.1 2.6a1 1 0 0 1-.6.2 1 1 0 0 1-.6-.2l-2.6-1.7 2.6 4.6 4.1-2.6a1 1 0 0 0 .6-.9 1 1 0 0 0-.1-.9z" />
                      <line x1="12" y1="3" x2="12" y2="5.2" />
                      <line x1="12" y1="18.8" x2="12" y2="21" />
                      <line x1="3" y1="12" x2="5.2" y2="12" />
                      <line x1="18.8" y1="12" x2="21" y2="12" />
                    </g>
                  </svg>
                </Link>
                <Link to={"/about"} className="flex items-center justify-center px-6 py-3 text-lg text-white bg-slate-300 rounded-lg">Learn More</Link>
              </div>
            </div>
          </div>

            <div className="w-full md:w-1/2 md:px-3">
              <img src="https://www.holidify.com/images/bgImages/VIETNAM.jpg" className="rounded-lg shadow-lg" alt="" />
            </div>

        </div>
      </div>
    </div>
  );
}
