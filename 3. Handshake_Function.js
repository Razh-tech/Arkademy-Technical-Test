//by Radendy Bahtiar - Sept, 21st '19

function count_handshake() {
    var v1 = document.getElementById('number').value;
    var i = 0;
    var r = 0;
    for(i; i < v1; i++) {
        r += i;
    }
   console.log(r);
    var print = document.getElementById('result');
    print.value = r;
}
