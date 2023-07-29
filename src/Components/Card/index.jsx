import React from "react";
import { Link } from "react-router-dom";
import { simpleStr } from "../../Utility/simpleStr";
import {
  HorizontalRule,
  WatchLaterOutlined,
  WatchLater,
} from "@mui/icons-material";
import { IconActionBtn } from "../Actions";
import { useData } from "../../Context";

const Card = (props) => {
  const { state, dispatch } = useData();
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

  const isWatch = state.watchList.findIndex((current) => {
    return current._id == props._id;
  });

  const watchItem = state.watchList.find((current) => {
    return current._id == props._id;
  });
  return (
    <Link to={isCategory ? `/category/${simpleStr(category)}` : `/${_id}`}>
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
          {!isCategory && isWatch !== -1 && (
            <button
              className="absolute top-[0] right-[0] bg-stone-200 pl-2 pb-2 rounded-es-xl border-none hover:bg-stone-600 hover:text-stone-50"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch({
                  type: "REMOVE_FROM_WATCH",
                  payload: watchItem.watchId,
                });
              }}
            >
              <WatchLater />
            </button>
          )}
          {!isCategory && isWatch === -1 && (
            <button
              className="absolute top-[0] right-[0] bg-stone-200 pl-2 pb-2 rounded-es-xl border-none hover:bg-stone-600 hover:text-stone-50"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch({
                  type: "ADD_TO_WATCH",
                  payload: props,
                });
              }}
            >
              <WatchLaterOutlined />
            </button>
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
