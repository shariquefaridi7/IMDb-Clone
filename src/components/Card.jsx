
import Link from "next/link";
import { FiThumbsUp } from 'react-icons/fi';
import Image from "next/image";


const Card = ({ result }) => {
    return (
        <>
            <div className=" group sm:shadow-md sm:hover:shadow-slate-500 sm:rounded-lg sm:border-slate-400 sm:m-2 sm:transition-shadow duration-300 ">
                <Link href={`movie/${result.id}`}>
                    <Image
                        src={`https:image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                        width={500}
                        height={300}
                        className="sm:rounded-t-lg"

                    />
                    <div className="p-2">
                        <p className="line-clamp-2 text-md">{result.overview}</p>
                        <h2 className="text-lg font-bold truncate">
                            {
                                result.title || result.name
                            }
                        </h2>

                        <p className="flex gap-2 items-center">
                            {result.release_date || result.first_air_date}
                            <FiThumbsUp className="h-5" />
                            {result.vote_count}
                        </p>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default Card;
