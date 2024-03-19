import React, { useState } from "react";

import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaThumbsUp } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const App = () => {
	const [showInfo, setShowInfo] = useState(false);
	const [infoText, setInfoText] = useState("");
	const [infoPosition, setInfoPosition] = useState({ x: 0, y: 0 });

	const handleInfoClick = (text, event) => {
		setInfoText(text);
		setInfoPosition({ x: event.clientX, y: event.clientY });
		setShowInfo(true);
	};
	return (
		<div className="container">
			<div className="cards">
				<div className="card1">
					<h1 className="free-title">Free</h1>
					<ul className="free-list">
						<li>
							<span>
								<IoMdCheckmark className="tick" />
								&nbsp; Item 1
							</span>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" />
								&nbsp; Item 1
							</span>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" />
								&nbsp; Item 1
							</span>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" />
								&nbsp; Item 1
							</span>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" />
								&nbsp; Item 1
							</span>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" />
								&nbsp; Item 1
							</span>
						</li>
						<li>
							<span>
								<RxCross2 className="cross" />
								&nbsp; Item 1
							</span>
						</li>
						<li>
							<span>
								<RxCross2 className="cross" />
								&nbsp; Item 1
							</span>
						</li>
						<li>
							<span>
								<RxCross2 className="cross" />
								&nbsp; Item 1
							</span>
						</li>
						<li>
							<span>
								<RxCross2 className="cross" />
								&nbsp; Item 1
							</span>
						</li>
						<li>
							<span>
								<RxCross2 className="cross" />
								&nbsp; Item 1
							</span>
						</li>
					</ul>
				</div>
				<div className="card2">
					<div className="title-holder">
						<h1 className="card-title">Premium</h1>
					</div>
					<ul className="info-list">
						<li>
							<span>
								<IoMdCheckmark className="tick" />
								&nbsp; loremkjbfkbd
							</span>
							<IoInformationCircleOutline
								className="info"
								onClick={(e) => handleInfoClick("Info for Item 1", e)}
							/>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" /> &nbsp; Item 1
							</span>
							<IoInformationCircleOutline
								className="info"
								onClick={(e) => handleInfoClick("Info for Item 1", e)}
							/>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" /> &nbsp; Item 1
							</span>
							<IoInformationCircleOutline
								className="info"
								onClick={(e) => handleInfoClick("Info for Item 1", e)}
							/>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" /> &nbsp; Item 1
							</span>
							<IoInformationCircleOutline
								className="info"
								onClick={(e) => handleInfoClick("Info for Item 1", e)}
							/>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" /> &nbsp; Item 1
							</span>
							<IoInformationCircleOutline
								className="info"
								onClick={(e) => handleInfoClick("Info for Item 1", e)}
							/>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" /> &nbsp; Item 1
							</span>
							<IoInformationCircleOutline
								className="info"
								onClick={(e) => handleInfoClick("Info for Item 1", e)}
							/>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" /> &nbsp; Item 1
							</span>
							<IoInformationCircleOutline
								className="info"
								onClick={(e) => handleInfoClick("Info for Item 1", e)}
							/>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" /> &nbsp; Item 1
							</span>
							<IoInformationCircleOutline
								className="info"
								onClick={(e) => handleInfoClick("Info for Item 1", e)}
							/>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" /> &nbsp; Item 1
							</span>
							<IoInformationCircleOutline
								className="info"
								onClick={(e) => handleInfoClick("Info for Item 1", e)}
							/>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" /> &nbsp; Item 1
							</span>
							<IoInformationCircleOutline
								className="info"
								onClick={(e) => handleInfoClick("Info for Item 1", e)}
							/>
						</li>
						<li>
							<span>
								<IoMdCheckmark className="tick" /> &nbsp; Item 1
							</span>
							<IoInformationCircleOutline
								className="info"
								onClick={(e) => handleInfoClick("Info for Item 1", e)}
							/>
						</li>
					</ul>
				</div>
			</div>
			<div className="right-card">
				<h1 className="plan-title">Select Your Plan</h1>
				<div className="plans">
					<div className="plan">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A!</p>
						<button className="select">Select</button>
					</div>
					<div className="plan">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et!</p>
						<button className="select">Select</button>
					</div>
					<div className="plan">
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla.
						</p>
						<button className="select">Select</button>
					</div>
					<hr />
					<div className="text-plan">
						<span className="icon-holder">
							<FaThumbsUp className="icon-thumbs" />
							<h3>Money Back Guaranty</h3>
						</span>

						<p>100% money back guarenty</p>
					</div>
					<div className="text-plan">
						<span className="icon-holder">
							<FaThumbsUp className="icon-thumbs" />
							<h3>Money Back Guaranty</h3>
						</span>

						<p>100% money back guarenty</p>
					</div>
				</div>
			</div>
			{showInfo && (
				<div
					className="info-box"
					style={{
						position: "absolute",
						top: infoPosition.y,
						left: infoPosition.x,
					}}
				>
					<p>{infoText}</p>
					<button className="close" onClick={() => setShowInfo(false)}>
						Close
					</button>
				</div>
			)}
		</div>
	);
};

export default App;
