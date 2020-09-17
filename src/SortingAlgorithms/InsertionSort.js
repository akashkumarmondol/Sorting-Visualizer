export function getInsertionSortAnimations(array)
{
    let animations=[];
    insertionSort(array,animations);
    return animations;
}
function insertionSort(array,animations)
{
    const N=array.length;
    let key,j;
    for(let i=1;i<N;i++)
    {
        key=array[i];
        j=i-1;
        animations.push(["comp1",j,i]);
        animations.push(["comp2",j,i]);
        while(j>=0 && array[j]>key)
        {
            animations.push(["colorChangedOne",j+1,j]);
            animations.push(["overwrite",j+1,array[j]]);
            animations.push(["colorChangedTwo",j+1,j]);
            array[j+1]=array[j];
            j=j-1;
            
        }
        animations.push(["colorChangedOne",j+1,j+1]);
        animations.push(["overwrite",j+1,key]);
        animations.push(["colorChangedTwo",j+1,j+1]);
        array[j+1]=key;
    }
}