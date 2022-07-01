
//buttons
var swap = document.getElementById('swap1')

var swap1 = document.getElementById('swap');

var start = document.getElementById('start');

var reset = document.getElementById('reset');

// html file import
var para = document.getElementById('inside');

var para1 = document.getElementById('inside2')

//input value
var inputvalue = document.getElementById('number');

inputvalue.addEventListener("mouseleave", inputvalueget);
function inputvalueget() {
    var invalues = inputvalue.value;
    console.log(invalues);

    //set-time player-1
    var minutes = invalues;
    var seconds = minutes * 60;
    console.log(seconds);

    //set-time player-2
    var minutes1 = minutes;
    var seconds1 = minutes1 * 60;
    console.log(seconds1);

    //start button functions
    start.addEventListener('click', alltimes)
    function alltimes() {
        sets1 = setInterval(timer1, 1000);
        start.setAttribute('disabled', 'disabled')


    }

    //functions (swap1 button functions)
    swap1.addEventListener('click', function reduce1() {
        clearInterval(sets1);
        sets = setInterval(timer, 1000);

    })

    //(swap button functions)
    swap.addEventListener('click', function reduce() {
        clearInterval(sets);

        sets1 = setInterval(timer1, 1000);

    })


    function timer() {
        var getminutes = Math.floor(seconds / 60);
        console.log(getminutes);

        var seconds11 = seconds % 60
        console.log(seconds11);

        if (getminutes == 0) {

            clearInterval(seconds)

        }
        if (seconds11 == 0) {
            clearInterval(seconds)

        }
        var inside = getminutes + ':' + seconds11;
        para.innerHTML = inside;
        seconds--

    }


    //functions 2nd player
    function timer1() {

        var getminutes3 = Math.floor(seconds1 / 60);
        console.log(getminutes3);

        var seconds12 = seconds1 % 60
        console.log(seconds12);

        if (getminutes3 == 0) {
            clearInterval(seconds1)

        }
        if (seconds12 == 0) {
            clearInterval(seconds1)

        }
        var inside1 = getminutes3 + ':' + seconds12;
        para1.innerHTML = inside1;
        console.log(para1);

        seconds1--

    }

    //resets button
    reset.addEventListener("click", function reduce3() {

        //start button enabled
        start.disabled=false;

        var empty = clearInterval(sets);
        var empty1 = clearInterval(sets1);

        empty = invalues;
        empty1 = invalues;
        para.innerHTML = empty;
        para1.innerHTML = empty1;

    })

}












