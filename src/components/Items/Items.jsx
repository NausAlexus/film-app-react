import "./Items.css";
import Item from "../Item/Item.jsx";
import { FILMS } from "../../Films.js";

function Items({ sortYear, sortName, selectedFilm, handleFilmSelect }) {
    
     let sortedFilms = [...FILMS];

    // Если сортировка по году активирована
    if (sortYear) {
        sortedFilms = [...FILMS].sort((a, b) => a.year - b.year);
    }

    // Если сортировка по названию активирована
    if (sortName) {
        sortedFilms = [...FILMS].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));;
    }

	// Фильтруем фильмы в зависимости от выбранного
    const filteredFilms = selectedFilm ? [selectedFilm] : sortedFilms;


	return (
		<div className="items-container">
			{filteredFilms.map((movie) => (
                <div key={movie.id} onClick={() => handleFilmSelect(movie)} style={{ cursor: 'pointer' }}>
                    <Item
                        poster={movie.poster}
                        title={movie.title}
                        year={movie.year}
                        genres={movie.genres}
                        directors={movie.directors}
                        actors={movie.actors}
                        description={movie.description}
                        duration={movie.duration}
                    />
                </div>
            ))}
        </div>
    );
}


export default Items;
