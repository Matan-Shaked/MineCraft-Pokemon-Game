"use strict";

// Elements

const earth = document.querySelectorAll(".earth_ingredients");

const mainContainer = document.querySelector(".mainContainer");
const theCentralContainer = document.querySelector(".central_container");
const theRightMenu = document.querySelector(".right__menu__container");
const theUpperMenu = document.querySelector(".upper__menu__row");

const rightButtons = document.querySelectorAll(".btn__right__menu");
const axe = document.getElementById("btn__axe");
const picaxe = document.getElementById("btn__picaxe");
const shovel = document.getElementById("btn__shovel");
const sword = document.getElementById("btn__sword");

const leavesBtn = document.getElementById("btn__leaves");
const treeBtn = document.getElementById("btn__tree");
const rockBtn = document.getElementById("btn__rock");
const groundBtn = document.getElementById("btn__ground");
const grassBtn = document.getElementById("btn__grass");
const brickBtn = document.getElementById("btn__brick");

const leavesNum = document.getElementById("number_leaves");
const treeNum = document.getElementById("number_tree");
const rockNum = document.getElementById("number_rock");
const groundNum = document.getElementById("number_ground");
const grassNum = document.getElementById("number_grass");
const brickNum = document.getElementById("number_brick");

const surprisePic = document.querySelector(".btn__surprise");
const surpriseText = document.querySelector(".button__text__surprise");

const reloadBtn = document.querySelector(".btn__reload");

//creating an object of matching between class to numbers
const earthObjClasses = {
  sky: "sky",
  cloud: "cloud",
  leaves: "leaves",
  tree: "tree",
  rock: "rock",
  ground: "ground",
  grass: "grass",
  brick: "brick",
};

//buliding the map with array of arrays - the order is important so I use array.

const earthMap = [
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0],
  [7, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 2, 2, 2, 0, 0],
  [7, 7, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 3, 0, 0, 0],
  [7, 7, 7, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 3, 0, 0, 0],
  [7, 7, 7, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 3, 0, 0, 0],
  [7, 7, 7, 7, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 3, 0, 0, 0],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
];

//Creating cells that will be inside the parent element of theCentralContainer
//Connecting between each cell to the proper class to show it on the HTML file

earthMap.forEach(function (row) {
  row.forEach(function (cell) {
    const filledCell = document.createElement("div");

    switch (cell) {
      case 0:
        filledCell.classList.add(earthObjClasses.sky);
        break;
      case 1:
        filledCell.classList.add(earthObjClasses.cloud);
        break;
      case 2:
        filledCell.classList.add(earthObjClasses.leaves);
        break;
      case 3:
        filledCell.classList.add(earthObjClasses.tree);
        break;
      case 4:
        filledCell.classList.add(earthObjClasses.rock);
        break;
      case 5:
        filledCell.classList.add(earthObjClasses.ground);
        break;
      case 6:
        filledCell.classList.add(earthObjClasses.grass);
        break;
      case 7:
        filledCell.classList.add(earthObjClasses.brick);
        break;
    }
    theCentralContainer.appendChild(filledCell);
  });
});

let leaves = document.querySelectorAll(".leaves");
let tree = document.querySelectorAll(".tree");
let rock = document.querySelectorAll(".rock");
let ground = document.querySelectorAll(".ground");
let grass = document.querySelectorAll(".grass");
let sky = document.querySelectorAll(".sky");
const cloud = document.querySelectorAll(".cloud");

const leavesNumber = document.getElementById("number_leaves");
const treeNumber = document.getElementById("number_tree");
const rockNumber = document.getElementById("number_rock");
const groundNumber = document.getElementById("number_ground");
const grassNumber = document.getElementById("number_grass");

//General event handelers

const tools = {
  axe: "axe",
  picaxe: "picaxe",
  shovel: "shovel",
  sword: "sword",
  leavesBtn: "leavesBtn",
  treeBtn: "treeBtn",
  rockBtn: "rockBtn",
  groundBtn: "groundBtn",
  grassBtn: "grassBtn",
  brickBtn: "brickBtn",
};

