/* Testing Call Backs */

const result = (resp) => {
    console.log(resp);
}

const sum = (arg1, arg2, call) => {
    setTimeout(()=>{
        const op = Number(arg1)+Number(arg2); 
        call(op);
    }, 2000)
    console.log('Doing the sum operations wait 2 seconds please ...'); 
}

sum(process.argv[2],process.argv[3],result);
