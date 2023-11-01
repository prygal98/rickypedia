import React from 'react';
import './NextButton.css'; 
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';


export default function NextButton({ goToNextPage, newPageUrl }) {
    return (
        newPageUrl && 
        <div className="button-container">
            <AwesomeButton 
                type="primary"
                onPress={goToNextPage}
                cssModule={AwesomeButtonStyles}
            >
                Afficher les personnages suivants
            </AwesomeButton>
        </div>
    );
}
