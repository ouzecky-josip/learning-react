import '../styles/RateSelector.css';

const RateSelector = ({ selectedRate, onRateClick }) => {
  const ratings = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className='rate-selector'>
      {ratings.map((rating) => (
        <span
          className={`rate ${rating === selectedRate && 'active'}`}
          onClick={() => onRateClick(rating)}
          key={rating}
        >
          {rating}
        </span>
      ))}
    </div>
  );
};

export default RateSelector;
