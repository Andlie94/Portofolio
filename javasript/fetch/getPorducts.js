export async function fetchProductData() {
  try {

    const response = await fetch("/data/products.json");
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