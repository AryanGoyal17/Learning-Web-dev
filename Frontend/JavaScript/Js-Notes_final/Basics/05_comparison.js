//1-- For checking equality, use -- ==
//2-- For comparison, use > , < , >= , <= 

//3-- Strict-check(===) [compares both datatype and value] -- prefer this over == and write clean and readable code..
console.log("2" == 2)
console.log("2" === 2)

//4-- Always while comparing, try to keep dtypes same, avoid comparing with diff dtypes due to unexpected output

//5-- Important--

//A--On comparing, null is converted to 0, while on checking equality(==) it remains null

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//B--On comparing, undefined is converted to NaN, while on checking equality(==) it remains undefined

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//On using comparing ops(>=, <=, >, <) -- null and undefined are forced to a number
