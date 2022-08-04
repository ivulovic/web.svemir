import './style.scss';

export default function Loading(): JSX.Element {
  return (
    <div className="reactoso spinner-box">
      <div className="circle-border">
        <div className="circle-core"></div>
      </div>
    </div>
  );
}
