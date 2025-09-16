import { Link } from "react-router";
import type { Route } from "./+types/home";
import { FaGlobe } from "react-icons/fa";

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
                <span className="block xl:inline">Discover Countries </span>
                <span className="block text-indigo-600 xl:inline">
                  Through Real-Time Data Intelligence
                </span>
              </h1>
              <p className="mx-auto text-justify tracking-tighter text-gray-500 sm:max-w-md lg:text-xl">
                Explore Comprehensive Facts on Every Nation From Capitals to
                Continents and Uncover the Hidden Wonders of Our World.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <Link
                  to={"/countries"}
                  className="flex items-center justify-center px-6 py-3 text-lg text-white bg-indigo-700 rounded-lg"
                >
                  Explore Now
                  <span className="text-2xl px-3">
                    <FaGlobe />
                  </span>
                </Link>
                <Link
                  to={"/about"}
                  className="flex items-center justify-center px-6 py-3 text-lg text-white bg-slate-300 rounded-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:px-3">
            <img
              src="https://www.holidify.com/images/bgImages/VIETNAM.jpg"
              className="rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
