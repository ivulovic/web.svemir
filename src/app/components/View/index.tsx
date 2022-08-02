import './style.scss';

export default function View({ className = '', children }): JSX.Element {
  return <div className={`view anim ${className}`}>{children}</div>;
}
