
  // Get html elements
    let day = document.querySelector('.days');
    let hour = document.querySelector('.hours');
    let minute = document.querySelector('.minutes');
    let second = document.querySelector('.seconds');

function setCountdown() {

    // Set countdown date
    let countdownDate = new Date('June 02, 2025 21:00:00').getTime();

    // Update countdown every second
    let updateCount = setInterval(function(){

        // Get today's date and time
        let todayDate = new Date().getTime();

        // Get distance between now and countdown date
        let distance = countdownDate - todayDate;

        let days = Math.floor(distance / (1000 * 60 * 60 *24));

        let hours = Math.floor(distance % (1000 * 60 * 60 *24) / (1000 * 60 *60));

        let minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60));

        let seconds = Math.floor(distance % (1000 * 60) / 1000);

        // Display values in html elements
        day.textContent = days;
        hour.textContent = hours;
        minute.textContent = minutes;
        second.textContent = seconds;

        // if countdown expires
        if(distance < 0){
            clearInterval(updateCount);
            document.querySelector(".container").innerHTML = `
              <h1>PENGUMUMAN TELAH DIBUKA</h1>
              <a href="pengumuman.html" class="expired-button">Klik di sini untuk menuju pengumuman</a>
            `;
        }
    }, 1000)
}

setCountdown()
