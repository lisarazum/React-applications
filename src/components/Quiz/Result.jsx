import PropTypes from 'prop-types';

export const  Result = ({ correctAnswer, questions }) => {
	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
			<h2>
				Вы отгадали {correctAnswer} ответа из {questions.length}
			</h2>
			<a href="/quiz">Попробовать снова</a>
		</div>
	);
}

Result.propTypes = {
	correctAnswer: PropTypes.number.isRequired,
	questions: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			variants: PropTypes.arrayOf(PropTypes.string).isRequired,
			correct: PropTypes.number.isRequired,
		})
	).isRequired,
};
