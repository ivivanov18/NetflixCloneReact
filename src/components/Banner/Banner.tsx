import * as React from "react";
import MainApi from "../../api/MainApi";
import Movie from "../../models/Movie";
import "./Banner.css";

export default function Banner({ fetchUrl, httpClient }: BannerProps) {
    const [movie, setMovie] = React.useState<Movie>();

    React.useEffect(() => {
        fetchData();

        async function fetchData() {
            const response = await httpClient.getMoviesByRequest(fetchUrl);
            const movies: Array<any> = response?.data?.results;
            const randomMovieIdx: number = Math.floor(
                Math.random() * movies?.length
            );
            setMovie(movies[randomMovieIdx]);
        }
    }, []);

    return (
        <div
            data-test="banner-component"
            className="banner"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <div data-test="banner-contents" className="banner__contents">
                <div data-test="banner-actions" className="banner__actions">
                    <h1 data-test="banner-title" className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner__buttons">
                        <button
                            data-test="button-play"
                            className="banner__button"
                        >
                            Play
                        </button>
                        <button
                            data-test="button-more-information"
                            className="banner__button"
                        >
                            More info
                        </button>
                    </div>
                </div>
                <div
                    data-test="banner-description"
                    className="banner__description"
                >
                    {movie?.overview}
                </div>
            </div>
            <div className="banner__fadeBottom"></div>
        </div>
    );
}

export interface BannerProps {
    fetchUrl: string;
    httpClient: MainApi;
}
