import Button from "../button/Button";
import scss from "./Input.module.scss";

const Input = () => {
	return (
		<div className={scss.Input}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.cards}>
						<div className={scss.card2}>
							<p>Enter your</p>
							<label>name:</label>
							<p>Enter your</p>
							<label>email:</label>
							<Button />
						</div>
						<div className={scss.card}>
							<input type="text" />
							<input type="text" />
						</div>
					</div>
					<div className={scss.contentTop}></div>
				</div>
			</div>
		</div>
	);
};

export default Input;
