import React from 'react';
import './SortingVisualizer.css';
import {getSelectionSortAnimations} from '../SortingAlgorithms/SelectionSort'
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort';
import {getInsertionSortAnimations} from '../SortingAlgorithms/InsertionSort';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort';
import {getHeapSortAnimations} from '../SortingAlgorithms/HeapSort';
import {getQuickSortAnimations} from '../SortingAlgorithms/QuickSort';


const ANIMATION_SPEED_MS=50;
const NUMBER_OF_ARRAY_BARS = 15; 
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const THIRD_COLOR = 'yellow';
const FORTH_COLOR = 'pink'
const barwidth= 30;

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
            let colorbar=(animations[i][0]==="colorChangedOne")? THIRD_COLOR:PRIMARY_COLOR;
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
            let barStyle=arrayBars[barIndex];
            setTimeout(() => {
                barStyle.style.height=`${newHeight}px`;
                barStyle.innerHTML = `${newHeight}`;
            }, i*ANIMATION_SPEED_MS);
        }
    }


}
selectionSort(){
    const [animations,array] = getSelectionSortAnimations(this.state.array);
    const N=animations.length+array.length;

    for(let i=0;i<N;i++)
    {
        const arrayBars=document.getElementsByClassName('array-bar');
        if(i>=animations.length)
        {
            const barStyleLast=arrayBars[i-animations.length].style;
            setTimeout(() => {
                barStyleLast.backgroundColor = PRIMARY_COLOR;
            }, i*ANIMATION_SPEED_MS);
            continue;
        }
        if(animations[i][0]==="comp1" || (animations[i][0]==="comp2"))
        { 
            const color=(animations[i][0]==="comp1")? SECONDARY_COLOR:PRIMARY_COLOR;
            const [temp,barOneIndex,barTwoIndex]=animations[i];
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
            const colorbar=(animations[i][0]==="colorChangedOne")? THIRD_COLOR:PRIMARY_COLOR;
            const barStyle1=arrayBars[barIndex1].style;
            const barStyle2=arrayBars[barIndex2].style;
            setTimeout(()=>{
                barStyle1.backgroundColor = colorbar;
                barStyle2.backgroundColor = colorbar;
            },i*ANIMATION_SPEED_MS);
        }
        else if(animations[i][0]==="Fixed")
        {
            const [temp,barIndex1,barIndex2]=animations[i];
            const barOneStyle=arrayBars[barIndex1].style;
            setTimeout(() => {
                barOneStyle.backgroundColor=FORTH_COLOR;
            }, i * ANIMATION_SPEED_MS);
        }
        else
        {
            const [temp,barIndex,newHeight]=animations[i];
            const barStyle=arrayBars[barIndex];
            
            setTimeout(()=>{
                barStyle.style.height=`${newHeight}px`;
                barStyle.innerHTML = `${newHeight}`;
            },i*ANIMATION_SPEED_MS);
        }
    }
}

