import { Button, TrashIcon } from '@reactoso-ui';
import './style.scss';

export default function WishlistItem({ _id, title, url, image, createdAt, onRemove }): JSX.Element {
  return (
    <div className="media-card">
      <div className="media-card-wrapper">
        <div
          className="image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
      <div className="media-card-name">{title}</div>
      <div className="media-card-view">
        {new Date(createdAt).toLocaleDateString()}
        <Button onClick={() => onRemove(_id)}>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
}
