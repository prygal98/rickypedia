import React, { useState, useEffect } from "react";
import CharacterList from "../CharacterList";
import './App.css'
import axios from "axios";

const App = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [newPageUrl, setNextPageUrl] = useState();
    const [loading, setLoading] = useState(true);
    const [episodes, setEpisodes] = useState({});

    useEffect(() => {
        setLoading(true);
        axios.get(currentPageUrl).then(res => {
            setLoading(false);
            setNextPageUrl(res.data.info.next);
            setCharacters(res.data.results);  // Ici, on remplace au lieu de concaténer.
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
    }, [characters]);

    function goToNextPage() {
        if (newPageUrl) {
            setCurrentPageUrl(newPageUrl);
        }
    }

    if (loading) return "Loading ...";

    return (
        <>
            <CharacterList characters={characters} episodes={episodes} />
            {newPageUrl && <button onClick={goToNextPage}>Afficher les personnages suivants</button>}
        </>
    );
}

export default App;
