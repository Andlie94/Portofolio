export async function fetchProductData() {
  try {

    const response = await fetch(
  new URL("../../data/products.json", import.meta.url)
);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    console.log('Data fetched:', data); 
    return data; 
  } catch (error) {
console.error("Error fetching data:", error);
  }
}
console.log(fetchProductData)
