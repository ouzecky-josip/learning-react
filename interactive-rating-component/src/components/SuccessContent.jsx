import '../styles/SuccessContent.css';
import SuccessIcon from './SuccessIcon';

const SuccessContent = ({ selectedRate }) => {
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
      </div>
    </>
  );
};

export default SuccessContent;
