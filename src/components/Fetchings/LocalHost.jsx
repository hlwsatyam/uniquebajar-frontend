// export const StoredSearchedItems = localStorage.getItem("searchedTerms");
export const getSearchedItems = () => {
  return (JSON.parse(localStorage.getItem("searchHistory")) || []).slice(0, 6);
};
export const getLatestCart = () => {
  return (JSON.parse(localStorage.getItem("card")) || []);
};

export let exploredItem = [
  "chocolate",
  "drink",
  "skin cream",
  "wax",
  "fash wash",
  "mehendi",
  "toothpaste",
  "pulses",
  "makhana",
  "almonds",
];

export const isCookieAccept = localStorage.getItem("CookieConsent");

export const searchHistory = (tag) => {
  let oldSearch = JSON.parse(localStorage.getItem("searchHistory")) || [];

  // Check if the tag is not already in the search history
  if (!oldSearch.includes(tag)) {
    // Add the tag to the beginning of the array
    const updatedHistory = [tag, ...oldSearch.slice(0, 9)]; // Keep the latest 10 searches
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  }
  // If the tag is already in the search history, you can choose to handle it accordingly
  // For example, you may want to move it to the beginning of the array
};

export const addToCartLocalHost = (productId) => {
  // Retrieve the current shopping cart from localStorage or initialize an empty array.
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product is not already in the cart before adding.
  if (!currentCart.includes(productId)) {
    // Add the product to the cart.
    currentCart.push(productId);

    // Update the cart in localStorage.
    localStorage.setItem("cart", JSON.stringify(currentCart));

    // Return the updated cart for further processing or display.
    return currentCart;
  }

  // Return the current cart if the product is already in it.
  return currentCart;
};
