function billingFunction(){
    var checkbox = document.getElementById("same");

    var shippingName = document.getElementById("shippingName");
    var shippingZip = document.getElementById("shippingZip");

    var billingName = document.getElementById("billingName");
    var billingZip = document.getElementById("billingZip");

    if( checkbox.checked == true ){
        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;
    }else{
        billingName.value = "";
        billingZip.value = "";
    }
}