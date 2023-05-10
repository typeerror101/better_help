import React, { useState } from 'react';
import './../styles/Parent.css'

export default function Parent() {
	const questions = [
		{
			questionText: 'Feels sad, unhappy',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
		{
			questionText: 'Feels hopeless',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
		{
			questionText: 'Is down on self',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
		{
			questionText: 'Worries a lot',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Seems to be having less fun',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Fidgety, unable to sit still',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Daydreams too much',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Distracted easily',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Has trouble concentrating',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Acts as if driven by a motor',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Fights with other children',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Does not listen to rules',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Does not understand other people’s feelings',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Teases others',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Blames others for his/her troubles',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Refuses to share',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
        {
			questionText: 'Takes things that do not belong to him/her',
			answerOptions: [
				{ answerText: 'Never', point: 0 },
				{ answerText: 'Sometimes', point: 1 },
				{ answerText: 'Often', point: 2 },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [Score, setScore] = useState(0);
    const [QuizEnd, setQuizEnd] = useState(false);


    const handleAnswerButtonClick = (point) => {
        const nextQuestion = currentQuestion + 1;
        setScore(Score+point);
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            console.log(Score);
            setQuizEnd(true);
        }
    }

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{ QuizEnd ? (
				<div className='score-section'>You scored {Score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion +1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions) => (
                            <button onClick={() => handleAnswerButtonClick(answerOptions.point)}>{answerOptions.answerText}</button>  
                        ))}
					</div>
				</>
			)}
		</div>
	);
}