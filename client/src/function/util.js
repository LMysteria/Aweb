export const shuffled = (bag) => {
    const shuffledbag = bag;
    let currentIndex = shuffledbag.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      const temp = shuffled[randomIndex];
      shuffled[randomIndex] = shuffled[currentIndex];
      shuffled[currentIndex] = temp
    }
    return shuffledbag;
}