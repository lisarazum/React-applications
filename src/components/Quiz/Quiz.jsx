import { useState } from 'react';
import './quiz.scss';
import {Game} from './Game.jsx'
import {Result} from './Result.jsx'

const questions = [
	{
		title: 'React - это ... ?',
		variants: ['библиотека', 'фреймворк', 'приложение'],
		correct: 0,
	},
	{
		title: 'Компонент - это ... ',
		variants: [
			'приложение',
			'часть приложения или страницы',
			'то, что я не знаю что такое',
		],
		correct: 1,
	},
	{
		title: 'Что такое JSX?',
		variants: [
			'Это простой HTML',
			'Это функция',
			'Это тот же HTML, но с возможностью выполнять JS-код',
		],
		correct: 2,
	},
];

export const Quiz = () => {
	const [step, setStep] = useState(0);
	const [correctAnswer, setCorrectAnswer] = useState(0);

	const onClickVariant = (index) => {
		if (index === questions[step].correct) {
			setCorrectAnswer(correctAnswer + 1);
		}

		if (step <= questions.length) {
			setStep(step + 1);
		}
	};

	return (
		<section className="section">
			<div className="quiz">
				{step !== questions.length ? (
					<Game questions={questions} step={step} onClickVariant={onClickVariant} />
				) : (
					<Result correctAnswer={correctAnswer} questions={questions} />
				)}
			</div>
		</section>
	);
};
