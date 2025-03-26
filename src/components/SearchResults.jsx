import useFetch from '../hooks/useFetch';

export default function SearchResults({ url, params }) {

    const [loading, data, error] = useFetch(url, params); 

    // console.log(params.get('query'));

    return (
        <section>
        {loading && <div>Loading...</div>}
        {!loading && (params.get('query') != '') && (
            <div>
                <div className="container">
                    <div className="row">
                        {data.map(item => (
                            <div className="item" key={item.id}>
                                <h3>{item.original_title}</h3>
                                    {item.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />}
                            </div>
                            )
                        )}
                        {
                            data.length === 0 && error === null &&
                            <p>Found nothing.</p>
                        }
                        {
                            error != null &&
                            <p>{error.message}</p>     
                        }
                    </div>
                </div>
            </div>
        )}
        </section>
    )
}