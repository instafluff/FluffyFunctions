module.exports = async function (context, req) {
  context.log("RandomFood function processed a request.");

  // A giant list of fun foods
  const funFoods = [
    "Lasagna",
    "Pizza",
    "Sushi",
    "Tacos",
    "Ramen",
    "Burrito",
    "Gelato",
    "Cheeseburger",
    "Pho",
    "Pad Thai",
    "Currywurst",
    "Falafel",
    "Poutine",
    "Dim Sum",
    "Kebab",
    "Hot Dog",
    "Waffles",
    "Biryani",
    "Empanadas",
    "Gumbo",
    "Paella",
    "Donuts",
    "Cupcake",
    "Churros",
    "Steak",
    "Bruschetta",
    "Ceviche",
    "Bibimbap",
    "Crepes",
    "Nachos",
    "Souvlaki",
    "Banh Mi",
    "Pierogi",
    "Mac and Cheese",
    "Fajitas",
    "Shawarma",
    "Curry",
    "Risotto"
  ];

  // Pick a random food from the list.
  const randomIndex = Math.floor(Math.random() * funFoods.length);
  const randomFood = funFoods[randomIndex];

  context.res = {
    status: 200,
    body: `${randomFood}!`
  };
};
