import Imagem from './Imagem';

const imagens = [
    'https://popnow.com.br/wp-content/uploads/2018/08/RBD.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg',
    'https://i.pinimg.com/originals/cc/03/43/cc03439e7981c29c81590a7eb184ed0a.jpg',
    'https://upload.wikimedia.org/wikipedia/it/thumb/c/c0/Barbie_-_Life_in_the_Dreamhouse.jpg/1200px-Barbie_-_Life_in_the_Dreamhouse.jpg',
    'https://miro.medium.com/v2/resize:fit:2000/1*kw9rTzHJB59FqMCa4SZLrw.jpeg',
    'https://s2.glbimg.com/1B4lLlAetwpvvN7ZQPjks7bCO_U=/620x465/s.glbimg.com/jo/g1/f/original/2016/06/09/mebeforeyou1.jpeg',
];

function Galeria(){
    return (
        <div className = "galeria">
            {imagens.map((url, index) => (
                <Imagem key = {index} url={url} />
            ))}
        </div>
    )
}

export default Galeria;