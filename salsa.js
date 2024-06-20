function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Mengatur format jam jika nilainya kurang dari 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Menampilkan waktu pada elemen dengan id "clock"
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
  }
  
  // Memanggil fungsi updateClock setiap detik
  setInterval(updateClock, 1000);