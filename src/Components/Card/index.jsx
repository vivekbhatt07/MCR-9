import React from "react";
import { Link } from "react-router-dom";
import { simpleStr } from "../../Utility/simpleStr";
import { HorizontalRule } from "@mui/icons-material";

const Card = (props) => {
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
    <Link to={`/category/${simpleStr(category)}`}>
      <div className="flex flex-col min-w-[300px] max-w-[300px] border border-stone-400 rounded-lg items-stretch overflow-hidden">
        <div className="h-[200px] relative">
          <img
            src={thumbnail}
            alt={category}
            className="w-full h-full object-cover"
          />
          {isCategory && (
            <span className="absolute bg-stone-50 px-2 py-1 top-[8px] left-[8px] rounded-md">
              {category}
            </span>
          )}
        </div>
        {!isCategory && (
          <div className="flex gap-2 py-2 px-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={
                  "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449309/Avatar/AvatarThree_mg1cgs.svg"
                }
                alt="dummy"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm">{title}</h3>
              <div className="flex gap-2 text-xs items-center text-stone-500">
                <span>{views} views</span>
                <span>|</span>
                <span>{creator}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
