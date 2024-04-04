import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
	return (
		<div className={css.listcontainer}>
			<ul className={css.list}>
				<li className={css.listitem}>
					<button className={css.button} type="button" onClick={() => updateFeedback("good")}>
						Good
					</button>
				</li>
				<li className={css.listitem}>
					<button className={css.button} type="button" onClick={() => updateFeedback("neutral")}>
						Neutral
					</button>
				</li>
				<li className={css.listitem}>
					<button className={css.button} type="button" onClick={() => updateFeedback("bad")}>
						Bad
					</button>
				</li>
				{totalFeedback ? (
					<li className={css.listitem}>
						<button className={css.button} type="button" onClick={resetFeedback}>
							Reset
						</button>
					</li>
				) : null}
			</ul>
		</div>
	);
};

export default Options;