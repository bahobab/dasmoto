function countDown (n) {
  var c = setInterval(function() {
    if (n!==0) {
      console.log(n);
      n--;
    } else {
      console.log('Ring Ring Ring!!!');
      clearInterval(c);
    }
  }, 1000);
}
