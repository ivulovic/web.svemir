import './style.scss';

export default function BackgroundSpaceman({ children }): JSX.Element {
  return (
    <div className="camera">
      <div className="earth"></div>
      <ul id="stars">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="children">{children}</div>
      <div className="astronaut">
        <div id="head">
          <div className="helmet"></div>
          <div className="helmet-glass"></div>
          <div className="helmet-reflection"></div>
        </div>
        <div className="backpack"></div>
        <div className="trunk"></div>
        <div className="belt"></div>
        <div className="left-arm">
          <div className="left-elbow">
            <div className="left-forearm">
              <div className="left-hand"></div>
            </div>
          </div>
        </div>
        <div className="right-arm">
          <div className="right-elbow">
            <div className="right-forearm">
              <div className="right-hand"></div>
            </div>
          </div>
        </div>
        <div className="left-leg">
          <div className="left-knee">
            <div className="left-foreleg"></div>
          </div>
        </div>
        <div className="right-leg">
          <div className="right-knee">
            <div className="right-foreleg"></div>
          </div>
        </div>
      </div>
      <div className="asteroid">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
