function addZero(num) {
    if (num < 10) {
        num = `0${num}`;
    } else {
        num = num;
    }
    return num;
}

setInterval(function () {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();


    hours = addZero(hours);
    minutes = addZero(minutes);
    document.querySelector('.time').innerHTML = `${hours}:${minutes}`;
}, 1000)

$('.trigger').click(function () {
    $('.trigger i').toggleClass('active')
    $('.navigation').toggleClass('active');
    $('.wrap-nav').toggleClass('active');
})


$('.btn').click(function(){
    $('.shop-list').toggleClass('active');
})