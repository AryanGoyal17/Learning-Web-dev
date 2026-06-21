//Typecasting to number

//string => NaN(for normal strings), 0(for empty strings), true = 1, false = 0

const v1  = Number("")
console.log(v1)
console.log(typeof(v1)) //number

//Typecasting to boolean

//bool => empty string(false) else true, for numbers 0 = false, rest -- true

const v2 = Boolean(4)
console.log(v2)
console.log(typeof(v2))

//Typecasting to string

const v3 = String(true)
console.log(v3)
console.log(typeof(v3))

