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
