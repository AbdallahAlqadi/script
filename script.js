const appointments = []; // Array to store appointments

// Function to generate the calendar grid
function generateCalendar(date) {
  const calendar = document.querySelector('.calendar');
  calendar.innerHTML = ''; // Clear previous calendar

  const d = new Date(date);
  const month = d.getMonth();
  const year = d.getFullYear();

  // Get the first day of the month
  const firstDay = new Date(year, month, 1);

  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get the day of the week for the first day of the month
  const dayOfWeek = firstDay.getDay();

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < dayOfWeek; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('calendar-day');
    calendar.appendChild(emptyCell);
  }

  // Add days for the current month
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.classList.add('calendar-day');
    day.innerText = i;

    // Mark the current day
    if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
      day.classList.add('current-day');
    }

    // Add click event listener to each day (implementation for updating appointments based on selected date can be added here)
    day.addEventListener('click', () => {
      // Your logic for handling selected date
    });

    calendar.appendChild(day);
  }
}

// Function to add a new appointment
function addAppointment(title, date, time) {
  // Create a new appointment object
  const newAppointment = {
    title,
    date,
    time,
    // Additional property for sorting: convert date and time to a single comparable value
    sortValue: new Date(date + 'T' + time).getTime()
  };

  // Add the new appointment to the appointments array while maintaining chronological order
  appointments.push(newAppointment);
  appointments.sort((a, b) => a.sortValue - b.sortValue);

  updateAppointmentList(); // Update appointment list after adding
}

// Function to update the list of appointments
function updateAppointmentList() {
  const appointmentList = document.getElementById('appointment-list');
  appointmentList.innerHTML = ''; // Clear previous list

  appointments.forEach(appointment => {
    const appointmentItem = document.createElement('li');
    appointmentItem.innerText = `${appointment.title} - ${appointment.date} ${appointment.time}`;
    appointmentList.appendChild(appointmentItem);
  });
}

// Handle form submission for adding appointments
const appointmentForm = document.getElementById('add-appointment-form');
appointmentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (title && date && time) {
    addAppointment(title, date, time);
    // Clear form fields after successful submission (optional)
    this.reset();
  } else {
    // Handle form validation errors (optional)
  }
});

// Generate the calendar for the current date on page load
generateCalendar(new Date());
