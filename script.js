const plantRecommendations = {
    low: {
      sunlight: {
        low: ["Snake Plant", "ZZ Plant", "Cast Iron Plant"],
        medium: ["Spider Plant", "Pothos", "Peace Lily"],
        high: ["Fiddle Leaf Fig", "Areca Palm", "Bird of Paradise"]
      },
      care: {
        low: ["Snake Plant", "Aloe Vera", "Pothos"],
        medium: ["Spider Plant", "Peace Lily", "Bamboo Palm"],
        high: ["Fiddle Leaf Fig", "Succulents", "Orchids"]
      },
      petFriendly: {
        yes: ["Spider Plant", "Areca Palm", "Bamboo Palm"],
        no: ["Peace Lily", "ZZ Plant", "Fiddle Leaf Fig"]
      }
    }
  };

  // Form submission logic
  document.getElementById("plantQuizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const sunlight = document.getElementById("sunlight").value;
    const careLevel = document.getElementById("careLevel").value;
    const petFriendly = document.getElementById("petFriendly").value;

    if (sunlight && careLevel && petFriendly) {
      let plants = plantRecommendations.low.sunlight[sunlight]
        .concat(plantRecommendations.low.care[careLevel])
        .concat(plantRecommendations.low.petFriendly[petFriendly]);

      plants = [...new Set(plants)];  // Remove duplicates
      displayResults(plants);
    }
  });

  // Display the results of the quiz
  function displayResults(plants) {
    const resultSection = document.getElementById("resultSection");
    const recommendedPlantsList = document.getElementById("recommendedPlants");

    recommendedPlantsList.innerHTML = '';  // Clear previous results

    plants.forEach(plant => {
      const li = document.createElement("li");
      li.textContent = plant;
      recommendedPlantsList.appendChild(li);
    });

    resultSection.style.display = "block";  // Show the results
  }

//   clock time 

const showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    
    if (h == 0) {
        h = 12;
    }
    
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    
    //  date
    let day = date.getDate();
    let month = date.getMonth() + 1; 
    let year = date.getFullYear();
    
    let currentDate = (day < 10 ? "0" + day : day) + "/" +
                      (month < 10 ? "0" + month : month) + "/" +
                      year;
    
    document.getElementById("clock").innerHTML = currentDate + " - " + time;
}


setInterval(showTime, 1000);


// contact us 

function showAlert() {
    alert("Thank you for contacting us! We will get back to you soon.");
    return false; 
}