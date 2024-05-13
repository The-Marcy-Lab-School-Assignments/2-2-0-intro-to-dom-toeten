const getMainHeadingText = () => {
  const mainHeading = document.querySelector("#main-heading")
  console.log(mainHeading.textContent)
};

const getAllMainText = () => {
  const mainText = document.querySelectorAll(".main-text")
  let newString = ""
  mainText.forEach((element, index) => {
    newString += `${element.textContent}${index < mainText.length - 1 ? "," : ""}`
  });
  console.log(newString)
};

const setSubtitleText = () => {
  const headingTwo = document.getElementById("subtitle")
  headingTwo.textContent = "This is a subtitle!"
};

const modifyDivClassList = () => {
  const div = document.getElementById("modify-classes")
  const divClass = div.classList
  divClass.remove("bad-class")
  divClass.add("new-class")
};

const addH2 = () => {
 const newH2 = document.createElement("h2")
  newH2.textContent = "Another one!"
  newH2.id = "h2-test"
  document.body.append(newH2)
  //console.log(newH2)
};

const removeOldInfo = () => {
  const oldie = document.getElementById("old-info")
  oldie.remove()
};

const makeAlphabet = () => {
  const list = document.querySelector("#alphabet")
  let alpha = Number(list.dataset.numLetters);
  //the number of alpha is not actually a number; its a string! so we have to convert it to a number
  //console.log(alpha)
  for (let i = 0; i < alpha; i++) {
    const newLi = document.createElement("li")
    const letter = String.fromCharCode(65 + i) 
    //Need to convert ascii values to actual letters -> 
    //we can also create an alphabet variable
    //and set each letter equal to alphabet[i]
    newLi.textContent = `${letter} is letter #${i+1} in the alphabet`
    list.append(newLi)
  }
};

const makeBio = () => {
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