const toolsDom = {
  axe,
  picaxe,
  shovel,
  sword,
  leavesBtn,
  treeBtn,
  rockBtn,
  groundBtn,
  grassBtn,
  brickBtn,
};

const earthMaterials = {
  cloud: "cloud",
  sky: "sky",
  tree: "tree",
  leaves: "leaves",
  rock: "rock",
  brick: "brick",
  grass: "grass",
  ground: "ground",
};

const colors = {
  red: "red",
  blue: "blue",
  inherit: "inherit",
  redBorder: "redBorder",
};

const objToolGetsMaterials = {
  axe: { classes: ["tree", "leaves"] },
  picaxe: { classes: ["rock", "brick"] },
  shovel: { classes: ["grass", "ground"] },
  sword: { classes: ["tree", "leaves", "rock", "brick"] },
};

//Adding classes that connects between buttons to materials
axe.classList.add(objToolGetsMaterials.axe.classes);
picaxe.classList.add(objToolGetsMaterials.picaxe.classes);
shovel.classList.add(objToolGetsMaterials.shovel.classes);
sword.classList.add(objToolGetsMaterials.sword.classes);

//styling the background and the borders when there is a click on different elements
let theTool = "";
let otherTools = "";
let theToolDom = "";

Object.keys(toolsDom).forEach((tool) => {
  switch (tool) {
    case "axe":
      axe.addEventListener("click", () => {
        theToolDom = toolsDom.axe;
        theTool = tools.axe;
        theToolDom.classList.add(colors.blue);
        Object.keys(toolsDom)
          .filter((tool) => tool !== theTool)
          .forEach((tool) => {
            otherTools = toolsDom[tool];
            otherTools.classList.remove(colors.blue);
          });
      });
      break;
    case "picaxe":
      picaxe.addEventListener("click", () => {
        theToolDom = toolsDom.picaxe;
        theTool = tools.picaxe;
        theToolDom.classList.add(colors.blue);
        Object.keys(toolsDom)
          .filter((tool) => tool !== theTool)
          .forEach((tool) => {
            otherTools = toolsDom[tool];
            otherTools.classList.remove(colors.blue);
          });
      });
      break;
    case "shovel":
      shovel.addEventListener("click", () => {
        theToolDom = toolsDom.shovel;
        theTool = tools.shovel;
        theToolDom.classList.add(colors.blue);
        Object.keys(toolsDom)
          .filter((tool) => tool !== theTool)
          .forEach((tool) => {
            otherTools = toolsDom[tool];
            otherTools.classList.remove(colors.blue);
          });
      });
      break;
    case "sword":
      sword.addEventListener("click", () => {
        theToolDom = toolsDom.sword;
        theTool = tools.sword;
        theToolDom.classList.add(colors.blue);
        Object.keys(toolsDom)
          .filter((tool) => tool !== theTool)
          .forEach((tool) => {
            otherTools = toolsDom[tool];
            otherTools.classList.remove(colors.blue);
          });
      });
      break;

    case "leavesBtn":
      leavesBtn.addEventListener("click", () => {
        theToolDom = toolsDom.leavesBtn;
        theTool = tools.leavesBtn;
        theToolDom.classList.add(colors.redBorder);
        Object.keys(toolsDom)
          .filter((tool) => tool !== theTool)
          .forEach((tool) => {
            otherTools = toolsDom[tool];
            otherTools.classList.remove(colors.redBorder);
            otherTools.classList.remove(colors.blue);
          });
      });
      break;

    case "treeBtn":
      treeBtn.addEventListener("click", () => {
        theToolDom = toolsDom.treeBtn;
        theTool = tools.treeBtn;
        theToolDom.classList.add(colors.redBorder);
        Object.keys(toolsDom)
          .filter((tool) => tool !== theTool)
          .forEach((tool) => {
            otherTools = toolsDom[tool];
            otherTools.classList.remove(colors.redBorder);
            otherTools.classList.remove(colors.blue);
          });
      });
      break;

    case "rockBtn":
      rockBtn.addEventListener("click", () => {
        theToolDom = toolsDom.rockBtn;
        theTool = tools.rockBtn;
        theToolDom.classList.add(colors.redBorder);
        Object.keys(toolsDom)
          .filter((tool) => tool !== theTool)
          .forEach((tool) => {
            otherTools = toolsDom[tool];
            otherTools.classList.remove(colors.redBorder);
            otherTools.classList.remove(colors.blue);
          });
      });
      break;

    case "groundBtn":
      groundBtn.addEventListener("click", () => {
        theToolDom = toolsDom.groundBtn;
        theTool = tools.groundBtn;
        theToolDom.classList.add(colors.redBorder);
        Object.keys(toolsDom)
          .filter((tool) => tool !== theTool)
          .forEach((tool) => {
            otherTools = toolsDom[tool];
            otherTools.classList.remove(colors.redBorder);
            otherTools.classList.remove(colors.blue);
          });
      });
      break;

    case "grassBtn":
      grassBtn.addEventListener("click", () => {
        theToolDom = toolsDom.grassBtn;
        theTool = tools.grassBtn;
        theToolDom.classList.add(colors.redBorder);
        Object.keys(toolsDom)
          .filter((tool) => tool !== theTool)
          .forEach((tool) => {
            otherTools = toolsDom[tool];
            otherTools.classList.remove(colors.redBorder);
            otherTools.classList.remove(colors.blue);
          });
      });
      break;

    case "brickBtn":
      brickBtn.addEventListener("click", () => {
        theToolDom = toolsDom.brickBtn;
        theTool = tools.brickBtn;
        theToolDom.classList.add(colors.redBorder);
        Object.keys(toolsDom)
          .filter((tool) => tool !== theTool)
          .forEach((tool) => {
            otherTools = toolsDom[tool];
            otherTools.classList.remove(colors.redBorder);
            otherTools.classList.remove(colors.blue);
          });
      });
      break;
  }
});

