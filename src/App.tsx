import * as React from "react";
import Row from "./components/Row/Row";
import { requests, API_BASE_URL } from "./api/api";
import HttpClient from "./api/MainApi";

const httpClient = new HttpClient(API_BASE_URL);

function App() {
    return (
        <React.Fragment>
            <Row
                data-test="row-component"
                title="Neflix originals"
                fetchUrl={requests.fetchNetflixOriginals}
                httpClient={httpClient}
            />
            <Row
                data-test="row-component"
                title="Trending"
                fetchUrl={requests.fetchTrending}
                httpClient={httpClient}
            />
            <Row
                data-test="row-component"
                title="Top rated"
                fetchUrl={requests.fetchTopRated}
                httpClient={httpClient}
            />
            <Row
                data-test="row-component"
                title="Action"
                fetchUrl={requests.fetchActionMovies}
                httpClient={httpClient}
            />
            <Row
                data-test="row-component"
                title="Comedy"
                fetchUrl={requests.fetchComedyMovies}
                httpClient={httpClient}
            />
            <Row
                data-test="row-component"
                title="Romance"
                fetchUrl={requests.fetchRomanceMovies}
                httpClient={httpClient}
            />
            <Row
                data-test="row-component"
                title="Horror"
                fetchUrl={requests.fetchHorrorMovies}
                httpClient={httpClient}
            />
            <Row
                data-test="row-component"
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
                httpClient={httpClient}
            />
        </React.Fragment>
    );
}

export default App;
