import React, { useEffect } from "react";
import { BsClock } from "react-icons/bs";
import { newsExample } from "../../data";
import { API_URL } from "../../api";
import { useQuery } from "react-query";

const News = () => {
  const newList = [...newsExample];
  const {data} = useQuery("repoData", () =>
    fetch(`${API_URL}/api/news`).then((res) => res.json()).then((data) => data)
  );

  const formatCreateWhen = (date) => {
    const currentDate = new Date(date);
    return  [
        currentDate.getDate(),
        currentDate.getMonth() + 1,
        currentDate.getFullYear(),
      ].join("/") +
      " " +
      [
        currentDate.getHours(),
        currentDate.getMinutes(),
        currentDate.getSeconds(),
      ].join(":");
  }

  return (
    <div className="flex container lg:max-w-7xl mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col px-4 lg:px-0 gap-1 hover:scale-90 lg:hover:scale-110 cursor-pointer"
          >
            <div>
              <img
                src={item.poster}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold">{item.title}</span>
            <div className="my-1 flex flex-row gap-2 items-center">
              <BsClock />
              <span>{formatCreateWhen(item.createdWhen)}</span>
            </div>
            <p className="line-clamp-3">{item.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
