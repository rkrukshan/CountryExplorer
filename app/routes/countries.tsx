import { Link } from "react-router";
import type { Route } from "./+types/countries";
import axios from "axios";
import { useState } from "react";

export async function clientLoader() {
  const data = await axios
    .get("https://restcountries.com/v3.1/all?fields=name,cca3")
    .then((data) => data.data);
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>("");
  const [official, setOfficial] = useState<string>("");

  const filteredSearch = loaderData.filter((country: any) => {
    const matchedSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());

    const matchedOfficial =
      !official || country.cca3.toLowerCase() === official.toLowerCase();

    return matchedSearch && matchedOfficial;
  });

  console.log(loaderData);
  return (
    <div className="p-3 w-full">
      <h2 className="text-3xl font-bold text-center p-3">Countries</h2>
      <div className="flex justify-between mx-auto w-1/2 py-5">
        <input
          className="text-lg shadow-xl w-1/2 border-2 border-slate-300 px-5 py-3 rounded mr-5"
          type="text"
          placeholder="Search by Name..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        <select
          className="text-lg shadow-lg w-1/2 border-2 border-slate-200 px-5 py-3 rounded"
          value={official}
          onChange={(event) => {
            setOfficial(event.target.value);
          }}
        >
          <option
            value="default"
            className="text-lg shadow-xl w-1/2 border-2 px-5 py-3 rounded"
          >
            Select CCA3 Name
          </option>
          {loaderData.map((country: any, key: number) => (
            <option
              value={country.cca3}
              key={key}
              className="text-lg shadow-xl w-1/2 border-2 px-5 py-3 rounded"
            >
              {country.cca3}
            </option>
          ))}
        </select>
      </div>
      {filteredSearch.length === 0 ? (
        <div className="text-center p-5 text-3xl font-bold text-blue-400 animate-pulse">
          Nothing Available
        </div>
      ) : (
        <ul className="grid-col-1 sm:grid grid-cols-2 lg:grid-cols-3">
          {filteredSearch.map((country: any, key: number) => (
            <li
              className="border-2 border-slate-200 rounded-lg m-3 py-2 px-9 text-justify tracking-tighter shadow-lg hover:shadow-slate-400 hover:cursor-pointer"
              key={key}
            >
              <Link
                to={`/countries/${country.name.common}`}
                className="text-xl font-medium text-blue-400"
              >
                {country.name.common}
              </Link>
              <div className="text-lg font-medium">
                Official : {country.name.official}
              </div>
              <div className="text-lg font-medium">CCA3 : {country.cca3}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
