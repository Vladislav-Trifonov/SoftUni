function yard (data) {
    let totalArea = Number (data[0]);
    let price = totalArea * 7.61; 
    let discount = price * 0.18;
    let final = price - discount;
    let result = (`The final price is: ${final} lv.
    The discount is: ${discount} lv.`)
    console.log(result);
};