import { Movie } from "../typings"

interface Props {
    netflixOriginals: Movie[]
}

function Banner({netflixOriginals}: Props) {
    return ( 
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default Banner