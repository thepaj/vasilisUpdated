import React from 'react';
import Chart from './Chart';
import Avatar from '../images/vasilis.jpg';

class About extends React.Component{
    render() {
        return(
            <div>
                <div className='page-title'>
                    A little bit about me
                </div>
                <div className="about-container">
                    <div className="about-column-container">
                        <div className='about-column-content'>
                            <div>
                                <img src={Avatar} alt="avatar" className="avatar"/>
                            </div>
                            <div className='about-text'>
                                <p>
                                Hi, my name is Vasilis and I am a software engineer based in Berlin. For the past 3 years I have been working for the automotive industry, working 
                                mostly with Modern C++ and Kotlin for Android. My scrum team is experimenting with different development processes like TTD, Mob and pair-programming.
                                We have been working on a large codebase but also in a greenfield project. </p>
                                <br />
                                <p>
                                In my free time I am exploring different technologies, currently my main interest lies in game development and automation using Python.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="about-column-container">
                        <div className='about-column-content'>
                            <h2 className='secondaty-title'>My skills</h2>
                            <div className="chart-container">
                                <Chart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;