import React, {useState} from 'react'
import "../styles/Dtest.css"
import { Button } from '@mui/material';


export default function DepressionTest() {

 const questions = [
		{
			questionText: '1. Little interest or pleasure in doing things',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
		{
			questionText: '2. Feeling down, depressed, or hopeless?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
		{
			questionText: '3. Trouble falling or staying asleep, or sleeping too much?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
		{
			questionText: '4. Feeling tired or having little energy?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '5. Poor appetite or overeating?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '6. Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '7. Trouble concentrating on things, such as reading the newspaper or watching television?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '8. Moving or speaking so slowly that other people could have noticed Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 1 },
				{ answerText: 'More Than Half The Days', isCorrect: 2 },
				{ answerText: 'Nearly Every Day', isCorrect: 3 },
			],
		},
        {
			questionText: '9. Thoughts that you would be better off dead, or of hurting yourself?',
			answerOptions: [
				{ answerText: 'Not At All', isCorrect: 0 },
				{ answerText: 'Some Days', isCorrect: 3 },
				{ answerText: 'More Than Half The Days', isCorrect: 4 },
				{ answerText: 'Nearly Every Day', isCorrect: 5 },
			],
		},
        {
			questionText: '10. If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?',
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
	const [condition, SetCondition] = useState("Minimal Depression");
	const [Desc, SetDesc] = useState("");



    const handleAnswerButtonClick = (isCorrect) => {
        const nextQuestion = currentQuestion + 1;
        setScore(Score+isCorrect);
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            console.log(Score);
            setQuizEnd(true);

			if(Score < 4){
				SetCondition("Minimal Anxiety");
				SetDesc("Your results indicate that you have none, or very few signs of anxiety. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(Score >=5 && Score <=9){
				SetCondition("Mild Anxiety");
				SetDesc("Your results indicate that you may be experiencing some signs of mild anxiety. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(Score >=10 && Score <=14){
				SetCondition("Moderate Anxiety");
				SetDesc("Your results indicate that you may be experiencing some signs of moderate anxiety. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(Score >=15){
				SetCondition("Severe Anxiety");
				SetDesc("Your results indicate that you may be experiencing signs of moderately severe depression. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
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
    
