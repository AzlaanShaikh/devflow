"use client";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "What is the best way to learn React?" },
  { _id: "2", title: "How do I optimize my website for SEO?" },
  { _id: "3", title: "What are the latest trends in web development?" },
  { _id: "4", title: "How can I improve my coding skills?" },
  { _id: "5", title: "What are the best practices for responsive design?" },
];

const popularTags = [
  { _id: "1", name: "React", questions: 120 },
  { _id: "2", name: "JavaScript", questions: 95 },
  { _id: "3", name: "CSS", questions: 80 },
  { _id: "4", name: "HTML", questions: 70 },
  { _id: "5", name: "Node.js", questions: 60 },

];

const RightSideBar = () => {
  return (
    <section className="pt-25 background-light900_dark200 sticky h-screen right-0 top-0 flex w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>
        <div className=" mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }, index) => {
            // Determine icon color class
            const iconColorClass =
              index % 2 === 0 ? "text-blue-500" : "text-orange-500";

            return (
              <Link
                href={ROUTES.PROFILE(_id)}
                key={_id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <Image
                  src="/icons/question.svg"
                  alt="question-icon"
                  width={20}
                  height={20}
                  className={`flex flex-start text-blue-300`}
                />
                <p className="body-medium text-dark500_light700">{title}</p>
                <Image
                  src="/icons/chevron-right.svg"
                  alt="chevron-right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
          <div className="mt-7 flex flex-col gap-4 scrollbar-hide overflow-y-auto"> 
            {popularTags.map(({ _id, name, questions }) => (
              <TagCard key={_id} _id={_id} name={name} questions={questions} showCount compact />
            ))}
          </div>
      </div>
    </section>
  );
};

export default RightSideBar;
