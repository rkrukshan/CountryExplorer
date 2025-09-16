import axios from "axios";
import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;
  const res = await axios
    .get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.data);
  return res;
}

export default function country({ loaderData }: Route.ComponentProps) {
  const country = {
    name: loaderData[0]?.name?.common || "N/A",
    officialName: loaderData[0]?.name?.official || "N/A",
    region: loaderData[0]?.region || "N/A",
    subregion: loaderData[0]?.subregion || "N/A",
    capital: loaderData[0]?.capital || "N/A",
    population: loaderData[0]?.population || "N/A",
    flagUrl: loaderData[0]?.flags?.png || "",
  };
  return (
    <div className="container mx-auto p-9 w-full flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-3">{country.name}</h2>
        <div>
          <p>
            <span className="text-lg font-medium mb-3">Official Name : </span>
            {country.officialName}
          </p>
          <p>
            <span className="text-lg font-medium mb-3">Region Name : </span>
            {country.region}
          </p>
          <p>
            <span className="text-lg font-medium mb-3">SubRegion Name : </span>
            {country.subregion}
          </p>
          <p>
            <span className="text-lg font-medium mb-3">Capital City Name : </span>
            {country.capital}
          </p>
          <p>
            <span className="text-lg font-medium mb-3">Population : </span>
            {country.population.toLocaleString()}
          </p>
        </div>
      </div>
      {country.flagUrl && (
        <div className="w-1/2">
          <img src={country.flagUrl} alt={country.flagUrl} />
        </div>
      )}
    </div>
  );
}
