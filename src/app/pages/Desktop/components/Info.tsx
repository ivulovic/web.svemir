import { IInfoProps } from '../types';

import Time from './Time';

const Info: React.FC = (props: IInfoProps) => {
  return (
    <div id={props.id} className="info">
      <Time />
    </div>
  );
};

export default Info;
