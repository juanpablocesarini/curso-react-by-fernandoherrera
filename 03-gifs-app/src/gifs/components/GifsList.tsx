//import type { Gif } from "../../mock-data/gifs.mock";
import type { Gif } from "../interfaces/gif.interface";


interface Props{
    gifsList:Gif[];
}

export const GifsList = ({ gifsList }: Props) => {
   console.log(gifsList);
  return (
    
      <div className="gifs-container">
        {gifsList.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width}x{gif.height} (1.5mb)
            </p>
          </div>
        ))}
      </div>
  )
}
