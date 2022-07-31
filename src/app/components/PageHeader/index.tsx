import './style.scss';

export default function PageHeader({ children }): JSX.Element {
  return <div className="page-header">{children}</div>;
}
