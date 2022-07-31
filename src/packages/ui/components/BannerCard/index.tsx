import './style.scss';

export default function BannerCard(props): JSX.Element {
  return (
    <div
      className="banner-card anim"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      {/* style="--delay: .1s" */}
      <div className="banner-card__title">{props.title}</div>
      <div className="banner-card-footer">
        <div className="banner-card__author">
          <div className="author-img__wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-check"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <img
              alt=""
              className="author-img"
              src="https://pbs.twimg.com/profile_images/1213261072192262144/lZJo-PGg_400x400.jpg"
            />
          </div>
          <div className="author-detail">
            <div className="author-name">IvanVulovic</div>
            <div className="author-info">{/* 53K views <span className="seperate"></span> */}2 weeks ago</div>
          </div>
        </div>
        <div className="banner-card__time">7 min</div>
      </div>
    </div>
  );
}
