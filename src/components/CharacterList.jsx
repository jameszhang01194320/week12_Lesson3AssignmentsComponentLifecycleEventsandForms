// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const CharacterList = () => {
//     const [heroes, setHeroes] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(()=>{
//         const fetchHeroes = async () => {
//             try{
//                 const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=7969b67bee62f7e4fc44479132c59dcd&hash=391a15c0d017c10377ce627d57ea4f3a')
//                 console.log(response.data.data.results);
//                 setHeroes(response.data.data.results);
//                 setLoading(false);
//             } catch (error){
//                 console.error("error fetching heroes", error);
//             }
//         }

//         fetchHeroes();
//     }, [])

//     if(loading){
//         return <h3>Loading heroes.....</h3>
//     }

//     return (
//         <div>
//             <h3>Heroes</h3>
//             {heroes.map(hero => (
//                 <div key={hero.id} className="character">
//                     <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
//                         width="200" alt={hero.name}/>
//                     <br/>
//                     <Link to={`/characters/${hero.id}`}>{hero.name}</Link>
//                 </div>
//             ))}
//         </div>
//     )
// }



// export default CharacterList;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CharacterList = () => {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchHeroes = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=7969b67bee62f7e4fc44479132c59dcd&hash=391a15c0d017c10377ce627d57ea4f3a');
                console.log(response.data.data.results);
                setHeroes(response.data.data.results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching heroes", error);
            }
        }

        fetchHeroes();
    }, []);

    if (loading) {
        return <h3>Loading heroes.....</h3>;
    }

    return (
        <div>
            <h3>Heroes</h3>
            <div style={styles.gridContainer}>
                {heroes.map(hero => (
                    <div key={hero.id} className="character" style={styles.card}>
                        <Link to={`/characters/${hero.id}`}>
                            <img 
                                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                                width="200" 
                                alt={hero.name} 
                                style={styles.thumbnail}
                            />
                            <h4>{hero.name}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '20px',
        padding: '20px',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
    },
    thumbnail: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginBottom: '10px',
    },
};

export default CharacterList;
