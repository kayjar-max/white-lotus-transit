// script.js
const destinations = [
    {
        name: "Santorini, Greece",
        image: "https://picsum.photos/id/1015/800/600",
        price: "From $2,899",
        desc: "Iconic white-washed cliffs and breathtaking sunsets"
    },
    {
        name: "Bali, Indonesia",
        image: "https://picsum.photos/id/1016/800/600",
        price: "From $1,999",
        desc: "Lush rice terraces, temples & pristine beaches"
    },
    {
        name: "Marrakech, Morocco",
        image: "https://picsum.photos/id/133/800/600",
        price: "From $2,499",
        desc: "Vibrant souks, riads and the Atlas Mountains"
    }
];

const testimonials = [
    {
        name: "Sophia Laurent",
        location: "Paris, France",
        text: "The most luxurious and seamless travel experience I've ever had. White Lotus truly puts the customer first.",
        rating: 5
    },
    {
        name: "Ahmed Khalil",
        location: "Dubai, UAE",
        text: "Every detail was perfect. They anticipated our needs before we even realized them. Exceptional service!",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        location: "Madrid, Spain",
        text: "From booking to return, everything exceeded expectations. I can't wait to travel with them again.",
        rating: 5
    }
];

// Render destination cards
function renderDestinations() {
    const container = document.getElementById('destination-cards');
    container.innerHTML = '';
    
    destinations.forEach(dest => {
        const card = document.createElement('div');
        card.className = 'destination-card bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100';
        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.name}" class="w-full h-64 object-cover">
            <div class="p-8">
                <div class="flex justify-between items-start">
                    <h3 class="text-2xl font-serif">${dest.name}</h3>
                    <span class="text-emerald-600 font-semibold">${dest.price}</span>
                </div>
                <p class="text-gray-600 mt-3">${dest.desc}</p>
                <button onclick="selectDestination('${dest.name}')" 
                        class="mt-6 w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-medium transition-colors">
                    Explore This Trip
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Render testimonials
function renderTestimonials() {
    const container = document.getElementById('testimonial-cards');
    container.innerHTML = '';
    
    testimonials.forEach(test => {
        const card = document.createElement('div');
        card.className = 'bg-white p-8 rounded-3xl shadow-xl';
        card.innerHTML = `
            <div class="flex gap-1 mb-6">
                ${Array(test.rating).fill(0).map(() => `<i class="fas fa-star text-amber-400"></i>`).join('')}
            </div>
            <p class="italic text-gray-700 leading-relaxed">"${test.text}"</p>
            <div class="mt-8 flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl"></div>
                <div>
                    <p class="font-semibold">${test.name}</p>
                    <p class="text-sm text-gray-500">${test.location}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Populate destination select
function populateDestinationSelect() {
    const select = document.getElementById('destination-select');
    destinations.forEach(dest => {
        const option = document.createElement('option');
        option.value = dest.name;
        option.textContent = dest.name;
        select.appendChild(option);
    });
}

// Booking form handler
function setupBookingForm() {
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const destination = document.getElementById('destination-select').value;
        const date = document.getElementById('travel-date').value;
        
        if (!destination || !date) {
            alert("Please select a destination and travel date.");
            return;
        }
        
        alert(`Thank you! Your booking request for ${destination} has been received.\n\nOur team will contact you shortly at the provided email.`);
        form.reset();
    });
}

// Contact modal
function showContactModal() {
    document.getElementById('contact-modal').classList.remove('hidden');
    document.getElementById('contact-modal').classList.add('flex');
}

function hideContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Navigation helper
function navigateToSection(section) {
    if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function selectDestination(name) {
    navigateToSection('book');
    const select = document.getElementById('destination-select');
    select.value = name;
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    renderDestinations();
    renderTestimonials();
    populateDestinationSelect();
    setupBookingForm();
    
    // Close modal when clicking outside
    const modal = document.getElementById('contact-modal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideContactModal();
        }
    });
    
    console.log('%cWhite Lotus Transit website loaded successfully ✨', 'color: #6366f1; font-family: serif;');
});