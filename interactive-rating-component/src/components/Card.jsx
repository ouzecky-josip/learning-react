import '../styles/Card.css';
import Button from '../components/Button';
import RateSelector from '../components/RateSelector';
import RateIcon from '../components/RateIcon';
import { useState } from 'react';

const Card = () => {
  const [selectedRate, setSelectedRate] = useState(0);

  const handleRateClick = (rating) => {
    setSelectedRate(rating);
  };

  return (
    <div className='card'>
      <div className='card-heading'>
        <RateIcon />
      </div>

      <div className='card-main'>
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <RateSelector
          selectedRate={selectedRate}
          onRateClick={handleRateClick}
        />
      </div>

      <div className='card-footer'>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Card;
