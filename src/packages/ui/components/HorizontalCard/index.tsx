import './style.scss';

export default function HorizontalCard(): JSX.Element {
  return (
    <div className="horizontal-card">
      <img className="horizontal-card-image" alt="" src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg" />
      <div className="horizontal-card-content">
        <div className="horizontal-card-name">Prepare for your first skateboard jump</div>
        <div className="horizontal-card-author">Jordan Wise</div>
        <div className="horizontal-card-info">
          125.908 views <span className="seperate"></span>2 days ago
        </div>
      </div>
    </div>
  );
}
