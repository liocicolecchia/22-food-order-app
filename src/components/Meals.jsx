function Meals() {
  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");

    if (!response.ok) {
      // alsk
    }

    const meals = await response.json();
  }

  return <ul id="meals"></ul>;
}

export default Meals;
