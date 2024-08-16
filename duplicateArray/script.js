
function renoveDuplication(...arr)
{
    let uniqueArray=[];
    for(let i=0;i<arr.length;i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}
    document.getElementById('result').innerHTML=renoveDuplication([2,30,50,2,2,4,5,7,8]);

console.log(renoveDuplication([2,30,50,2,2,4,5,7,8]));