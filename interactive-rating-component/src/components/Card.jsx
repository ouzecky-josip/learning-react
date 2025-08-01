import '../styles/Card.css';
import Button from './Button';
import RateSelector from './RateSelector';
import RateIcon from './RateIcon';
import SuccessContent from './SuccessContent';
import { useState } from 'react';

const Card = () => {
  const [selectedRate, setSelectedRate] = useState(0);
  const [isRateSubmitted, setIsRateSubmitted] = useState(false);

  const handleRateClick = (rating) => {
    setSelectedRate(rating);
  };

  const handleSubmit = () => {
    setIsRateSubmitted(true);
  };

  const handleResetForm = () => {
    setIsRateSubmitted(false);
    setSelectedRate(0);
  };

  return (
    <>
      {isRateSubmitted ? (
        <div className='card'>
          <SuccessContent
            selectedRate={selectedRate}
            resetForm={handleResetForm}
          />
        </div>
      ) : (
        <div className='card'>
          <div className='card-heading'>
            <RateIcon />
          </div>

          <div className='card-main'>
            <h2>How did we do?</h2>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <RateSelector
              selectedRate={selectedRate}
              onRateClick={handleRateClick}
            />
          </div>

          <div className='card-footer'>
            <Button
              isDisabled={selectedRate === 0}
              onButtonClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
