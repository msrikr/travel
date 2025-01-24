function navigateTo(section) {
   
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => sec.classList.add("hidden"));

    
    const targetSection = document.getElementById(section);
    if (targetSection) {
        targetSection.classList.remove("hidden");

        
        targetSection.scrollIntoView({
            behavior: "smooth", 
            block: "start",     
        });
    }
}



function searchDestinations() {
    const searchInput = document.getElementById("search-input").value;
    const resultsContainer = document.getElementById("results-container");

    if (searchInput.trim() === "") {
        resultsContainer.innerHTML = "<p>Please enter a destination to search.</p>";
    } else {
        resultsContainer.innerHTML = `<p>Showing results for "${searchInput}"</p>`;
    }
}

function clearResults() {
    document.getElementById("search-input").value = "";
    document.getElementById("results-container").innerHTML = "";
}


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
    this.reset();
});

const destinations = {
    "london": [
        { name: "London Eye", description: "A giant Ferris wheel on the South Bank of the River Thames.", },
        { name: "Big Ben", description: "The iconic clock tower in London.", image: "https://images.search.yahoo.com/images/view" }
    ],
    "australia": [
        { name: "Sydney Opera House", description: "A multi-venue performing arts center in Sydney.", image: "https://via.placeholder.com/300x200" },
        { name: "Great Barrier Reef", description: "The world's largest coral reef system.", image: "https://via.placeholder.com/300x200" }
    ],
    "india": [
        { name: "Taj Mahal", description: "A white marble mausoleum in Agra.", image: "https://via.placeholder.com/300x200" },
        { name: "Jaipur", description: "The Pink City of India known for its historic forts.", image: "https://via.placeholder.com/300x200" }
    ]
};

function searchDestinations() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    if (destinations[query]) {
        destinations[query].forEach(destination => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${destination.image}" alt="${destination.name}">
                <div class="info">
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                </div>
            `;
            resultsContainer.appendChild(card);
        });
    } else {
        resultsContainer.innerHTML = '<p>No destinations found. Try searching for "london", "australia", or "india".</p>';
    }
}

function clearResults() {
    document.getElementById('search-input').value = '';
    document.getElementById('results-container').innerHTML = '';
}
