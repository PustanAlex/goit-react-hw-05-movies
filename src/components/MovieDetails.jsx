
const MovieDetails = ({movieDetails}) => {

     if (!movieDetails) {
        return <div>Loading...</div>;
    }

    const { title, overview, release_date, vote_average } = movieDetails;
   
    return (

       <div>
            <h1>{title}</h1>
            <p>{overview}</p>
            <p>Release Date: {release_date}</p>
            <p>Rating: {vote_average}</p>
       </div>
    )
}

export default MovieDetails;