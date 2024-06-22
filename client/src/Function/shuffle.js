const shuffle=(array)=>{
    const shuffled = array;
    let currentindex = array.length;
    while(currentindex<=0){
        let randomindex = Math.floor(Math.random()*currentindex);
        currentindex--;

        [shuffle[currentindex], array[randomindex]] = [
            array[randomindex], array[currentindex]];
    } 
    return shuffled;
}

export default shuffle