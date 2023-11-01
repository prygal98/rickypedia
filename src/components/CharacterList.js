import React from 'react';
import './CharacterList.css';
import 'aos/dist/aos.css'; // Importez les styles AOS
import AOS from 'aos';

AOS.init(); // Initialisez AOS

export default function CharacterList({ characters, episodes }) {
    return (
        <div className="character-list">
            {characters.map(character => (
                <div key={character.id} className="character-card" data-aos="zoom-in">
                    <img src={character.image} alt={character.name} />
                    <h3>{character.name}</h3>
                    <p>Genre: {character.gender}</p>
                    <p>ID: {character.id}</p>
                    <label>Episodes: </label>
                    <select>
                        {character.episode.map(ep => {
                            const episodeId = ep.split('/').pop();
                            const episode = episodes[episodeId];
                            return (
                                <option key={ep} value={episodeId}>
                                    {episode ? `${episodeId} - ${episode.name}` : episodeId}
                                </option>
                            );
                        })}
                    </select>
                </div>
            ))}
        </div>
    );
}
