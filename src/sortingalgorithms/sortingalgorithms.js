export function getmergesortanimation(array){
    const animations=[];
    if(array.length<=1) return array;
    const auxarray=array.slice();
    mergesorthelper(array,0,array.length-1,auxarray,animations);
   
    return animations;
}
function mergesorthelper(mainarray,startidx,endidx,auxarray,animations){
    if(startidx===endidx)return ;
    const middleidx=Math.floor((startidx+endidx)/2);
    mergesorthelper(auxarray,startidx,middleidx,mainarray,animations);
    mergesorthelper(auxarray,middleidx+1,endidx,mainarray,animations);
    merge(mainarray, startidx, middleidx, endidx, auxarray, animations);
}
function merge(mainarray, startidx, middleidx, endidx, auxarray, animations){
    let k = startidx; 
    let i = startidx;
    let j = middleidx + 1;
while(i<=middleidx && j<=endidx){
    animations.push([i, j]);
    animations.push([i, j]);
    if(auxarray[i]<=auxarray[j]){
       
        animations.push([k, auxarray[i]]);
        mainarray[k++] = auxarray[i++];
      } else {
        
        animations.push([k, auxarray[j]]);
        mainarray[k++] = auxarray[j++];
      }
         
    }
    while(i<=middleidx){
        
    animations.push([i, i]);
    
    animations.push([i, i]);
    
    animations.push([k, auxarray[i]]);
    mainarray[k++] = auxarray[i++];
  }
  while (j <= endidx) {
    
    animations.push([j, j]);
  
    animations.push([j, j]);
 
    animations.push([k, auxarray[j]]);
    mainarray[k++] = auxarray[j++];
  }
  
}
export function getbubblesortanimation(array){
    const animations=[];
    
    for (let i = 0; i < array.length-1; i++)     
      
    
    for (let j = 0; j < array.length-i-1; j++) 
        if (array[j] > array[j+1]){
            
              animations.push([j,j+1]);
                animations.push([j,j+1]);
                animations.push([j,array[j+1],j+1,array[j]]);
                
                let temp=array[j+1];
                array[j+1]=array[j];
                array[j]=temp;
            
        }
    
    
    return animations;
}
 
export function getquicksortanimations(array,low,high,animations){

     if(high-low<=1)return array ;
  
   
   const pivotfinalindex= Partition (array,low,high,animations);
   getquicksortanimations(array,low,pivotfinalindex-1,animations);
   getquicksortanimations(array,pivotfinalindex+1,high,animations);


    return animations;
}
function Partition(array,low,high,animations){
    const pivot=array[high];
    let i=low-1;
    for(let j=low;j<=high-1;j++){
        if(array[j]<=pivot){
            i=i+1;
         animations.push([j,high]);
         animations.push([j,high]);
         animations.push([i,array[j],j,array[i]]);
         let temp=array[i];
         array[i]=array[j];
         array[j]=temp;
        }
    }
    animations.push([i+1,high]);
    animations.push([i+1,high]);
    animations.push([i+1,array[high],high,array[i+1]]);
    let tempo=array[high];
    array[high]=array[i+1];
    array[i+1]=tempo;
return i+1;
}




