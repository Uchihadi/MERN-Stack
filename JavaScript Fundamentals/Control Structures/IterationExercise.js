var x, y;
var num = '';

for (x = 1; x <= 5; x++) 
{
    for (y = 1; y <= x; y++)
    {
        num = num + y;
    }
    console.log(num);
    num = ''; // Restarted the looping
}