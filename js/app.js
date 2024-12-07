//======================== line chart for Traffic ===============================
// hourly line chart
const labels = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20],
      tension: 0,
      backgroundColor: "rgba(100, 105, 155,0.5)",
      fill: true,
    },
  ],
};
const config_line_Hourly = {
  type: "line",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
// daily line chart
const labels_line_daily = ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
const data_line_daily = {
  labels: labels_line_daily,
  datasets: [
    {
      label: "My First Dataset",
      data: [225, 350, 300, 150, 250, 450, 300, 275, 400, 350, 200],
      tension: 0.2,
      backgroundColor: "rgba(100, 105, 155,0.5)",
      fill: true,
      pointRadius: 5,
    },
  ],
};
const config_line_Daily = {
  type: "line",
  data: data_line_daily,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
// weekly line chart
const labels_line_weekly = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
const data_line_weekly = {
  labels: labels_line_weekly,
  datasets: [
    {
      label: "My First Dataset",
      data: [500, 1000, 700, 1250, 1700, 1250, 1000, 1500, 2000, 1500, 2000],
      tension: 0.1,
      backgroundColor: "rgba(100, 105, 155,0.5)",
      fill: true,
      pointRadius: 5,
    },
  ],
};
const config_line_Weekly = {
  type: "line",
  data: data_line_weekly,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
// monthly line chart
const labels_line_monthly = ["Jan", "Feb", "Mar", "Apr", "May", "Ju", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data_line_monthly = {
  labels: labels_line_monthly,
  datasets: [
    {
      label: "My First Dataset",
      data: [200, 500, 1200, 1250, 1700, 1250, 1000, 1500, 2000, 1500, 2000, 1750],
      tension: 0.1,
      backgroundColor: "rgba(100, 105, 155,0.5)",
      fill: true,
      pointRadius: 5,
    },
  ],
};
const config_line_Monthly = {
  type: "line",
  data: data_line_monthly,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
//================== bar chart for daily traffic ==============================
const labels_2 = ["S", "M", "T", "W", "T", "F", "S"];
const data_2 = {
  labels: labels_2,
  datasets: [
    {
      label: "",
      data: [55, 110, 175, 125, 225, 200, 100],
      backgroundColor: ["rgb(100, 105, 155)"],
      borderWidth: 1,
    },
  ],
};

const config_2 = {
  type: "bar",
  data: data_2,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

//======================== pie chart for mobile users ===============================
const data_3 = {
  labels: ["Dekstop", "Tablet", "Phones"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 75, 75],
      backgroundColor: ["rgb(100, 105, 155)", "rgb(87, 168, 118)", "rgb(74, 181, 175)"],
      hoverOffset: 4,
      borderWidth: 0,
    },
  ],
};

const config_3 = {
  type: "doughnut",
  data: data_3,
  options: {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  },
};
//
// ================== Functions =======================
//display searchable users
function displayUserNames() {
  const input = document.getElementById("user_search"); //input
  const users = ["victoria chamber", "dale byrd", "dawn wood", "dan oliver"]; //user array
  const list = document.createElement("ul"); //ul
  list.classList.add("users"); //styled ul
  for (let i = 0; i < users.length; i++) {
    let li = document.createElement("li"); //li
    li.textContent = users[i]; //update li with user name from array
    li.classList.add("username"); //style li
    list.append(li); //append li to ul
    input.insertAdjacentElement("afterend", list);
  }
}
// autocomplete for user search
function autoComplete() {
  let input = document.getElementById("user_search").value; //form user search input
  input = input.toLowerCase();
  const usernames = document.querySelectorAll("#message-form ul li"); //all li's with usernames
  const userContainer = document.querySelector("#message-form ul"); //ul with user names
  userContainer.style.display = "block";
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i].textContent.toLowerCase().includes(input)) {
      usernames[i].style.display = "block";
    } else {
      usernames[i].style.display = "none";
    }
  }
}
// Charts: traffic, daily, mobileuser
let dailyTrafficChart = new Chart(document.getElementById("dailyTrafficChart"), config_2);
let mobileUserChart = new Chart(document.getElementById("mobileUserChart"), config_3);
let trafficChart = new Chart(document.getElementById("trafficChartCanvas"), config_line_Hourly);
//
// elements
const bell = document.querySelector(".bell-vector"); // bell icon
const closeAlert = document.getElementById("close_alert"); //alert button
const trafficNavContainer = document.querySelector(".traffic-nav"); //navigation container div in traffic widget
const messageForm = document.getElementById("message-form"); //message user form div
const settings = document.getElementById("settings-form"); //settings form div
const storage = window.localStorage; //storage
// show user names dropdown
displayUserNames();
//show saved settings
if (storage.set_to_public == "true") {
  document.getElementById("set_to_public").setAttribute("checked", storage.set_to_public);
}
if (storage.email_notification == "true") {
  document.getElementById("email_notification").setAttribute("checked", storage.email_notification);
}
if (storage.time_zone) {
  document.getElementById("timezone").value = storage.time_zone;
}
// ========== Event Listeners ==========
// button alerts icon (bell)
bell.addEventListener("click", () => {
  const notificationList = document.querySelector(".notificationsList"); //ul
  bell.children[1].style.display = "none"; //hide green circle
  //show and hide dropdown
  if (notificationList.style.display === "block") {
    notificationList.style.display = "none";
  } else {
    notificationList.style.display = "block";
  }
});
//button (x) remove notification
bell.nextElementSibling.addEventListener("click", (e) => {
  let x = e.target;
  if (x.tagName === "BUTTON") {
    x.parentNode.remove();
  }
});
//button "close alert:you have unread messages"
closeAlert.addEventListener("click", (e) => {
  let alert_box = closeAlert.parentNode;
  alert_box.style.display = "none";
});
//button "hourly" "daily" "weekly" "monthly"
trafficNavContainer.addEventListener("click", (e) => {
  let button = e.target;
  let chartMap = trafficChart.id; //obtain the current charts id number to map through and switch line charts
  if (trafficChart.id === chartMap) {
    trafficChart.destroy(); //remove current chart
  }
  if (button.tagName === "BUTTON" && button.textContent === "Hourly") {
    // hourly
    const chartLineHourly = new Chart(document.getElementById("trafficChartCanvas"), config_line_Hourly); //initialize new hourly line chart
    chartMap = chartLineHourly.id; //update chartMap variable to the hourly line charts id number (above)
    trafficChart.id = chartLineHourly.id; //update current charts id with chart map
  } else if (button.tagName === "BUTTON" && button.textContent === "Daily") {
    // daily
    const chartLineDaily = new Chart(document.getElementById("trafficChartCanvas"), config_line_Daily);
    chartMap = chartLineDaily.id;
    trafficChart.id = chartLineDaily.id;
  } else if (button.tagName === "BUTTON" && button.textContent === "Weekly") {
    // weekly
    const chartLineWeekly = new Chart(document.getElementById("trafficChartCanvas"), config_line_Weekly);
    chartMap = chartLineWeekly.id;
    trafficChart.id = chartLineWeekly.id;
  } else if (button.tagName === "BUTTON" && button.textContent === "Monthly") {
    //monthly
    const chartLineMonthly = new Chart(document.getElementById("trafficChartCanvas"), config_line_Monthly);
    chartMap = chartLineMonthly.id;
    trafficChart.id = chartLineMonthly.id;
  }
});
//click username from search for user
document.querySelector(".users").addEventListener("click", (e) => {
  let usernamesContainer = document.querySelector(".users"); //ul
  let inputSearch = document.getElementById("user_search");
  let li = e.target;
  if (li.tagName == "LI") {
    inputSearch.value = li.textContent;
    inputSearch.style.borderColor = "rgb(194, 194, 194)";
    usernamesContainer.style.display = "none";
  }
});
// submit message user form
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userSearch = messageForm.firstElementChild; //input search
  let textArea = document.getElementById("text_area"); //text area
  let error = textArea.nextElementSibling; //form error message
  let success = "Alert: Message sent Successful"; //alert message
  if (textArea.value === "" || userSearch.value === "") {
    //error
    textArea.style.borderColor = "red";
    userSearch.style.borderColor = "red";
    error.style.display = "flex";
  } else {
    // success
    error.style.display = "none";
    alert(success);
    textArea.value = "";
    textArea.style.borderColor = "rgb(194, 194, 194)";
    userSearch.value = "";
    userSearch.style.borderColor = "rgb(194, 194, 194)";
  }
});

