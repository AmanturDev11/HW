import scss from "./ForumText.module.scss";

export const ForumText = () => {
	return (
		<div className={scss.ForumText}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.contentDiv}>
						<div className={scss.contentCardsdop}>
							<a href="#">Typography</a>
							<h2>Text Align</h2>
							<p>Utilities for controlling the alignment of text</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
