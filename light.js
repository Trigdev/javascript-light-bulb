function turnOnTheLight() 
{
    const bulb = document.getElementById('bulb').src; 
    console.log(bulb); 
    if (bulb.includes('images/light-off.png')) 
    {
        console.log(true);
        document.getElementById('bulb').src = 'images/light-on.jpg'; 
        document.getElementById('switch_img').src = 'images/switch_on.png';
        return true; 
    }
    else 
    {
        console.log(false);
        document.getElementById('bulb').src = 'images/light-off.png'; 
        document.getElementById('switch_img').src = 'images/switch_off.png';   
        return true;                             
    }
    return false;
}