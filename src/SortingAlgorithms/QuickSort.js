var animations=[];
export function getQuickSortAnimations(array)
{
    QuickSort(array,0,array.length-1);
    console.log(array);
    return [animations,array];
}

function QuickSort(array,low,high)
{
    if(low<=high)
    {
        let pi=partition(array,low,high);
        QuickSort(array,low,pi-1);
        QuickSort(array,pi+1,high);
    }
}
function partition(array,low,high)
{
    let pivot=array[high];
    let i=low-1;
    for(let j=low;j<high;j++)
    {
        animations.push(["comp1",j,high]);
        animations.push(["comp2",j,high]);
        if(array[j]<pivot)
        {
            i++;
            animations.push(["pivot1",high,high]);
            animations.push(["colorChangedOne",i,j]);
            animations.push(["swap",i,array[j]]);
            animations.push(["swap",j,array[i]]);
            animations.push(["colorChangedTwo",i,j]);
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
    animations.push(["colorChangedOne",i+1,high]);
    animations.push(["swap",i+1,array[high]]);
    animations.push(["swap",high,array[i+1]]);
    animations.push(["colorChangedTwo",i+1,high]);
    animations.push(["pivot2",i+1,i+1]);
    let temp=array[i+1];
    array[i+1]=array[high];
    array[high]=temp;
    return (i+1);
}
