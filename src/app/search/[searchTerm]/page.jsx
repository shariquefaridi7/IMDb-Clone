import Results from "@/components/Results";
import axios from "axios";

const SearchTerm = async ({ params }) => {
      const { searchTerm } = params;

      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
      const { data } = res;
      const { results } = data;
      return (
            <div>
                  {
                        results.length === 0 ? (
                              <h1 className="text-center pt-6">No results found</h1>
                        ) : <Results results={results} />

                  }

            </div>

      )

}

export default SearchTerm
