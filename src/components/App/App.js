import React, { useState, useEffect } from "react";
import CharacterList from "../CharacterList";
import Header from "../Header/Header";
import NextButton from '../Button/NextButton';
import Footer from '../Footer/Footer';

import './App.css';
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const App = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [newPageUrl, setNextPageUrl] = useState();
    const [loading, setLoading] = useState(true);
    const [episodes, setEpisodes] = useState({});

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        setLoading(true);
        axios.get(currentPageUrl).then(res => {
            setLoading(false);
            setNextPageUrl(res.data.info.next);
            setCharacters(res.data.results);
        });
    }, [currentPageUrl]);

    useEffect(() => {
        characters.forEach(character => {
            character.episode.forEach(ep => {
                const episodeId = ep.split('/').pop();
                if (!episodes[episodeId]) {
                    axios.get(ep).then(response => {
                        setEpisodes(prevEpisodes => ({
                            ...prevEpisodes,
                            [episodeId]: response.data
                        }));
                    });
                }
            });
        });
    }, [characters,episodes]);

    function goToNextPage() {
        if (newPageUrl) {
            setCurrentPageUrl(newPageUrl);
        }
    }

    if (loading) return "Loading ...";

    return (
        <>
            <Header />
            <div data-aos="fade-in">
                <CharacterList characters={characters} episodes={episodes} />
            </div>
            <NextButton goToNextPage={goToNextPage} newPageUrl={newPageUrl} />
            <Footer />
        </>
    );
}

export default App;
