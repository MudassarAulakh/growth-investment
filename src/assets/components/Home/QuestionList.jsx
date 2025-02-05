import React, { useState } from "react";
import { questionArray } from "./Question&AnswerArray";
import QuestionAnswer from "./QuestionAnswer";
import { FaArrowRight } from "react-icons/fa6";

const QuestionList = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="flex w-[97%] px-10 py-16 mx-auto rounded-2xl bg-[#F6F6F9] justify-between items-center">
      <div className="w-[60%] flex flex-col gap-6 px-10">
        <h1 className="text-6xl  font-semibold">
          Frequently asked <br /> questions
        </h1>
        <h3 className="w-[20%] flex justify-between text-xl items-center cursor-pointer hover:underline">
          Learn more
          <span className="p-2 rounded-full border">
            <FaArrowRight />
          </span>
        </h3>
      </div>
      <div className="w-[40%]">
        {questionArray.map((item, index) => (
          <QuestionAnswer
            key={index}
            item={item}
            index={index}
            isOpen={openIndexes.includes(index)}
            toggleAnswer={toggleAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
