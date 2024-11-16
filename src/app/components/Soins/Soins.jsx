import React from 'react';
import './soins.css';

const Soins = () => {
  return (
    <section className='soins_page'>
        <h1 >SOINS APRES TATOUAGE</h1>
        <ul className='soins_description'>
        <li>A la fin de la séance le tatouage peut être rouge, chaud, douloureux et gonflé, je rappelle que le tatouage est une plaie ces signes sont donc normaux</li>
        <li>A la fin de la séance un dermalize sera appliqué, celui-ci est a
        laissé sur le tatouage pendant 3 jours.</li>
        <li>Une fois les 3 jours passés le dermalize peut être retiré, lavage du tatouage au savon PH neutre lors de la douche et hydratation de celui-ci 2 fois par jour MAXIMUM (il ne sert à rien de l’hydrater toutes les heures)</li>
        <li>Durant la phase de cicatrisation le tatouage peut provoquerdes démangeaisons et des croûtes peuvent se retirer, il ne faut SURTOUT PAS GRATTER OU ARRACHER LES CROUTES</li>
        </ul>
        <h2 className='precaution_tattoo'>LES CHOSES A EVITER APRES LE TATOUAGE :</h2>
        <ul className='list_precaution_tattoo'>
            <li>éviter les UV, le soleil</li>
            <li> éviter les bains, piscine, chlore...</li>
            <li>éviter les vêtements trop serrés qui pourraient frotter sur le tatouage</li>
        </ul>
        <h3 className='cicatrisation_tattoo'>Temps de cicatrisation du tatouage : 1 mois</h3>
        <a className='download_content' href="./Soins_apres_tatouage.pdf.pdf" download="pdf-test.pdf"><img className='download_icon' src='./download-solid.svg'></img>Télécharger notre feuille de soins en PDF<img className='download_icon' src='./download-solid.svg'></img></a>
    </section>
  )
}

export default Soins