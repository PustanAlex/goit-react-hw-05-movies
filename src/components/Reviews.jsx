const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();
  const apiKey = 'a31f32c2390f6ff1abf334be45f35ecd';
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=${apiKey}`
    )
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          setReviews(data.results);
        } else {
          console.error('No reviews found');
        }
      })
      .catch(err => console.error(err));
  }, [movieId, apiKey]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>There are no reviews for this movie.</p>
      ) : (
        reviews.map(review => (
          <div key={review.id}> 
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
