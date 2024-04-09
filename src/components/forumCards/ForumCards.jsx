// import Button from "../UI/button/Button";
import scss from "./ForumCards.module.scss";

const ForumCards = () => {
	return (
		<div className={scss.ForumCards}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.contentCards}>
						<div className={scss.contentCard}>
							<div className={scss.contentGap}>
								<h1>Card</h1>
								<hr />
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
								qui voluptates consequuntur dolorum quos magni possimus
								obcaecati maiores accusantium excepturi cum laborum natus
								recusandae eos libero illum corrupti distinctio odit. Officia
								reprehenderit quis harum quibusdam dignissimos, voluptates
								laboriosam possimus. Eligendi officiis sapiente corporis dicta,
								id architecto excepturi sunt perspiciatis ipsa, animi molestiae
								neque magnam esse vel delectus sed voluptates quos. Molestias
								eligendi, nesciunt ullam quisquam quasi cumque tempora quis non
								iure, illum et quae dolorem sit debitis, molestiae nulla
								delectus corporis deleniti ab id! Quo sequi maiores nesciunt
								officiis quas, alias dolor, modi hic eaque dolores corrupti
								dolorum, id eos.
								{/* <Button>NEXT</Button> */}
								<div className={scss.contentButton}>
									<button>NEXT</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForumCards;
