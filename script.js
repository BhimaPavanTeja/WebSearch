//search function
const searchInput = document.getElementById('search-input');
const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
    const searchValue = searchInput.value;
    if (searchValue === '') {
        alert('Please enter a search value');
    } else {
        window.location.href = `http://www.bing.com/search?q=${searchValue}`;
    }
});

// on enter key press search
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const searchValue = searchInput.value;
        if (searchValue === '') {
            alert('Please enter a search value');
        } else {
            window.location.href = `http://www.bing.com/search?q=${searchValue}`;
        }
    }
});

//menu bar
const menuIcon = document.getElementById('menu-icon');
const menu = document.querySelector('.menu-bar ul');

function openMenu() {
    if(menu.style.display=='none'){
        menu.style.display = 'flex';
    }else{
        menu.style.display = 'none';
    }

}

function openYoutube() {
    window.location.href = 'https://www.youtube.com/';
}

function openGmail() {
    window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
}

function openPhotos() {
    window.location.href = 'https://photos.google.com/';
}

function openDrive() {
    window.location.href = 'https://drive.google.com/drive/my-drive';
}

function openCalendar() {
    window.location.href = 'https://calendar.google.com/calendar/u/0/r';
}

function openMaps() {
    window.location.href = 'https://www.google.com/maps';
}

function openGithub() {
    window.location.href = 'https://www.github.com/';
}

function openChatgpt() {
    window.location.href = 'https://chat.openai.com/';
}

function openGemini() {
    window.location.href = 'https://gemini.google.com/';
}

//typing-animation
const typingText = document.querySelector('.typing-animation');
const text = ["Hello Pavan Teja, let's explore!","Work More, Be Productive!","Focus one thing, Be Smart and fast!"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    typingText.textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
}());


//clock
const clock = document.querySelector('.clock');

function updateTime() {
    const now = new Date();
  
    // Format hours (12-hour format with AM/PM)
    let hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // Convert to 12-hour format and handle midnight
  
    // Update time display
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("AmPm").textContent = amPm;
  
    // Update date display (assuming month names are lowercase)
    const month = now.toLocaleString('default', { month: 'long' }).toLowerCase();
    const date = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    document.getElementById("date-display").textContent = date;
    document.getElementById("month").textContent = month;
    document.getElementById("year").textContent = year;
  }
  
  // Update the clock initially and call it every second
  updateTime();
  setInterval(updateTime, 1000);
  
  // edit
  const Icon = document.getElementById('edit');
  const textP = document.getElementById('custom-p');

  Icon.addEventListener('mouseenter',() => {
    textP.style.display = 'block';
  });

  Icon.addEventListener('mouseleave',() => {
    textP.style.display = 'none';
  });

  //custom-background-image

  const backgroundImageUpload = document.querySelector('.bg-img-upload');
  const backgroundUrl = document.getElementById('bg-url');
  const backgroundImage = document.getElementById('bg-img'); // input-type is file
  const submitBg = document.getElementById('submit-bg');
  const bodyA = document.getElementById('body-a');
  
  let backgroundLayer; // Declare outside to ensure proper removal
  
  Icon.addEventListener('click', () => {
    backgroundImageUpload.style.display = 'flex';
    typingText.style.display = 'none';
    searchInput.style.display = 'none';
    clock.style.display = 'none';
    Icon.style.display = 'none';
  
    // Create and append the background layer dynamically
    backgroundLayer = document.createElement('div');
    backgroundLayer.style.position = 'fixed';
    backgroundLayer.style.top = '0';
    backgroundLayer.style.left = '0';
    backgroundLayer.style.width = '100%';
    backgroundLayer.style.height = '100%';
    backgroundLayer.style.backgroundColor = 'black'; // Adjust color as needed
    backgroundLayer.style.opacity = '0.5'; // Adjust opacity as needed
    document.body.appendChild(backgroundLayer);
  });
  
  submitBg.addEventListener('click', () => {
    backgroundImageUpload.style.display = 'none';
    typingText.style.display = 'block';
    searchInput.style.display = 'block';
    clock.style.display = 'block';
    Icon.style.display = 'block';

    const ImageUrls = backgroundUrl.value;
    bodyA.style.backgroundImage = `url('${ImageUrls}')`;
  
    // Handle both background URL and uploaded image logic
    let imageUrl;
    if (backgroundUrl.value) { // Use provided URL if available
      imageUrl = backgroundUrl.value;
    } else { // Use uploaded image if chosen
      const bgImage = backgroundImage.files[0];
      if (bgImage) {
        const reader = new FileReader();
        reader.onload = (event) => {
          imageUrl = event.target.result;
          bodyA.style.backgroundImage = `url('${imageUrl}')`;
        };
        reader.readAsDataURL(bgImage);
      }
    }
  
    // Store the image URL or image data locally
    if (imageUrl) {
      localStorage.setItem('backgroundImage', imageUrl);
    }
  
    // Ensure background layer is removed
    if (backgroundLayer) {
      document.body.removeChild(backgroundLayer);
    }
  });  
      
  const bgClose = document.getElementById('bg-close');

  bgClose.addEventListener('click', () => {
    backgroundImageUpload.style.display = 'none';
    typingText.style.display = 'block';
    searchInput.style.display = 'block';
    clock.style.display = 'block';
    Icon.style.display = 'block';
  
    // Ensure background layer is removed
    if (backgroundLayer) {
      document.body.removeChild(backgroundLayer);
    }
  });

    // Retrieve background image from local storage
    const storedBackgroundImage = localStorage.getItem('backgroundImage');
    if (storedBackgroundImage) {
      bodyA.style.backgroundImage = `url('${storedBackgroundImage}')`;
    }
    //store uploaded image
    const bgImage = document.getElementById('bg-img');
    bgImage.addEventListener('change', () => {
      const reader = new FileReader();
      reader.onload = (event) => {
        localStorage.setItem('backgroundImage', event.target.result);
      };
      reader.readAsDataURL(bgImage.files[0]);
    });
