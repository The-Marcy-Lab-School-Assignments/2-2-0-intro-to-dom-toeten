/** FEEDBACK: Great job getting all test cases to pass! Make sure to build the habit of removing any commented out code that is not needed! */
const getMainHeadingText = () => {
  const mainHeading = document.querySelector("#main-heading")
  console.log(mainHeading.textContent)
};

const getAllMainText = () => {
  const mainText = document.querySelectorAll(".main-text")
  let arr = []
  mainText.forEach((element) => {
    arr.push(element.textContent)
  });
  let newString = arr.join(",")
  console.log(newString)
};
//shoutout kelly for the inspo 

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
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < alpha; i++) {
    const newLi = document.createElement("li")
    const letter = alphabet[i];
    newLi.textContent = `${letter} is letter #${i+1} in the alphabet`
    list.append(newLi)
  }
};

  //the number of alpha is not actually a number; its a string! -> dataset returns a string
  //so we have to convert it to a number

const makeBio = () => {
  const bio = document.getElementById("my-bio")
  const changedBio = bio.innerHTML = `
    <h2 id="bio-heading">About Me</h2>
    <p>My name is Zo and I like learn cool new things</p>
    <h3 id="hobby-heading">My Hobbies</h3>
    <ul>
      <li>Running</li>
      <li>Reading</li>
      <li>Writing</li>
    </ul>`
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
