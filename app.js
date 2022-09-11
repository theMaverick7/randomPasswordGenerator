
//=========================================
// Random Password Generator (6 characters)
//=========================================

// arrays for numbers, alphabets and special characters
const nums = [0,1,2,3,4,5,6,7,8,9];
const alphas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const specs = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+'];

// this function returns a string of random password
const generator = () =>
{
    // this function returns a random number. Range depends on the number passed in as an argument
    const random = num => Math.floor(Math.random() * num);

    //this nested function returns characters on different places randomly 
    const ret = (random) =>
    {
        let length = Math.floor(Math.random() * 3);
        
        // this array is for placing characters at random places
        const len = [nums[random(10)],alphas[random(26)],specs[random(14)]];
        return len[length];
    }
    return `${ret(random)}${ret(random)}${ret(random)}${ret(random)}${ret(random)}${ret(random)}`;
}

// returned password saved in a variable and then logged on console
const password = generator();
console.log(`Your random Password: ${password}`);