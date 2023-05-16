import React, {useState} from 'react'
import "../styles/Atest.css"
import { Button } from '@mui/material';


export default function AnxietyTest() {

 const questions = [
		{
			questionText: '1. Feeling nervous, anxious, or on edge',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
		{
			questionText: '2. Not being able to stop or control worrying',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
		{
			questionText: '3. Worrying too much about different things',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
		{
			questionText: '4. Trouble relaxing',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '5. Being so restless that it is hard to sit still',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '6. Becoming easily annoyed or irritable',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '7. Feeling afraid, as if something awful might happen',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [Score, setScore] = useState(0);
    const [QuizEnd, setQuizEnd] = useState(false);
	const [condition, SetCondition] = useState("");
	const [Desc, SetDesc] = useState("");


    const handleAnswerButtonClick = (isCorrect) => {
        const nextQuestion = currentQuestion + 1;
        setScore(Score+isCorrect);
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            console.log(Score);
            setQuizEnd(true);

			if(Score < 5){
				SetCondition("Minimal Anxiety");
				SetDesc("Your results indicate that you have none, or very few signs of anxiety. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(Score >=3 && Score <=7){
				SetCondition("Mild anxiety");
				SetDesc("Your results indicate that you may be experiencing signs of mild anxiety. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(Score >=8 && Score <=13){
				SetCondition("Moderate anxiety");
				SetDesc("Your results indicate that you may be experiencing signs of moderate anxiety. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(Score >=14 && Score <=17){
				SetCondition("Moderately severe anxiety");
				SetDesc("Your results indicate that you may be experiencing signs of moderately severe anxiety. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else{
				SetCondition("Severe anxiety");
				SetDesc("Your results indicate that you may be experiencing signs of severe anxiety. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}
			
        }
    }

	return (
		<div>
		
			{ QuizEnd ? (
				<div className="scoreCard">
					<div className='mainResult'>You have {condition}</div>
					<div className='scoreDesc'>{Desc}</div>
					<div className='button-grp'>
				    <div className='score-section'>You scored {Score} out of 32</div>
					<div className='score-section score-button'>Consult your Therapist now!</div>
			        </div>
				</div>
			) : (
				<div className='app'>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion +1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions) => (
                            <button class="test-btn" onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>  
                        ))}
					</div>
				</div>
			)}
		</div>
	);
}
    