import React from "react";
import { useQuery } from 'react-query';
import axios from 'axios';
import {ReactQueryDevtools} from "react-query/devtools";

const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};

export default function Users() {
    const { data, isLoading, isError } = useQuery(
        ['usersData'], // Clé de la requête : identifiant unique pour la requête
        fetchData, // Fonction pour récupérer les données
        {
           // refetchOnWindowFocus:false //pour éviter le probleme d'envoyer une requet au serveur a chaque fois en quit la navigateur
            refetchOnMount: false, // Ne pas refetcher automatiquement les données lorsque le composant est monté
            retry: 2, // Option définissant le nombre de tentatives de récupération des données en cas d'échec
            cacheTime: 5 * 60 * 1000, // Durée de mise en cache des données en millisecondes (5 minutes)
            staleTime:10000, // Option définissant le temps pendant lequel les données sont considérées comme valides avant d'être rafraîchies
            refetchInterval:2000, // Option pour rafraîchir les données automatiquement toutes les 5 secondes
            refetchIntervalInBackground:2000 // Option pour rafraîchir les données en arrière-plan toutes les 2 secondes exemple notification
        }
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
        <>
            <ReactQueryDevtools/>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </>
    );
}
