import './style.scss';

export default function MediaCard(): JSX.Element {
  return (
    <div className="media-card">
      <div className="media-card-time">8 min</div>
      <div className="media-card-wrapper">
        <img
          alt=""
          src="https://play-lh.googleusercontent.com/RNWKPePILHGZWUO6wLZpXaU1atiFGvrfNhKNDszrEb8znaXy29vr6NjqwKNOsgjhbiY"
        />
        <div className="author-img__wrapper media-card-author">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
          <img
            alt=""
            className="author-img"
            src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          />
        </div>
      </div>
      <div className="media-card-by">Andy William</div>
      <div className="media-card-name">Basic how to ride your skateboard comfortly</div>
      <div className="media-card-view">
        54K views<span className="seperate media-card-seperate"></span>1 week ago
      </div>
    </div>
  );
}
