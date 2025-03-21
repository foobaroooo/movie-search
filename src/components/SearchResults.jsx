import useFetch from '../hooks/useFetch';

export default function SearchResults({ url }) {

    const [loading, data] = useFetch(url); 

    return (
        <section>
        {loading && <div>Loading...</div>}
        {!loading && (
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
                        {data.length === 0 && <p>Found nothing.</p>}
                    </div>
                </div>
            </div>
        )}
        </section>
    )
}