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
};

const addH2 = () => {
};

const removeOldInfo = () => {
};

const makeAlphabet = () => {
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
