"use strict"
export function getHeapSortAnimations(array)
{
    let animations = [];
    console.log(array);
    heapSort(array,animations);
    console.log(array);
    return animations;
}

function heapSort(array,animations)
{
    const N=array.length;
    buildMaxHeap(array,animations);
    console.log(array);
   
    for(let i=N-1;i>0;i--)
    {
        //swap value of first index with last index
        animations.push(["colorChangedOne",i,0]);
        animations.push(["swap",0,array[i]]);
        animations.push(["swap",i,array[0]]);
        animations.push(["colorChangedTwo",i,0]);
        let temp=array[0];
        array[0]=array[i];
        array[i]=temp;

        let j=0,index;

        do{
            index=(2*j+1);
            if(index<(i-1)){
                animations.push(["comp1",index,index+1]);
                animations.push(["comp2",index,index+1]);
            }
            
            if(array[index]<array[index+1] && index<(i-1))
            {
                index++;
            }
            if(index<(i-1)){
                animations.push(["comp1",index,index+1]);
                animations.push(["comp2",index,index+1]);
            }
            if(array[j]<array[index] && index<i)
            {
                animations.push(["colorChangedOne",j,index]);
                animations.push(["swap",j,array[index]]);
                animations.push(["swap",index,array[j]]);
                animations.push(["colorChangedTwo",j,index]);
                let temp=array[j];
                array[j]=array[index];
                array[index]=temp;
            }
            j=index;

        }while(index<i);
    }

}

function buildMaxHeap(array,animations)
{
    for(let i=1;i<array.length;i++)
    {
       // console.log(i);
        let val=Math.floor((i-1)/2);
        animations.push(["comp1",i,val]);
        animations.push(["comp2",i,val]);
        if(array[i]>array[val])
        {
            let j=i;
            val=Math.floor((j-1)/2);
            while(array[j]>array[val])
            {
                animations.push(["colorChangedOne",j,val]);
                animations.push(["swap",j,array[val]]);
                animations.push(["swap",val,array[j]]);
                animations.push(["colorChangedTwo",j,val]);
                let temp=array[j];
                array[j]=array[val];
                array[val]=temp;
                j=Math.floor((j-1)/2);
                val=Math.floor((j-1)/2);
            }
        }
    }
} 