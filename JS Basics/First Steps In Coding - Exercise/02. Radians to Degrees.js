function radiansToDegrees(params) {
    

    const radians = Number(params); 
    const pi = Math.PI; 
    const degrees = (radians * 180) / pi; 

    console.log(degrees);

}

radiansToDegrees(["3.1416"]); 