// clear error when textarea and input search is changed
messageForm.addEventListener("change", (e) => {
  let input = e.target;
  let userSearch = document.getElementById("user_search");
  let error = document.getElementById("error");
  if (input.tagName === "TEXTAREA") {
    input.style.borderColor = "rgb(194, 194, 194)";
  }
  if (input.tagName === "INPUT") {
    input.style.borderColor = "rgb(194, 194, 194)";
    input.value = "";
    userSearch.setAttribute("placeholder", "select a user");
  }
  error.style.display = "none";
});

// save button save settings to storage
settings.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailNotification = document.querySelector("#email_notification");
  const setToPublic = document.querySelector("#set_to_public");
  const timezone = document.getElementById("timezone");
  storage.setItem("email_notification", emailNotification.checked);
  storage.setItem("set_to_public", setToPublic.checked);
  storage.setItem("time_zone", timezone.value);
  alert("settings saved");
});
// reset button, reset settings and storage
settings.addEventListener("reset", (e) => {
  const emailNotification = document.querySelector("#email_notification");
  const setToPublic = document.querySelector("#set_to_public");
  emailNotification.removeAttribute("checked");
  setToPublic.removeAttribute("checked");
  storage.set_to_public = "false";
  storage.email_notification = "false";
  storage.time_zone = "";
});
