import './Main.css';
import CheckboxName from '../Checkbox/CheckboxName.jsx';
import CheckboxYear from '../Checkbox/CheckboxYear.jsx';
import Items from '../Items/Items.jsx';
import { useState, useEffect } from 'react';
import arrow_back from './../../img/arrow_back.png'
import { FILMS } from "../../Films.js";
import Loader from './../../img/Loader.png'

function Main () {
    const [sortYear, setSortYear] = useState(false);
    const [sortName, setSortName] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState();
    const [loading, setLoading] = useState(true);  

    const toggleSortYear = () => {
        setSortYear(prev => !prev);
    }
    const toggleSortName = () => {
        setSortName(prev => !prev);
    }
    const handleFilmSelect = (film) => {
        setSelectedFilm(film);
    }

    const handleBackToList = () => {
        setSelectedFilm();
    }

    // Ожидание загрузки
    useEffect(() => {
        const fetchData = async () => {
           
            await fetch({Items, FILMS, CheckboxName, CheckboxYear});
            await new Promise(resolve => setTimeout(resolve, 2000));
            
           
            
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className='main'>
            {loading ? (  // Проверка состояния загрузки
                <div className='loading'>
                    <img src={Loader} alt="Loader" />
                </div>
            ) : (
                !selectedFilm ? (
                    <>
                        <p className='film-title'>Фильмы</p>
                        <div className='checkbox-container'>
                            <CheckboxName toggleSortName={toggleSortName} />
                            <CheckboxYear toggleSortYear={toggleSortYear} />
                        </div>
                        <div className='line'></div>
                        <Items selectedFilm={selectedFilm} handleFilmSelect={handleFilmSelect} sortYear={sortYear} sortName={sortName} />
                    </>
                ) : (
                    <div>
                        <button className='btn_main' onClick={handleBackToList}> <img src={arrow_back} alt=" back" />Назад к списку</button>
                        <div className='line'></div>
                        <Items selectedFilm={selectedFilm} handleFilmSelect={handleFilmSelect} sortYear={sortYear} sortName={sortName} />
                    </div>
                )
            )}
        </div>
    );
};

export default Main;