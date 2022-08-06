import './style.scss';

export default function MediaCard({ title, url, image, createdAt }): JSX.Element {
  return (
    <div className="media-card">
      {/* <div className="media-card-time">8 min</div> */}
      <div className="media-card-wrapper">
        {/* <img alt="" src={image} /> */}
        {/* <img alt="" src={image} /> */}
        <div
          className="image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        {/* <div className="author-img__wrapper media-card-author">
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
        </div> */}
      </div>
      {/* <div className="media-card-by">Andy William</div> */}
      <div className="media-card-name">{title}</div>
      <div className="media-card-view">
        {new Date(createdAt).toLocaleDateString()}
        {/* <span className="seperate media-card-seperate"></span>1 week ago */}
      </div>
    </div>
  );
}
