import scss from "./NewButton.module.scss";

const NewButton = () => {
	return (
		<div className={scss.NewButton}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.contentButton}>
						<button>BUTTON 1</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewButton;
