import React from 'react';
import './SortingVisualizer.css';
import {getSelectionSortAnimations} from '../SortingAlgorithms/SelectionSort'
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort';
import {getInsertionSortAnimations} from '../SortingAlgorithms/InsertionSort';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort';
import {getHeapSortAnimations} from '../SortingAlgorithms/HeapSort';


const ANIMATION_SPEED_MS=50;
const NUMBER_OF_ARRAY_BARS = 15; 
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component{
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
insertionSort()
{
    const animations = getInsertionSortAnimations(this.state.array);
    for(let i=0;i<animations.length;i++)
    {
        //console.log(animations[i]);
        const arrayBars=document.getElementsByClassName('array-bar');
        if(animations[i][0]=="comp1" || animations[i][0]=="comp2")
        {
            let color=(animations[i][0]=="comp1")?SECONDARY_COLOR:PRIMARY_COLOR;
            let [temp,barOneIndex,barTwoIndex]=animations[i];
            let barOneStyle=arrayBars[barOneIndex].style;
            let barTwoStyle=arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor=color;
                barTwoStyle.backgroundColor=color;
            }, i*ANIMATION_SPEED_MS);
        }
        else if(animations[i][0]==="colorChangedOne" || animations[i][0]==="colorChangedTwo")
        {
            let [temp,barIndex1,barIndex2]=animations[i];
            let colorbar=(animations[i][0]==="colorChangedOne")? SECONDARY_COLOR:PRIMARY_COLOR;
            let barStyle1=arrayBars[barIndex1].style;
            let barStyle2=arrayBars[barIndex2].style;
            setTimeout(()=>{
                barStyle1.backgroundColor = colorbar;
                barStyle2.backgroundColor = colorbar;
            },i*ANIMATION_SPEED_MS);
        }
        else
        {
            let [temp,barIndex,newHeight]=animations[i];
            let barStyle=arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height=`${newHeight}px`;
            }, i*ANIMATION_SPEED_MS);
        }
    }


}
selectionSort(){
    const animations = getSelectionSortAnimations(this.state.array);
    for(let i=0;i<animations.length;i++)
    {
        console.log(animations[i]);
        const arrayBars=document.getElementsByClassName('array-bar');
        if(animations[i][0]==="comp1" || (animations[i][0]==="comp2"))
        { 
            const color=(animations[i][0]==="comp1")? SECONDARY_COLOR:PRIMARY_COLOR;
            const [temp,barOneIndex,barTwoIndex]=animations[i];
            console.log(animations[i]);
            console.log(temp);console.log(barOneIndex);console.log(barTwoIndex);
            const barOneStyle=arrayBars[barOneIndex].style
            const barTwoStyle=arrayBars[barTwoIndex].style;
            setTimeout( ()=> {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i*ANIMATION_SPEED_MS);
        }
        else if(animations[i][0]==="colorChangedOne" || animations[i][0]==="colorChangedTwo")
        {
            const [temp,barIndex1,barIndex2]=animations[i];
            const colorbar=(animations[i][0]==="colorChangedOne")? SECONDARY_COLOR:PRIMARY_COLOR;
            const barStyle1=arrayBars[barIndex1].style;
            const barStyle2=arrayBars[barIndex2].style;
            setTimeout(()=>{
                barStyle1.backgroundColor = colorbar;
                barStyle2.backgroundColor = colorbar;
            },i*ANIMATION_SPEED_MS);
        }
        else
        {
            const [temp,barIndex,newHeight]=animations[i];
            const barStyle=arrayBars[barIndex].style;
            setTimeout(()=>{
                barStyle.height=`${newHeight}px`;
            },i*ANIMATION_SPEED_MS);
        }
    }
}

bubbleSort()
{
    const animations = getBubbleSortAnimations(this.state.array);
    for(let i=0;i<animations.length;i++)
    {
        console.log(animations[i]);
        const arrayBars=document.getElementsByClassName('array-bar');
        if(animations[i][0]=="comp1" || animations[i][0]=="comp2")
        {
            let color=(animations[i][0]=="comp1")?SECONDARY_COLOR:PRIMARY_COLOR;
            let [temp,barOneIndex,barTwoIndex]=animations[i];
            let barOneStyle=arrayBars[barOneIndex].style;
            let barTwoStyle=arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor=color;
                barTwoStyle.backgroundColor=color;
            }, i*ANIMATION_SPEED_MS);
        }
        else if(animations[i][0]==="colorChangedOne" || animations[i][0]==="colorChangedTwo")
        {
            let [temp,barIndex1,barIndex2]=animations[i];
            let colorbar=(animations[i][0]==="colorChangedOne")? SECONDARY_COLOR:PRIMARY_COLOR;
            let barStyle1=arrayBars[barIndex1].style;
            let barStyle2=arrayBars[barIndex2].style;
            setTimeout(()=>{
                barStyle1.backgroundColor = colorbar;
                barStyle2.backgroundColor = colorbar;
            },i*ANIMATION_SPEED_MS);
        }
        else
        {
            let [temp,barIndex,newHeight]=animations[i];
            let barStyle=arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height=`${newHeight}px`;
            }, i*ANIMATION_SPEED_MS);
        }
    }
}
mergeSort()
{ 
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (i % 3 !== 2) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }

}
heapSort()
{
    const animations = getHeapSortAnimations(this.state.array);
    for(let i=0;i<animations.length;i++)
    {
        //console.log(animations[i]);
        const arrayBars=document.getElementsByClassName('array-bar');
        if(animations[i][0]==="comp1" || (animations[i][0]==="comp2"))
        { 
            const color=(animations[i][0]==="comp1")? SECONDARY_COLOR:PRIMARY_COLOR;
            const [temp,barOneIndex,barTwoIndex]=animations[i];
            console.log(animations[i]);
            const barOneStyle=arrayBars[barOneIndex].style
            const barTwoStyle=arrayBars[barTwoIndex].style;
            setTimeout( ()=> {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i*ANIMATION_SPEED_MS);
        }
        else if(animations[i][0]==="colorChangedOne" || animations[i][0]==="colorChangedTwo")
        {
            const [temp,barIndex1,barIndex2]=animations[i];
            const colorbar=(animations[i][0]==="colorChangedOne")? SECONDARY_COLOR:PRIMARY_COLOR;
            const barStyle1=arrayBars[barIndex1].style;
            const barStyle2=arrayBars[barIndex2].style;
            setTimeout(()=>{
                barStyle1.backgroundColor = colorbar;
                barStyle2.backgroundColor = colorbar;
            },i*ANIMATION_SPEED_MS);
        }
        else
        {
            const [temp,barIndex,newHeight]=animations[i];
            const barStyle=arrayBars[barIndex].style;
            setTimeout(()=>{
                barStyle.height=`${newHeight}px`;
            },i*ANIMATION_SPEED_MS);
        }
    }

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
            <div className="btn">
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() =>this.selectionSort()}>Selection Sort</button>
                <button onClick={() =>this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() =>this.insertionSort()}>Insertion Sort</button>
                <button onClick={() =>this.mergeSort()}>Merge Sort</button>
                <button onClick={() =>this.heapSort()}>Heap Sort</button>
            </div>
        </div>
        

    );
}
}
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
    
}