//turn to blue from red background - functions that are just values
function axeReturnToblue() {
  axe.classList.remove("red");
  axe.classList.add("blue");
}

function picaxeReturnToblue() {
  picaxe.classList.remove("red");
  picaxe.classList.add("blue");
}
function shovelReturnToblue() {
  shovel.classList.remove("red");
  shovel.classList.add("blue");
}
function swordReturnToblue() {
  sword.classList.remove("red");
  sword.classList.add("blue");
}

const duration = 500;

//the pokemon Dice - I will use it inside the addEventListener

const randomArrOfPokemon = [
  "pokemon1",
  "pokemon2",
  "pokemon3",
  "pokemon4",
  "pokemon5",
  "pokemon6",
  "pokemon7",
];

const showPokemon = () => {
  const count = Object.keys(randomArrOfPokemon).length;
  let dice = Math.trunc(Math.random() * count);
  let thePokemon = randomArrOfPokemon[dice];
  console.log(thePokemon);
  return thePokemon;
};

const pokemonFit = (bigPokemon) => {
  const pokemonHolder = document.createElement("div");
  pokemonHolder.className = bigPokemon;
  pokemonHolder.classList.add("fit_pokemon");
  surprisePic.appendChild(pokemonHolder);
};

//using switch to handle each tool's effects with only one addEventListener

