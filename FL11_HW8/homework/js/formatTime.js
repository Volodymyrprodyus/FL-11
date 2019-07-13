function formatTime (min) {
    const minInDay = 1440;
    const minInHour = 60;
    let res ='';
    let days = (min/minInDay)^0;
    let hours = ((min-days*minInDay)/minInHour)^0;
    let minutes = min-days*minInDay-hours*minInHour;
    res = days+' day(s) '+hours+' hour(s) '+minutes+' minute(s).'
    return res;
}
console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));
formatTime(120);
formatTime(59);
formatTime(3601);