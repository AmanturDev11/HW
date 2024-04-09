// import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import ForumCards from "../forumCards/ForumCards";
import { ForumText } from "../forumText/ForumText";
import NewButton from "../newButton/NewButton";
import scss from "./NewForum.module.scss";

const NewForum = () => {
	return (
		<>
			<div className={scss.NewForum}>
				<div className="container">
					<ForumCards />
					<ForumText />
					<NewButton />
					<hr />
					<Input />
					{/* <Button /> */}
				</div>
			</div>
		</>
	);
};

export default NewForum;
