import React from 'react';
import './CharacterList.css';

export default function CharacterList({ characters, episodes }) {
    return (
        <div className="character-list">
            {characters.map(character => (
                <div key={character.id} className="character-card">
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