bubbleSort()
{
    const [animations,array] = getBubbleSortAnimations(this.state.array);
    const N=animations.length+array.length;
    for(let i=0;i<N;i++)
    {
        const arrayBars=document.getElementsByClassName('array-bar');
        if(i>=animations.length)
        {
            const barStyleLast=arrayBars[i-animations.length].style;
            setTimeout(() => {
                barStyleLast.backgroundColor = PRIMARY_COLOR;
            }, i*ANIMATION_SPEED_MS);
            continue;
        }
        if(animations[i][0]=="comp1" || animations[i][0]=="comp2")
        {
            let color=(animations[i][0]=="comp1")? SECONDARY_COLOR:PRIMARY_COLOR;
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
            let colorbar=(animations[i][0]==="colorChangedOne")? THIRD_COLOR:PRIMARY_COLOR;
            let barStyle1=arrayBars[barIndex1].style;
            let barStyle2=arrayBars[barIndex2].style;
            setTimeout(()=>{
                barStyle1.backgroundColor = colorbar;
                barStyle2.backgroundColor = colorbar;
            },i*ANIMATION_SPEED_MS);
        }
        else if(animations[i][0]==="Fixed")
        {
            const [temp,barIndex1,barIndex2]=animations[i];
            const barOneStyle=arrayBars[barIndex1].style;
            setTimeout(() => {
                barOneStyle.backgroundColor=FORTH_COLOR;
            }, i * ANIMATION_SPEED_MS);
        }
        else
        {
            let [temp,barIndex,newHeight]=animations[i];
            let barStyle=arrayBars[barIndex];
            setTimeout(() => {
                barStyle.style.height=`${newHeight}px`;
                barStyle.innerHTML = `${newHeight}`;
            }, i*ANIMATION_SPEED_MS);
        }
    }
}
mergeSort()
{ 
    const animations = getMergeSortAnimations(this.state.array);
    for(let i=0;i<animations.length;i++)
    {
        //console.log(animations[i]);
        const arrayBars=document.getElementsByClassName('array-bar');
        if(animations[i][0]=="comp1" || animations[i][0]=="comp2")
        {
            let color=(animations[i][0]=="comp1")? SECONDARY_COLOR:PRIMARY_COLOR;
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
            let colorbar=(animations[i][0]==="colorChangedOne")? THIRD_COLOR:PRIMARY_COLOR;
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
            let barStyle=arrayBars[barIndex];
            setTimeout(() => {
                barStyle.style.height=`${newHeight}px`;
                barStyle.innerHTML = `${newHeight}`;
            }, i*ANIMATION_SPEED_MS);
        }
    }

}
heapSort()
{
    const [animations,array] = getHeapSortAnimations(this.state.array);
    const N=animations.length+array.length;
    for(let i=0;i<N;i++)
    {
        const arrayBars=document.getElementsByClassName('array-bar');
        if(i>=animations.length)
        {
            const barStyleLast=arrayBars[i-animations.length].style;
            setTimeout(() => {
                barStyleLast.backgroundColor = PRIMARY_COLOR;
            }, i*ANIMATION_SPEED_MS);
            continue;
        }
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
            const colorbar=(animations[i][0]==="colorChangedOne")? THIRD_COLOR:PRIMARY_COLOR;
            const barStyle1=arrayBars[barIndex1].style;
            const barStyle2=arrayBars[barIndex2].style;
            setTimeout(()=>{
                barStyle1.backgroundColor = colorbar;
                barStyle2.backgroundColor = colorbar;
            },i*ANIMATION_SPEED_MS);
        }
        else if(animations[i][0]==="Fixed")
        {
            const [temp,barIndex1,barIndex2]=animations[i];
            const barOneStyle=arrayBars[barIndex1].style;
            setTimeout(() => {
                barOneStyle.backgroundColor=FORTH_COLOR;
            }, i * ANIMATION_SPEED_MS);
        }
        else
        {
            const [temp,barIndex,newHeight]=animations[i];
            const barStyle=arrayBars[barIndex];
            setTimeout(()=>{
                barStyle.style.height=`${newHeight}px`;
                barStyle.innerHTML = `${newHeight}`;
            },i*ANIMATION_SPEED_MS);
        }
    }

}

quickSort()
{
    const [animations,array]=getQuickSortAnimations(this.state.array);
    const N=animations.length+array.length;
    for(let i=0;i<N;i++)
    {
        //console.log(animations[i]);
        const arrayBars=document.getElementsByClassName('array-bar');
        if(i>=animations.length)
        {
            const barStyleLast=arrayBars[i-animations.length].style;
            setTimeout(() => {
                barStyleLast.backgroundColor = PRIMARY_COLOR;
            }, i*ANIMATION_SPEED_MS);
            continue;
        }
        if(animations[i][0]==="comp1" || (animations[i][0]==="comp2"))
        { 
            const color=(animations[i][0]==="comp1")? SECONDARY_COLOR:PRIMARY_COLOR;
            const [temp,barOneIndex,barTwoIndex]=animations[i];
           // console.log(animations[i]);
            const barOneStyle=arrayBars[barOneIndex].style
            const barTwoStyle=arrayBars[barTwoIndex].style;
            //console.log("Hello: ",arrayBars);
            setTimeout( ()=> {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i*ANIMATION_SPEED_MS);
        }
        else if(animations[i][0]==="colorChangedOne" || animations[i][0]==="colorChangedTwo")
        {
            const [temp,barIndex1,barIndex2]=animations[i];
            const colorbar=(animations[i][0]==="colorChangedOne")? THIRD_COLOR:PRIMARY_COLOR;
            const barStyle1=arrayBars[barIndex1].style;
            const barStyle2=arrayBars[barIndex2].style;
            setTimeout(()=>{
                barStyle1.backgroundColor = colorbar;
                barStyle2.backgroundColor = colorbar;
            },i*ANIMATION_SPEED_MS);
        }
        else if(animations[i][0]==="pivot1" || animations[i][0]==="pivot2")
        {
            const [tempP,barIndexP,barIndexP2]=animations[i];
            const colorbarP=(animations[i][0]==="pivot1")? SECONDARY_COLOR:FORTH_COLOR;
            const barStyleP=arrayBars[barIndexP].style;
            setTimeout(()=>{
                barStyleP.backgroundColor = colorbarP;
            },i*ANIMATION_SPEED_MS);
        } 
        else
        {
            const [temp,barIndex,newHeight]=animations[i];
            const barStyle=arrayBars[barIndex];
            setTimeout(()=>{
                barStyle.style.height=`${newHeight}px`;
                barStyle.innerHTML = `${newHeight}`;
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
                    <div
                    className="array-bar"
                    key={idx}

                    style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px`,
                        width: `${barwidth}px`,
                    }}>{value}</div>
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
                <button onClick={() =>this.quickSort()}>Quick Sort</button>
            </div>
        </div>
    );
}
}
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}