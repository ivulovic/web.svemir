import './style.scss';

export default function Container({ children }): JSX.Element {
  return <main className="container">{ children }</main>;
}
