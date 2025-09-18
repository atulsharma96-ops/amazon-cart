// alert("sdfghjk");
let tpc = document.getElementById("tpc").innerHTML;
// orignal price ko function ke bahar ek baar access kiya hu taki valu bs javascript ke pass ek baar aa jaye 
function qtyf() {
    //    alert("sdfghjk"); 
    let qty = (document.getElementById("qty").value);
    // alert(qty);
    document.getElementById("pn").innerHTML = qty;
    // let spc = document.getElementById("spc").innerHTML; (' yaha pe access  kar raha tha to valu ek baar store kr rahi thi fr uske badd usi ke sath new valu bhi store kr rahi thi ')
    let ans = tpc * qty;
    // alert(ans);
    // alert(ans);
    document.getElementById("tpc").innerHTML = ans;
    document.getElementById("pspc").innerHTML = qty;
    document.getElementById("ptpc").innerHTML = ans;
    document.getElementById("ctotal").innerHTML = qty;
}

