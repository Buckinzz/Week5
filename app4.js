for(var i = 1; i <= 10; i++)
{
    console.log(i);
}



while(true){
    console.log(`BEER SONG BAAABY!`);
    break;
}



for(var i = 99; i >= 1; i--)
{
    if(i !== 1)
    console.log(i + " beers on the wall. Take one down pass it around!");
    
    if(i === 1)
    console.log(i + " beer on the wall. Take one down pass it around!");
}



var bools = [true, true, false, true, false, true, true, true];
for (i = 0; i < bools.length; i++)
{
    if (bools[i] === true)
    {
    console.log(bools[i]);
    }
}



var str = "apples";
for(var i = 0; i < str.length; i++)
{
    if(str[i] === 'a')
    {
        console.log(str[i]);
    }
    else if(str[i] === 'e')
    {
        console.log(str[i]);
    }
}
