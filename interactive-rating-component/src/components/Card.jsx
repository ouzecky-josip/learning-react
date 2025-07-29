import '../styles/Card.css';
import Button from '../components/Button';
import RateSelector from '../components/RateSelector';
import RateIcon from '../components/RateIcon';

const Card = () => {
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
        <RateSelector />
      </div>

      <div className='card-footer'>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Card;
