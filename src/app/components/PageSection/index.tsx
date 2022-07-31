import './style.scss';

export default function PageSection({ children }): JSX.Element {
  return <div className="page-section anim">{children}</div>;
}
