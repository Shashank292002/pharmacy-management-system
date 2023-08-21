// Sample product data (replace with your actual product data)
const products = [
    { id: 1, name: 'PARACETAMOL', description: 'It is used for reducing fever.',url:"pro1.jpg",price:"Price: $60.00",cart:"Add to Cart"},
    { id: 2, name: 'NAPROXEN', description: 'pain releasing medicine.',url:"pro2.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 4, name: 'NICIP PLUS', description: 'helps in relieving pain,inflamation,mild migrain,rheumatiod arthritis.',url:"nicip plus.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 5, name: 'NIMESULIDE', description: 'For pain relief and prevention of fever.',url:"nimesulide.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 6, name: 'CETIRIZINE', description: 'treatment for hay fever.',url:"cetirizine.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 7, name: 'DOLO 650', description: 'fever, nerve pain, toothache,common cold.',url:"dolo 650.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 8, name: 'AZITHROMYCIN', description: 'pneunomonia, bacterail infection, sexual transmited diseases(stds),bronchitis.',url:"azithromycin.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 9, name: 'FARXIGA', description: 'Description of Product 3',url:"Farxiga.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 10, name: 'ABACAVIR', description: 'Description of Product 3',url:"Abacavir.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 11, name: 'GILENYA', description: 'Description of Product 3',url:"Gilenya.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 12, name: 'IBUPROFEN', description: 'Description of Product 3',url:"Ibuprofen.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 13, name: 'JARDIANCE', description: 'Description of Product 3',url:"Jardiance.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 14, name: 'MELATONIN', description: 'Description of Product 3',url:"Melatonin.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 15, name: 'NALTREXONE', description: 'Description of Product 3',url:"Naltrexone.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 16, name: 'NARCAN', description: 'Description of Product 3',url:"Narcan.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 17, name: 'ACETAMINOPHEN', description: 'Description of Product 3',url:"acetaminophen.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 18, name: 'AMITRIPTYLINE', description: 'Description of Product 3',url:"Amitriptyline.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 18, name: 'AMLODIPINE', description: 'Description of Product 3',url:"Amlodipine.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 18, name: 'AMOXICILLIN', description: 'Description of Product 3',url:"Amoxicillin.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    { id: 18, name: 'BENZONATATE', description: 'Description of Product 3',url:"Benzonatate.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    // { id: 18, name: 'FARXIGA', description: 'Description of Product 3',url:"Amitriptyline.jpg",price:"Price: $20.00",cart:"Add to Cart" },
    // { id: 18, name: 'FARXIGA', description: 'Description of Product 3',url:"Amitriptyline.jpg",price:"Price: $20.00",cart:"Add to Cart" },

    // Add more products as needed
];

// Function to perform a search
function searchProducts(query) {
    query = query.toLowerCase();
    const results = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
        // product.Image.toLowerCase().includes(query)
    );
    return results;
}

// Function to display search results
function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `
            <img src="${result.url}" alt="${result.name}">
                <h2>${result.name}</h2>
                <p>${result.description}</p>
                <p>${result.price}</p>
                <button>${result.cart}</button>
            `;
            resultsContainer.appendChild(resultElement);
        });
    }
}

// Search button click event
document.getElementById('search-button').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();

    if (query !== '') {
        const searchResults = searchProducts(query);
        displayResults(searchResults);
    } else {
        alert('Please enter a search query.');
    }
});

// Handle search on Enter key press
document.getElementById('search-input').addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
