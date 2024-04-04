import { useState, useEffect } from "react";

import css from "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notifications/Notifications";

function App() {
	const feedbackValues = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	const [values, setValues] = useState(() => {
		const savedValues = window.localStorage.getItem("saved-values");
		return savedValues !== null ? JSON.parse(savedValues) : feedbackValues;
	});



	const updateFeedback = (feedbackType) => {
		setValues((prevState) => ({
			...prevState,
			[feedbackType]: prevState[feedbackType] + 1,
		}));
	};

	const resetFeedback = () => {
		setValues(feedbackValues);
	};

	const totalFeedback = values.good + values.neutral + values.bad;
	const positivFeedback = Math.round(((values.good + values.neutral) / totalFeedback) * 100);

	useEffect(() => {
		window.localStorage.setItem("saved-values", JSON.stringify(values));
	}, [values]);

	return (
		<div className={css.container}>
			<div className={css.border}>
				<Description />
				<Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
				{totalFeedback ? <Feedback values={values} totalFeedback={totalFeedback} positivFeedback={positivFeedback} /> : <Notification />}
			</div>
		</div>
	);
}

export default App;
