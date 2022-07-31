import './style.scss';

export default function Button(props: any): JSX.Element {
  const { children, ...restOfTheProps } = props;
  return (
    <div className="reactoso button">
      <button type="button" {...restOfTheProps}>
        {children}
      </button>
    </div>
  );
}
