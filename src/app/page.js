
import Results from "@/components/Results";
import axios from "axios";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {

  const { gene } = searchParams || 'fetchTrending';
  const res = await axios.get(`https://api.themoviedb.org/3${gene == 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`);
  const { data } = res;
  const { results } = data;

  return (
    <div>
      <Results results={results} />


    </div>
  )
}

export default Home










