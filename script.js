// Function to log in with meme-themed credentials
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Meme-themed credentials
    const memeUsername = "NPC";
    const memePassword = "Imposter";
  
    if (username === memeUsername && password === memePassword) {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("dashboard-screen").style.display = "flex";
    } else {
      alert("Incorrect username or password");
    }
  }
  
  // Function to start the video call
  function startVideoCall() {
    document.getElementById("dashboard-screen").style.display = "none";
    document.getElementById("video-call-screen").style.display = "flex";
    document.getElementById("connecting-message").textContent = "Connecting...";
  
    // Show "Connecting" message with a delay
    setTimeout(() => {
      document.getElementById("connecting-message").textContent = "We will connect you to the doctor as soon as possible.";
    }, 3000);
  }
  
  // Function to view doctors
  function viewDoctors() {
    document.getElementById("dashboard-screen").style.display = "none";
    document.getElementById("doctors-screen").style.display = "flex";
  
    const doctors = [
      {
        name: "Dr. John Doe",
        image: "https://via.placeholder.com/150",
        specialty: "Cardiologist"
      },
      {
        name: "Dr. Jane Smith",
        image: "https://via.placeholder.com/150",
        specialty: "Dermatologist"
      },
      {
        name: "Dr. Emily Johnson",
        image: "https://via.placeholder.com/150",
        specialty: "Neurologist"
      }
    ];
  
    const doctorListContainer = document.getElementById("doctor-list");
  
    doctors.forEach(doctor => {
      const doctorCard = document.createElement("div");
      doctorCard.classList.add("doctor-card");
  
      doctorCard.innerHTML = `
        <img src="${doctor.image}" alt="${doctor.name}">
        <h3>${doctor.name}</h3>
        <p>${doctor.specialty}</p>
      `;
      doctorListContainer.appendChild(doctorCard);
    });
  }
  
  // Function to view medical device readings (simulated)
  function viewMedicalDevice() {
    document.getElementById("dashboard-screen").style.display = "none";
    document.getElementById("medical-device-screen").style.display = "flex";
  }
  
  // Function to view health records
  function viewHealthRecords() {
    document.getElementById("dashboard-screen").style.display = "none";
    document.getElementById("health-records-screen").style.display = "flex";
  }
  
  // Function to save health records
  function saveHealthRecords() {
    const conditions = document.getElementById("conditions").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
  
    // Here, you would save these to a backend server or local storage
    alert(`Health records saved:\nConditions: ${conditions}\nHeight: ${height}\nWeight: ${weight}`);
    goBackToDashboard();
  }
  
  // Function to book an appointment
  function bookAppointment() {
    document.getElementById("dashboard-screen").style.display = "none";
    document.getElementById("appointment-screen").style.display = "flex";
  }
  
  // Function to confirm appointment
  function confirmAppointment() {
    const date = document.getElementById("date").value;
  
    if (!date) {
      alert("Please select a date for your appointment.");
      return;
    }
  
    alert(`Your appointment is booked for ${date}.`);
    goBackToDashboard();
  }
  
  // Function to go back to dashboard
  function goBackToDashboard() {
    document.getElementById("doctors-screen").style.display = "none";
    document.getElementById("video-call-screen").style.display = "none";
    document.getElementById("health-records-screen").style.display = "none";
    document.getElementById("appointment-screen").style.display = "none";
    document.getElementById("medical-device-screen").style.display = "none";
    document.getElementById("dashboard-screen").style.display = "flex";
  }
  
