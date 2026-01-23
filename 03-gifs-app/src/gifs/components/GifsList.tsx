import type { Gif } from "../../mock-data/gifs.mock";


interface Props{
    gifsList:Gif[];
}

export const GifsList = ({gifsList}:Props) => {
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
