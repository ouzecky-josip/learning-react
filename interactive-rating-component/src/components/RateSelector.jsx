import '../styles/RateSelector.css';

const RateSelector = () => {
  const ratings = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className='rate-selector'>
      {ratings.map((rating) => (
        <span className='rate' key={rating}>
          {rating}
        </span>
      ))}
    </div>
  );
};

export default RateSelector;
