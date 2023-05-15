import React, { useState } from 'react';
import './../styles/Parent.css'

export default function Parent() {
	const questions = [
		{
			questionText: 'Feels sad, unhappy',
			answerOptions: [
				{ answerText: 'Never', dpoint: 0 , apoint:0, cpoint:0 },
				{ answerText: 'Sometimes', dpoint: 1 , apoint:0, cpoint:0},
				{ answerText: 'Often', dpoint: 2 , apoint:0, cpoint:0},
			],
		},
		{
			questionText: 'Feels hopeless',
			answerOptions: [		
				{ answerText: 'Never', dpoint: 0, apoint:0, cpoint:0 },
				{ answerText: 'Sometimes', dpoint: 1 , apoint:0, cpoint:0},
				{ answerText: 'Often', dpoint: 2 , apoint:0, cpoint:0},
			],
		},
		{
			questionText: 'Is down on self',
			answerOptions: [
				{ answerText: 'Never', dpoint: 0 , apoint:0, cpoint:0},
				{ answerText: 'Sometimes', dpoint: 1 , apoint:0, cpoint:0},
				{ answerText: 'Often', dpoint: 2 , apoint:0, cpoint:0},
			],
		},
		{
			questionText: 'Worries a lot',
			answerOptions: [
				{ answerText: 'Never', dpoint: 0 , apoint:0, cpoint:0},
				{ answerText: 'Sometimes', dpoint: 1 , apoint:0, cpoint:0},
				{ answerText: 'Often', dpoint: 2 , apoint:0, cpoint:0},
			],
		},
        {
			questionText: 'Seems to be having less fun',
			answerOptions: [
				{ answerText: 'Never', dpoint: 0 , apoint:0, cpoint:0},
				{ answerText: 'Sometimes', dpoint: 1 , apoint:0, cpoint:0},
				{ answerText: 'Often', dpoint: 2 , apoint:0, cpoint:0},
			],
		},
        {
			questionText: 'Fidgety, unable to sit still',
			answerOptions: [
				{ answerText: 'Never', apoint: 0, dpoint:0 , cpoint:0},
				{ answerText: 'Sometimes', apoint: 1,dpoint : 1 , cpoint:0},
				{ answerText: 'Often', apoint: 2, dpoint:2 ,  cpoint:0},
			],
		},
        {
			questionText: 'Daydreams too much',
			answerOptions: [
				{ answerText: 'Never', apoint: 0 , dpoint:0, cpoint:0},
				{ answerText: 'Sometimes', apoint: 1 , dpoint:0, cpoint:0},
				{ answerText: 'Often', apoint: 2 , dpoint:0, cpoint:0},
			],
		},
        {
			questionText: 'Distracted easily',
			answerOptions: [
				{ answerText: 'Never', apoint: 0 , dpoint:0, cpoint:0},
				{ answerText: 'Sometimes', apoint: 1 , dpoint:0, cpoint:0},
				{ answerText: 'Often', apoint: 2 , dpoint:0, cpoint:0},
			],
		},
        {
			questionText: 'Has trouble concentrating',
			answerOptions: [
				{ answerText: 'Never', apoint: 0 , dpoint:0, cpoint:0},
				{ answerText: 'Sometimes', apoint: 1 , dpoint:0, cpoint:0},
				{ answerText: 'Often', apoint: 2 , dpoint:0, cpoint:0},
			],
		},
        {
			questionText: 'Acts as if driven by a motor',
			answerOptions: [
				{ answerText: 'Never', cpoint: 0 , dpoint:0, apoint:0},
				{ answerText: 'Sometimes', cpoint: 1, dpoint:0, apoint:0 },
				{ answerText: 'Often', cpoint: 2 , dpoint:0, apoint:0},
			],
		},
        {
			questionText: 'Fights with other children',
			answerOptions: [
				{ answerText: 'Never', cpoint: 0 ,dpoint:0, apoint:0},
				{ answerText: 'Sometimes', cpoint: 1 ,dpoint:0, apoint:0},
				{ answerText: 'Often', cpoint: 2 ,dpoint:0, apoint:0},
			],
		},
        {
			questionText: 'Does not listen to rules',
			answerOptions: [
				{ answerText: 'Never', cpoint: 0 ,dpoint:0, apoint:0},
				{ answerText: 'Sometimes', cpoint: 1 ,dpoint:0, apoint:0},
				{ answerText: 'Often', cpoint: 2 ,dpoint:0, apoint:0},
			],
		},
        {
			questionText: 'Does not understand other people’s feelings',
			answerOptions: [
				{ answerText: 'Never', cpoint: 0 ,dpoint:0, apoint:0},
				{ answerText: 'Sometimes', cpoint: 1 ,dpoint:0, apoint:0},
				{ answerText: 'Often', cpoint: 2 ,dpoint:0, apoint:0},
			],
		},
        {
			questionText: 'Teases others',
			answerOptions: [
				{ answerText: 'Never', cpoint: 0 ,dpoint:0, apoint:0},
				{ answerText: 'Sometimes', cpoint: 1 ,dpoint:0, apoint:0},
				{ answerText: 'Often', cpoint: 2 ,dpoint:0, apoint:0},
			],
		},
        {
			questionText: 'Blames others for his/her troubles',
			answerOptions: [
				{ answerText: 'Never', cpoint: 0 ,dpoint:0, apoint:0},
				{ answerText: 'Sometimes', cpoint: 1 ,dpoint:0, apoint:0},
				{ answerText: 'Often', cpoint: 2,dpoint:0, apoint:0 },
			],
		},
        {
			questionText: 'Refuses to share',
			answerOptions: [
				{ answerText: 'Never', cpoint: 0 ,dpoint:0, apoint:0},
				{ answerText: 'Sometimes', cpoint: 1 ,dpoint:0, apoint:0},
				{ answerText: 'Often', cpoint: 2 ,dpoint:0, apoint:0},
			],
		},
        {
			questionText: 'Takes things that do not belong to him/her',
			answerOptions: [
				{ answerText: 'Never', cpoint: 0 ,dpoint:0, apoint:0},
				{ answerText: 'Sometimes', cpoint: 1 ,dpoint:0, apoint:0},
				{ answerText: 'Often', cpoint: 2 ,dpoint:0, apoint:0},
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [Score, setScore] = useState(0);
    const [AScore, setAScore] = useState(0);
    const [DScore, setDScore] = useState(0);
    const [CScore, setCScore] = useState(0);
    const [QuizEnd, setQuizEnd] = useState(false);
	const [condition,SetCondition] = useState("");
	const [Acondition,SetACondition] = useState("");
	const [Ccondition,SetCCondition] = useState("");
	const [Dcondition,SetDCondition] = useState("");
	const [Desc,SetDesc] = useState("");
	const [DDesc,SetDDesc] = useState("");
	const [CDesc,SetCDesc] = useState("");
	const [ADesc,SetADesc] = useState("");

    const handleAnswerButtonClick = (apoint,dpoint,cpoint) => {
        const nextQuestion = currentQuestion + 1;
        setCScore(CScore+cpoint);
        setDScore(DScore+dpoint);
        setAScore(AScore+apoint);
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
			setScore(CScore+Dscore+AScore)
            console.log(Score);
            setQuizEnd(true);

			//max Score = 36
			if(Score < 5){
				SetCondition("Minimal difficulties in overall psychosocial functioning");
				SetDesc("Your results indicate that you have none, or very few signs of difficulties in overall psychosocial functioning. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(Score >=5 && Score <=9){
				SetCondition("Mild pychosocial functioning difficulties");
				SetDesc("Your results indicate that you may be experiencing signs of pychosoical problems. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(Score >=10 && Score <=14){
				SetCondition("Moderate pychosocial functioning difficulties");
				SetDesc("Your results indicate that you may be experiencing signs of moderate depression. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(Score >=15 && Score <=32){
				SetCondition("Moderately severe pychosocial functioning difficulties");
				SetDesc("Your results indicate that you may be experiencing signs of moderately severe depression. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else{
				SetCondition("Severe pychosocial functioning difficulties");
				SetDesc("Your results indicate that you may be experiencing signs of severe depression. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}
			//max Dscore = 12
			if(DScore < 2){
				SetDCondition("Minimal Depression");
				SetDDesc("Your results indicate that you have none, or very few signs of depression. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(DScore >=2 && DScore <=5){
				SetDCondition("Mild Depression");
				SetDDesc("Your results indicate that you may be experiencing signs of mild depression. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(DScore >=5 && DScore <=8){
				SetDCondition("Moderate Depression");
				SetDDesc("Your results indicate that you may be experiencing signs of moderate depression. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(DScore >=8 && DScore <=10){
				SetDCondition("Moderately severe depression");
				SetDDesc("Your results indicate that you may be experiencing signs of moderately severe depression. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else{
				SetDCondition("Severe Depression");
				SetDDesc("Your results indicate that you may be experiencing signs of severe depression. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}``
			//max cscore 16
			if(CScore < 5){
				SetCCondition("Minimal difficulty with conduct");
				SetCDesc("Your results indicate that you have none, or very few signs of difficulty with conduct. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(CScore >=5 && CScore <=9){
				SetCCondition("Mild difficulty with conduct");
				SetCDesc("Your results indicate that you may be experiencing signs of mild difficulty with conduct. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(CScore >=10 && CScore <=14){
				SetCCondition("Moderate difficulty with conduct");
				SetCDesc("Your results indicate that you may be experiencing signs of moderate difficulty with conduct. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(CScore >=15 && CScore <=32){
				SetCCondition("Moderately severe difficulty with conduct");
				SetCDesc("Your results indicate that you may be experiencing signs of moderately severe difficulty with conduct. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else{
				SetCCondition("Severe difficulty with conduct");
				SetCDesc("Your results indicate that you may be experiencing signs of severe difficulty with conduct. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}
			
			//max AScore = 8
			if(AScore < 2){
				SetACondition("Minimal ");
				SetADesc("Your results indicate that you have none, or very few signs of attention difficulties. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(AScore >=2 && AScore <=3){
				SetACondition("Mild Depression");
				SetADesc("Your results indicate that you may be experiencing signs of mild attention difficulties. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(AScore >=3 && AScore <=4){
				SetACondition("Moderate Depression");
				SetADesc("Your results indicate that you may be experiencing signs of moderate attention difficulties. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else if(AScore >=4 && AScore <=6){
				SetACondition("Moderately severe depression");
				SetADesc("Your results indicate that you may be experiencing signs of moderately severe attention difficulties. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}else{
				SetACondition("Severe Depression");
				SetADesc("Your results indicate that you may be experiencing signs of severe attention difficulties. These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.");
			}
        }
    }

	return (
		<div className='app'>
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
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion +1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions) => (
<<<<<<< Updated upstream
                            <button onClick={() => handleAnswerButtonClick(answerOptions.point)}>{answerOptions.answerText}</button>  
=======
                            <button className='btn' onClick={() => handleAnswerButtonClick(answerOptions.apoint,answerOptions.dpoint,answerOptions.cpoint)}>{answerOptions.answerText}</button>  
>>>>>>> Stashed changes
                        ))}
					</div>
				</>
			)}
		</div>
	);
}