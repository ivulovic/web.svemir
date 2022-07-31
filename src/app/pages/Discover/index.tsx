import PageHeader from '@components/PageHeader';
import PageSection from '@components/PageSection';
import './style.scss';

export default function Discover(): JSX.Element {
  return (
    <div className="discover-page">
      <div className="main-container">
        {/* show */}
        <PageHeader>
          {/* style="--delay: 0s" */}
          Discover
        </PageHeader>
        <div className="main-blogs">
          <div className="main-blog anim">
            {/* style="--delay: .1s" */}
            <div className="main-blog__title">How to do Basic Jumping and how to landing safely</div>
            <div className="main-blog__author">
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
                  src="https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                />
              </div>
              <div className="author-detail">
                <div className="author-name">Thomas Hope</div>
                <div className="author-info">
                  53K views <span className="seperate"></span>2 weeks ago
                </div>
              </div>
            </div>
            <div className="main-blog__time">7 min</div>
          </div>
          <div className="main-blog anim">
            {/* style="--delay: .2s" */}
            <div className="main-blog__title">Skateboard Tips You need to know</div>
            <div className="main-blog__author tips">
              <div className="main-blog__time">7 min</div>
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
                  className="author-img"
                  src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <div className="author-detail">
                <div className="author-name">Tony Andrew</div>
                <div className="author-info">
                  53K views <span></span>2 weeks ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <PageSection>
          {/* style="--delay: .3s" */}
          Most Watched
        </PageSection>
        <div className="videos">
          <div className="video anim">
            {/* style="--delay: .4s" */}
            <div className="video-time">8 min</div>
            <div className="video-wrapper">
              <video muted="">
                <source
                  src="https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761"
                  type="video/mp4"
                />
              </video>
              <div className="author-img__wrapper video-author">
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
                  className="author-img"
                  src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
              </div>
            </div>
            <div className="video-by">Andy William</div>
            <div className="video-name">Basic how to ride your skateboard comfortly</div>
            <div className="video-view">
              54K views<span className="seperate video-seperate"></span>1 week ago
            </div>
          </div>
          <div className="video anim">
            {/* style="--delay: .5s" */}
            <div className="video-time">5 min</div>
            <div className="video-wrapper">
              <video muted="">
                <source
                  src="https://player.vimeo.com/external/449972745.sd.mp4?s=9943177fe8a6147b7bc4598259401f06ec57878a&profile_id=139&oauth2_token_id=57447761"
                  type="video/mp4"
                />
              </video>
              <div className="author-img__wrapper video-author">
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
                  className="author-img"
                  src="https://images.pexels.com/photos/3370021/pexels-photo-3370021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
              </div>
            </div>
            <div className="video-by offline">Gerard Bind</div>
            <div className="video-name">Prepare for your first skateboard jump</div>
            <div className="video-view">
              42K views<span className="seperate video-seperate"></span>1 week ago
            </div>
          </div>
          <div className="video anim">
            {/* style="--delay: .6s" */}
            <div className="video-time">7 min</div>
            <div className="video-wrapper">
              <video muted="">
                <source
                  src="https://player.vimeo.com/external/436553499.sd.mp4?s=0e44527f269278743db448761e35c5e39cfaa52c&profile_id=139&oauth2_token_id=57447761"
                  type="video/mp4"
                />
              </video>
              <div className="author-img__wrapper video-author">
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
                  className="author-img"
                  src="https://images.pexels.com/photos/1870163/pexels-photo-1870163.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
              </div>
            </div>
            <div className="video-by offline">John Wise</div>
            <div className="video-name">Basic equipment to play skateboard safely</div>
            <div className="video-view">
              64K views<span className="seperate video-seperate"></span>2 week ago
            </div>
          </div>
          <div className="video anim">
            {/* style="--delay: .7s" */}
            <div className="video-time">6 min</div>
            <div className="video-wrapper">
              <video muted="">
                <source
                  src="https://player.vimeo.com/external/361861493.sd.mp4?s=19d8275ca755d653042a87ef28b2f0b2eabf57d0&profile_id=139&oauth2_token_id=57447761"
                  type="video/mp4"
                />
              </video>
              <div className="author-img__wrapper video-author">
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
                  className="author-img"
                  src="https://images.pexels.com/photos/2889942/pexels-photo-2889942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
              </div>
            </div>
            <div className="video-by">Budi Hakim</div>
            <div className="video-name">Tips to playing skateboard on the ramp</div>
            <div className="video-view">
              50K views<span className="seperate video-seperate"></span>1 week ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
