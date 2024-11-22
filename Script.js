// Select elements
const itemForm = document.getElementById('itemForm');
const festivalsList = document.getElementById('festivals');
const eventsList = document.getElementById('events');

// Preloaded festivals and events
const initialData = {
  festivals: [
    { title: "Diwali Celebration", date: "2024-11-25", description: "Celebrate the festival of lights.", price: 20, review: "A magical evening filled with joy!" },
    { title: "Christmas Carnival", date: "2024-12-25", description: "A festive carnival for all ages.", price: 50, review: "Perfect for the holiday spirit." },
    { title: "Spring Blossom Festival", date: "2024-03-20", description: "Enjoy the beauty of spring blossoms.", price: 15, review: "A peaceful and refreshing experience." },
    { title: "Food Fiesta", date: "2024-05-05", description: "Indulge in a variety of world cuisines.", price: 30, review: "Heaven for food lovers!" },
    { title: "Cultural Extravaganza", date: "2024-06-15", description: "Celebrate diverse cultures and traditions.", price: 25, review: "Eye-opening and entertaining!" },
    { title: "Summer Music Festival", date: "2024-07-10", description: "Live music under the stars.", price: 40, review: "Amazing performances and great vibes." },
  ],
  events: [
    { title: "Tech Expo 2024", date: "2024-12-10", description: "Discover the latest tech innovations.", price: 100, review: "Incredibly insightful." },
    { title: "Community Marathon", date: "2024-12-18", description: "Run for a cause and make a difference.", price: 30, review: "A rewarding experience for all participants." },
    { title: "Art & Design Exhibition", date: "2024-02-12", description: "Featuring work from talented local artists.", price: 20, review: "Inspirational and thought-provoking." },
    { title: "Startup Pitch Day", date: "2024-04-22", description: "Connect startups with potential investors.", price: 120, review: "A fantastic networking opportunity." },
    { title: "Outdoor Yoga Retreat", date: "2024-08-01", description: "Relax and rejuvenate in a serene environment.", price: 50, review: "Soothing and energizing." },
    { title: "Comedy Night Live", date: "2024-09-15", description: "A night of laughter and entertainment.", price: 35, review: "Hilarious and unforgettable!" },
  ],
};

// Function to display an item
function displayItem(category, item) {
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${item.title}</h3>
    <p><strong>Date:</strong> ${item.date}</p>
    <p>${item.description}</p>
    <p class="price"><strong>Price:</strong> $${item.price}</p>
    <p class="review"><strong>Review:</strong> "${item.review}"</p>
    <button class="delete">Delete</button>
  `;

  if (category === 'festival') {
    festivalsList.appendChild(li);
  } else if (category === 'event') {
    eventsList.appendChild(li);
  }
}

// Load initial data
initialData.festivals.forEach((festival) => displayItem('festival', festival));
initialData.events.forEach((event) => displayItem('event', event));

// Event listener for form submission
itemForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const type = document.getElementById('type').value;
  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const review = document.getElementById('review').value;

  // Create a new item object
  const newItem = {
    title,
    date,
    description,
    price: parseFloat(price),
    review,
  };

  // Display the new item
  displayItem(type, newItem);

  // Clear the form
  itemForm.reset();
});

// Event listener for deleting items
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.closest('li').remove();
  }
});
