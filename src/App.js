import React from "react";

const App = () => {
	return (
		<div className="container">
			<div className="cards">
				<div className="card1">
					<h1 className="free-title">Free</h1>
					<p>Card 1 content</p>
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
						<li>Item 5</li>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
						<li>Item 5</li>
					</ul>
				</div>
				<div className="card2">
					<div className="title-holder">
						<h1 className="card-title">Premium</h1>
					</div>

					<p>Card 2 content</p>
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
						<li>Item 5</li>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
						<li>Item 5</li>
					</ul>
				</div>
			</div>
			<div className="right-card">
				<h1 className="plan-title">Select Your Plan</h1>
				<div className="plans">
					<div className="plan">
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
							quis.
						</p>
					</div>
					<div className="plan">
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
							quis.
						</p>
					</div>
					<div className="plan">
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
							quis.
						</p>
					</div>
					<hr />
					<div className="text-plan">
						<h3>Money Back Guaranty</h3>
						<p>100% money back guarenty</p>
					</div>
          <div className="text-plan">
						<h3>Money Back Guaranty</h3>
						<p>100% money back guarenty</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
