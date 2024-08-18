// import { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';

// function CharacterDetail() {
//     // these uses destructuring to pull out the value
//     // of id and set it equal to a variable called id
//     const {id} = useParams();
//     const [hero, setHero] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(()=>{
//         const fetchHero = async () => {
//             try{
//                 const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=7969b67bee62f7e4fc44479132c59dcd&hash=391a15c0d017c10377ce627d57ea4f3a`)

//                 console.log(response.data);
//                 setHero(response.data.data.results[0]);
//                 setLoading(false);
//             } catch (error){
//                 console.error("error fetching heroes", error);
//             }
//         }

//         fetchHero();
//     }, [id])

//     // forcing the component to re-render
//     // so useEffect will run again
//     if(loading){
//         return <h3>Loading hero.....</h3>
//     }

//     return (
//         <div>
//             <br/>
//             <Link to={'/characters'}>Go Back to Characters</Link>
//             <br/>

//             <div>
//                 <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
//                     width="200" alt={hero.name}/>

//                 <h3>{hero.name}</h3>

//                 {hero.description &&
//                     <div>
//                         <h4>Description</h4>
//                         <p>{hero.description}</p>
//                     </div>
//                 }

//                 <h4>Comics:</h4>
//                 {hero.comics.items.map(comic => (
//                     <div key={comic.resourceURI}>
//                         {comic.name}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default CharacterDetail;


import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetail = () => {
    const { id } = useParams();
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=7969b67bee62f7e4fc44479132c59dcd&hash=391a15c0d017c10377ce627d57ea4f3a`);
                console.log(response.data);
                setHero(response.data.data.results[0]);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching hero", error);
            }
        };

        fetchHero();
    }, [id]);

    if (loading) {
        return <h3>Loading hero.....</h3>;
    }

    return (
        <div>
            <br />
            <Link to={'/characters'}>Go Back to Characters</Link>
            <br />

            <div style={styles.detailContainer}>
                <img 
                    src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    width="200" 
                    alt={hero.name} 
                    style={styles.thumbnail}
                />

                <h3>{hero.name}</h3>

                {hero.description && (
                    <div>
                        <h4>Description</h4>
                        <p>{hero.description}</p>
                    </div>
                )}

                <h4>Comics:</h4>
                {hero.comics.items.map(comic => (
                    <div key={comic.resourceURI}>
                        {comic.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    detailContainer: {
        margin: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
    },
    thumbnail: {
        borderRadius: '8px',
        marginBottom: '10px',
    },
};

export default CharacterDetail;
