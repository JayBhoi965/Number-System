let decToDec = () => {
    let dec_str = document.getElementById("input_dec").value;
    let num = Number(dec_str);
    let func = num => Number(num);
    let arr = Array.from(String(num), func);

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        // if (arr[i] !== 1 && arr[i] !== 0 && arr[i] !== 2 && arr[i] !== 3 && arr[i] !== 4 && arr[i] !== 5 && arr[i] !== 6 && arr[i] !== 7 && arr[i] !== 8 && arr[i] !== 9) {
        //     alert("Please enter a valid decimal number");
        //     return;
        // }
        // else {

        sum = sum + (Number(arr[i]) * Math.pow(8, (arr.length) - i - 1));
        // }
    }
    document.getElementById("main_op").innerHTML = sum;
   
    let css1 = document.getElementById("main_op");
    css1.style.transition = "all 0.5s";
    css1.style.boxShadow = "2px 2px 5px black";

}
