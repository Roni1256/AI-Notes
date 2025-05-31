import { Braces, Brain, Eye, PiIcon, Star } from "lucide-react";
import React from "react";

const SubjectCard = ({
  category = "",
  subject = "",
  icon: Icon = Brain,
  color = "bg-purple-300",
  type = "",
  view = () => {},
  isPremium = true,
}) => {
  return (
    <div className="max-w-[300px] rounded-lg overflow-hidden border border-gray-400 h-fit">
      <div className={`w-full flex items-center justify-center p-2 ${color}`}>
        <div className="bg-white p-2 rounded-lg">
          <Icon size={30} />

        </div>
      </div>
      <h3 className="text-md text-neutral-600 px-5 mt-5 w-full flex items-center justify-between">
        {category}
        {isPremium && (
          <span className="text-amber-300 ">
            <Star />
          </span>
        )}
      </h3>
      <h1 className="text-xl font-semibold text-neutral-800 mt-2 px-5">
        {subject}
      </h1>
      <div className="flex w-full items-center justify-between">
        <div className="text-xs bg-gray-200 rounded-full  w-fit  my-5 mx-5 p-2">
          {type}
        </div>
        <button
          className={`p-5 hover:underline hover:text-neutral-800 text-neutral-600 cursor-pointer`}
          onClick={view}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;