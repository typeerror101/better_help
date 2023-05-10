import React, {useState} from 'react'
import "../styles/Dtest.css"
import { Button } from '@mui/material';


export default function DepressionTest() {

 const questions = [
		{
			questionText: '1. Little interest or pleasure in doing things',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Several Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
		{
			questionText: '2. Feeling down, depressed, or hopeless?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Several Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
		{
			questionText: '3. Trouble falling or staying asleep, or sleeping too much?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Several Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
		{
			questionText: '4. Feeling tired or having little energy?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Several Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '5. Poor appetite or overeating?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Several Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '6. Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Several Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '7. Trouble concentrating on things, such as reading the newspaper or watching television?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Several Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '8. Moving or speaking so slowly that other people could have noticed Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Several Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '9. Thoughts that you would be better off dead, or of hurting yourself?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Several Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '10. If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Several Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [Score, setScore] = useState(0);
    const [QuizEnd, setQuizEnd] = useState(false);


    const handleAnswerButtonClick = (isCorrect) => {
        const nextQuestion = currentQuestion + 1;
        setScore(Score+isCorrect);
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
                            <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>  
                        ))}
					</div>
				</>
			)}
		</div>
	);
}
    