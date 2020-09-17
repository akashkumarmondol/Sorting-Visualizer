import React from 'react';
import './SortingVisualizer.css';

const ANIMATION_SPEED_MS=500;
const NUMBER_OF_ARRAY_BARS = 15; 
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';


export default class CountingSort extends React.Component{
    constructor(props){
    super(props);

    this.state = {
        array: [],
    };
}
componentDidMount(){
    this.resetArray();
}
resetArray(){
    const array= [];
    for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
    {
        array.push(randomIntFromInterval(10,500));
    }
    this.setState({array});
}
render(){
    const {array} = this.state;
    return(
        
            <div className="array-container">
                {
                    array.map((value,idx) =>(
                    // console.log(value),
                        //console.log(idx),
                        <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                        }}></div>
                    ))
                    
                }
                <br/>
                <div className="array-container">
                {
                    array.map((value,idx) =>(
                    // console.log(value),
                        //console.log(idx),
                        <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                        }}></div>
                    ))
                    
                }
                </div>
                <div className="btn">
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                </div>
            </div>
        
        

    );
}
}
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
    
}