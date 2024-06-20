import axios from "axios"
import Image from "next/image";


const Id = async ({ params }) => {

    const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`);
    const { data } = res;

    return (
        <div className="w-full">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
                <Image
                    src={`https:image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`}
                    width={500}
                    height={300}
                    className="rounded-lg"
                    style={{ maxWidth: '100%', height: '100%' }}

                />
                <div className="p-2">
                    <h2 className="text-lg mb-3 font-bold">{data.title || data.name}</h2>
                    <p className="text-lg mb-3"> {data.overview}</p>
                    <p className="mb-3">  <span className="font-semibold mr-1"> Date Released:</span>{data.release_date || data.first_air_date}</p>
                    <p className="mb-3"> <span className="font-semibold mr-1"> Rating:</span> {data.vote_count}</p>

                </div>
            </div>

        </div>
    )
}

export default Id

