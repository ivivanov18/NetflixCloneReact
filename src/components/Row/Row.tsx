import * as React from 'react';

function Row({title, fetchUrl}: RowProps){
    const [movies, setMovies] = React.useState([]);
    
    React.useEffect(() => {
        async function fetchMovies() {
            
        }
        fetchMovies;
    }, []);

    return(
        <div data-test="row-component" className="row">
            <h2 data-test="row-title">{title}</h2>
            <div data-test="row-posters" className="row__posters">

            </div>
        </div>
    );
}

export interface RowProps {
   title: string;
   fetchUrl: string;
};

export default Row;
