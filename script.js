let stores = [
    { name: "Allen Solly", link: "Allensolly.html" },
    { name: "Armani", link: "Armani.html" },
    { name: "Baker-Bliss", link: "Baker-Bliss.html" },
    { name: "Bata", link: "bata.html" },
    { name: "BIBA", link: "BIBA.html" },
    { name: "Coffee-Corner", link: "coffee-corner.html" },
    { name: "Dessert-Heaven", link: "Dessert-Heaven.html" },
    { name: "FABINDIA", link: "FABINDIA.html" },
    { name: "Fast-Bites", link: "Fast-Bites.html" },
    { name: "Footwear", link: "footwear.html" },
    { name: "H&M", link: "H&M.html" },
    { name: "Haldirams", link: "Haldirams.html" },
    { name: "Home", link: "Home.html" },
    { name: "KFC", link: "Kfc.html" },
    { name: "Kidswear", link: "Kidswear.html" },
    { name: "Mamaearth", link: "mamaearth.html" },
    { name: "Mensfashion", link: "Mensfashion.html" },
    { name: "Naykaa", link: "naykaa.html" },
    { name: "Pizza Hut", link: "Pizza hut.html" },
    { name: "Plum", link: "plum.html" },
    { name: "Register", link: "register.html" },
    { name: "Royal-Indian", link: "Royal-Indian.html" },
    { name: "Street-Eats", link: "Street-Eats.html" },
    { name: "Sushi-Spot", link: "Sushi-Spot.html" },
    { name: "Womensfashion", link: "womensfashion.html" },
    { name: "Wow Momos", link: "Wow momos.html" },
    { name: "ZARA", link: "ZARA.html" }
];

function searchStores() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let suggestionsBox = document.getElementById("suggestionsBox");

    if (input.trim() === "") {
        suggestionsBox.innerHTML = "";
        suggestionsBox.style.display = "none";
        return;
    }

    let matches = stores.filter(store => store.name.toLowerCase().includes(input));

    if (matches.length === 0) {
        suggestionsBox.innerHTML = `<div class="no-result">No results found</div>`;
    } else {
        suggestionsBox.innerHTML = matches.map(store => 
            `<div class="suggestion-item" onclick="selectStore('${store.name}', '${store.link}')">${highlightMatch(store.name, input)}</div>`
        ).join("");
    }

    suggestionsBox.style.display = "block";
}

function highlightMatch(name, input) {
    let regex = new RegExp(`(${input})`, "gi");
    return name.replace(regex, `<span class="highlight">$1</span>`);
}

function selectStore(name, link) {
    document.getElementById("searchInput").value = name;
    document.getElementById("suggestionsBox").style.display = "none";
    window.location.href = link;
}

document.addEventListener("click", function(event) {
    if (!event.target.closest(".search-container")) {
        document.getElementById("suggestionsBox").style.display = "none";
    }
});
