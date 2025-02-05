import React from "react";

const QuestionAnswer = ({ item, index, isOpen, toggleAnswer }) => {
  return (
    <div className="flex flex-col transition duration-300 border-gray-300 p-4 border-b">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">{item.question}</p>
        <button onClick={() => toggleAnswer(index)} className="mr-4 focus:outline-none">
          <img
            src={isOpen ? "/home/2.jpg" : "/home/12.jpg"}
            alt={isOpen ? "Minus" : "Plus"}
            className="w-6 h-6"
          />
        </button>
      </div>
      {isOpen && <div className="mt-2 text-gray-700">{item.answer}</div>}
    </div>
  );
};

export default QuestionAnswer;
