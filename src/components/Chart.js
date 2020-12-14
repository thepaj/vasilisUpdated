import React from 'react';

class Chart extends React.Component {
	render() {
		return(
			<div>
				<div className="charts">
					<span>Modern C++</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="70%" style={{width: "70%"}}></div>
					<span>Gtest</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="60%" style={{width: "60%"}}></div>
					<span>Android</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="40%"style={{width: "40%"}}></div>
					<span>Python</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="40%"style={{width: "40%"}}></div>
					<span>Kotlin</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="30%"style={{width: "30%"}}></div>
					<span>Java</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="30%"style={{width: "30%"}}></div>
					<span>TDD</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="50%"style={{width: "50%"}}></div>
					<span>Git</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="50%"style={{width: "50%"}}></div>
					<span>Scrum</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="60%"style={{width: "60%"}}></div>
					<span>Unity</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="20%"style={{width: "20%"}}></div>
				</div>
			</div>
		)
	}
}

export default Chart;