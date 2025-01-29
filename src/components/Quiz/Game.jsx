import PropTypes from 'prop-types';

export const Game = ({ questions, step, onClickVariant }) => {
	const percentage = Math.round((step / questions.length) * 100);

	return (
		<>
			<div className="progress">
				<div
					style={{ width: `${percentage}%` }}
					className="progress__inner"
				></div>
			</div>
			<h2>{questions[step].title}</h2>
			<ul className="list-reset">
				{questions[step].variants.map((item, id) => (
					<li key={id} onClick={() => onClickVariant(id)}>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

Game.propTypes = {
	questions: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			variants: PropTypes.arrayOf(PropTypes.string).isRequired,
		})
	).isRequired,
	step: PropTypes.number.isRequired,
	onClickVariant: PropTypes.func.isRequired
}
