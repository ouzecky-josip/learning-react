import '../styles/SuccessContent.css';
import Button from './Button';
import SuccessIcon from './SuccessIcon';

const SuccessContent = ({ selectedRate, resetForm }) => {
  return (
    <>
      <div className='card-main success-content'>
        <SuccessIcon />

        <p className='selected'>You selected {selectedRate} out of 5</p>

        <div>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>

        <Button onButtonClick={resetForm} isDisabled={false}>
          Rate Again
        </Button>
      </div>
    </>
  );
};

export default SuccessContent;
