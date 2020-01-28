const pies = [
    {
      name: "Dutch Apple Pie",
      price: 1000,
      isWarm: true,
      isOrganic: true,
      crust: "extra flakey",
      iceCream: "Vanilla Bean",
      isAvailable: true,
      imageUrl: "https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg",
      drinkPairing: "whiskey",
      instructor: "Zoe"
    },
    {
      name: "Regular Apple Pie",
      price: 5000,
      isWarm: true,
      isOrganic: true,
      crust: "under baked",
      iceCream: "Vegan chocolate",
      isAvailable: false,
      imageUrl: "https://thumbs.dreamstime.com/z/apple-pie-caramel-chocolate-ice-cream-9465176.jpg",
      drinkPairing: "All Wines",
      instructor: "Mary"
    },
    {
      name: "Pizza Pie",
      price: 2.5,
      isWarm: true,
      isOrganic: false,
      crust: "yeah!",
      iceCream: "nope",
      isAvailable: true,
      imageUrl: "https://www.meals.com/imagesrecipes/144032lrg.jpg",
      drinkPairing: "High Life",
      instructor: "Luke"
    },
    {
      name: "Berry Pie",
      price: 1,
      isWarm: false,
      isOrganic: false,
      crust: "Oreo",
      iceCream: "Peanut Butter",
      isAvailable: true,
      imageUrl: "",
      drinkPairing: "Water",
      instructor: "Zoe"
    },
    {
      name: "Chocolate",
      price: 1,
      isWarm: false,
      isOrganic: true,
      crust: "graham",
      iceCream: "Mint",
      isAvailable: true,
      imageUrl: "https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/4105-3-large.jpg?itok=tYDq8G4b",
      drinkPairing: "Gin",
      instructor: "Mary"
    },
    {
      name: "Pi",
      price: 3.14,
      isWarm: false,
      isOrganic: true,
      crust: "Crumb",
      iceCream: "Moose Tracks",
      isAvailable: true,
      imageUrl: "https://live.staticflickr.com/1255/5110009533_3e505c7dca_b.jpg",
      drinkPairing: "Milk",
      instructor: "Luke"
    },
    {
      name: "Pumpkin",
      price: 300,
      isWarm: false,
      isOrganic: true,
      crust: "Regular",
      iceCream: "Pumpkin",
      isAvailable: true,
      imageUrl: "https://www.skinnytaste.com/wp-content/uploads/2015/10/PumpkinPie.jpg",
      drinkPairing: "Oil",
      instructor: "Greg"
    },
    {
      name: "Pecan",
      price: 3,
      isWarm: true,
      isOrganic: false,
      crust: "Filo",
      iceCream: "Melted Chocolate",
      isAvailable: false,
      imageUrl: "https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg",
      drinkPairing: "Almond Milk",
      instructor: "Greg"
    }
  ];
  console.log('pies', pies);

  // 3 cards to a row 
  // nice big images 
  // display all information in the pie objects 
  


   const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };
  
  const pieBuilder = () => {
    let domString = '';
    for(let i = 0; i < pies.length; i++) {
        domString += `<div class="pieCard">`;
        domString += `<header class="name"><h2>${pies[i].name}</h2></header>`;
        domString += `<section ><img class="imageUrl" src=${pies[i].imageUrl}</section>`;
        domString += `<section class="price">${pies[i].price}</section>`;
        domString += `<section class="iceCream">${pies[i].iceCream}</section>`;
        domString += `<section class="drinkPairing">${pies[i].drinkPairing}</section>`;
        domString += `<section class="isWarm">${pies[i].isWarm}</section>`;
        domString += `<section class="instructor">${pies[i].instructor}</section>`;
        domString += `<section class="isAvailable">${pies[i].isAvailable}</section>`;
        domString += `<footer class="crust">${pies[i].crust}</section>`;
        domString += `</div>`;
    }
    printToDom('Pet-barn', domString);
  };
  
  pieBuilder();
  
  
  