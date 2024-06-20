import Card from "./Card"


const Results = ({ results }) => {

    return (
        <div className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto">
            {
                results.map((result) => {
                    return (
                        <>
                            <Card result={result} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Results
