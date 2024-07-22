let access: boolean = true;
console.log(access); //* undefined

access = 9 && true;
console.log(access); //* true

//access = true && 9;
console.log(access); //* 9

// access = 5 || false;

/*
t && t = t
t && f = f
f && t = f
f && f = f

t || t = t
t || f = t
f || t = t
f || f = f
*/
