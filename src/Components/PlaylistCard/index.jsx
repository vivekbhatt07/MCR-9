import React from "react";
import { Link } from "react-router-dom";
import { simpleStr } from "../../Utility/simpleStr";
import { Close } from "@mui/icons-material";
import { useData } from "../../Context";

const PlaylistCard = (props) => {
  const { state, dispatch } = useData();
  const { _id, thumbnail, title, subTitle } = props;
  return (
    <Link>
      <div className="flex flex-col min-w-[300px] max-w-[300px] border border-stone-400 rounded-lg items-stretch overflow-hidden">
        <div className="h-[200px] relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />

          <button
            className="absolute top-[0] right-[0] bg-stone-200 pl-2 pb-2 rounded-es-xl border-none hover:bg-stone-600 hover:text-stone-50"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch({ type: "REMOVE_PLAYLIST", payload: _id });
            }}
          >
            <Close />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-2">
          <h3 className="text-sm">{title}</h3>
          <div className="flex gap-2 text-xs items-center text-stone-500">
            {subTitle}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaylistCard;
