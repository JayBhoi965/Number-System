

let decToBin = () => {
    let dec_str = document.getElementById("input_dec").value;
    let num = Number(dec_str);
    let arr = [];
    for (let i = 0; num !== 0; i++) {
        arr[i] = num % 2;
        num = Math.floor(num / 2);
    }
    let arr2 = [];
    let j = 0;
    for(let i = arr.length; i>=0;i--) {
        arr2[j] = arr[i];
        j++;
    }

    let string_arr = arr2.toString();
    arr_num = string_arr.split(",").join("");
    document.getElementById("main_op").innerHTML = arr_num;
      let css1 = document.getElementById("main_op");
    css1.style.transition = "all 0.5s";
    css1.style.boxShadow = "2px 2px 5px black";
}
