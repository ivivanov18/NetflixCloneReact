import * as React from "react";
import MainApi from "../../api/MainApi";
import "./Row.css";

function Row({ title, fetchUrl, httpClient }: RowProps) {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        async function fetchMovies() {
            const response = await httpClient.getMoviesByRequest(fetchUrl);
            setMovies(response.data.results);
        }
        fetchMovies();
    }, []);

    return (
        <div data-test="row-component" className="row">
            <h2 data-test="row-title">{title}</h2>
            <div data-test="row-posters" className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className="row__poster"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.original_name}
                    />
                ))}
            </div>
        </div>
    );
}

export interface RowProps {
    title: string;
    fetchUrl: string;
    httpClient: MainApi;
}

export default Row;