theCentralContainer.addEventListener("click", (e) => {
  switch (theTool) {
    case "axe":
      if (
        axe.className.includes(e.target.className) &&
        e.target.className === earthMaterials.leaves
      ) {
        leavesNum.innerText = +leavesNum.innerText + 1;
        e.target.className = earthMaterials.sky;
      } else if (
        axe.className.includes(e.target.className) &&
        e.target.className === earthMaterials.tree
      ) {
        treeNum.innerText = +treeNum.innerText + 1;
        e.target.className = earthMaterials.sky;
      } else {
        axe.classList.add("red");
        axe.classList.remove("blue");
        setTimeout(axeReturnToblue, duration);
      }
      break;
    case "picaxe":
      if (
        picaxe.className.includes(e.target.className) &&
        e.target.className === earthMaterials.rock
      ) {
        rockNum.innerText = +rockNum.innerText + 1;
        e.target.className = earthMaterials.sky;
      } else if (
        picaxe.className.includes(e.target.className) &&
        e.target.className === earthMaterials.brick
      ) {
        brickNum.innerText = +brickNum.innerText + 1;
        e.target.className = earthMaterials.sky;
      } else {
        picaxe.classList.add("red");
        picaxe.classList.remove("blue");
        setTimeout(picaxeReturnToblue, duration);
      }
      break;

    case "sword":
      if (
        axe.className.includes(e.target.className) &&
        e.target.className === earthMaterials.leaves
      ) {
        leavesNum.innerText = +leavesNum.innerText + 1;
        e.target.className = earthMaterials.sky;
      } else if (
        axe.className.includes(e.target.className) &&
        e.target.className === earthMaterials.tree
      ) {
        treeNum.innerText = +treeNum.innerText + 1;
        e.target.className = earthMaterials.sky;
      } else if (
        sword.className.includes(e.target.className) &&
        e.target.className === earthMaterials.rock
      ) {
        rockNum.innerText = +rockNum.innerText + 1;
        e.target.className = earthMaterials.sky;
      } else if (
        sword.className.includes(e.target.className) &&
        e.target.className === earthMaterials.brick
      ) {
        brickNum.innerText = +brickNum.innerText + 1;
        e.target.className = earthMaterials.sky;
      } else {
        sword.classList.add("red");
        sword.classList.remove("blue");
        setTimeout(swordReturnToblue, duration);
      }
      break;
    case "shovel":
      if (
        shovel.className.includes(e.target.className) &&
        e.target.className === earthMaterials.ground
      ) {
        groundNum.innerText = +groundNum.innerText + 1;
        e.target.className = showPokemon();
        pokemonFit(e.target.className);
      } else if (
        shovel.className.includes(e.target.className) &&
        e.target.className === earthMaterials.grass
      ) {
        grassNum.innerText = +grassNum.innerText + 1;
        e.target.className = showPokemon();
        pokemonFit();
      } else {
        shovel.classList.add("red");
        shovel.classList.remove("blue");
        setTimeout(shovelReturnToblue, duration);
      }
      break;

    case "leavesBtn":
      if (leavesNum.innerText > 0 && e.target.className === "sky") {
        leavesNum.innerText = leavesNum.innerText - 1;
        e.target.className = "leaves";
      }
      break;
    case "treeBtn":
      if (treeNum.innerText > 0 && e.target.className === "sky") {
        treeNum.innerText = treeNum.innerText - 1;
        e.target.className = "tree";
      }
      break;
    case "rockBtn":
      if (rockNum.innerText > 0 && e.target.className === "sky") {
        rockNum.innerText = rockNum.innerText - 1;
        e.target.className = "rock";
      }
      break;
    case "groundBtn":
      if (groundNum.innerText > 0 && e.target.className === "sky") {
        groundNum.innerText = groundNum.innerText - 1;
        e.target.className = "ground";
      }
      break;
    case "grassBtn":
      if (grassNum.innerText > 0 && e.target.className === "sky") {
        grassNum.innerText = grassNum.innerText - 1;
        e.target.className = "grass";
      }
      break;
    case "brickBtn":
      if (brickNum.innerText > 0 && e.target.className === "sky") {
        brickNum.innerText = brickNum.innerText - 1;
        e.target.className = "brick";
      }
      break;
  }
});

//Reload the game
reloadBtn.addEventListener("click", function () {
  location.reload();
});
