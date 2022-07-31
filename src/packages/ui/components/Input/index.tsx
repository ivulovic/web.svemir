import './style.scss';

export default function Input(props: any): JSX.Element {
  return (
    <div className="reactoso input">
      <input {...props} />
    </div>
  );
}
