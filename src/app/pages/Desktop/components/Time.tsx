import TimeUtils from '../utils/time';
import useCurrentDateEffect from '../utils/useCurrentDateEffect';

const Time: React.FC = () => {
  const date: Date = useCurrentDateEffect();

  return <span className="time">{TimeUtils.format(date)}</span>;
};

export default Time;
