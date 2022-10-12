import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Home.css";
import image from "../images/quiz-logo.webp"

const Home = () => {
  const { data } = useLoaderData();

  // const handleQuizDetails = (id) => {
  //   console.log(id);
  // };

  return (
    <div>
      <h2>Test your knowledge by answering 50 of our best online quiz questions and answers.</h2>
      <img src={image} alt="" className='image'/>
<div className="home-container">
      {data.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
    </div>
    
  );
};

export default Home;

// handleQuizDetails={handleQuizDetails}
