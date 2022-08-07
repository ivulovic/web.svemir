import { IInfoProps } from '../../types';
import Time from './Time';
import './style.scss';

const Info: React.FC = (props: IInfoProps) => {
  return (
    <div className={`${props.className} info`}>
      <Time />
    </div>
  );
};

export default Info;
