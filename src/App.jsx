import { useEffect, useState } from "react";
import Search from "./components/Search";

const API_BASE_URL = "https://api.tvmaze.com/shows";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [shows, setShows] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}`);
      if (!response.ok) {
        setError("Error while fetching data");
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      if (data.Response === false) {
        setError(data.Error || "Something went wrong");
        setShows([]);
        return;
      }
      console.log(data);
      setShows(data.slice(0, 20) || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies/Shows</span> You Will
            Enjoy Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
      </div>
      {isLoading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : shows.length === 0 ? (
        <p>No shows found</p>
      ) : (
        <ul>
          {shows.map((show) => (
            <li key={show.id}>
              <img src={show.image.medium} alt={show.name} />
              <h2>{show.name}</h2>
              <p>{show.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default App;
