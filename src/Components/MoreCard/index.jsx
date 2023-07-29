import { Link } from "react-router-dom";

const MoreCard = (props) => {
  const {
    _id,
    thumbnail,
    src,
    category,
    isCategory,
    title,
    views,
    chips,
    creator,
  } = props;
  return (
    <Link to={`/${_id}`}>
      <div className="flex gap-2">
        <div className="flex basis-1/2">
          <img src={thumbnail} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2 basis-1/2">
          <h4 className="text-sm text-stone-800">{title}</h4>
          <span className="text-xs text-stone-600">{creator}</span>
        </div>
      </div>
    </Link>
  );
};

export default MoreCard;
