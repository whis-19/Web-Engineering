
//.forEach(fn): method executes a provided function once for each array element.

//.map(fn): method creates a new array with the results of calling a 
// provided function on every element in the calling array.


//.filter(fn): create new arrray by filtering out the true values from the array

//.reduce(fn): method applies a function against an accumulator and each element in the array

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        
        console.log("You finsihed all the chores!");
    }
    catch(error){
        console.error(error);
    }
}

doChores();