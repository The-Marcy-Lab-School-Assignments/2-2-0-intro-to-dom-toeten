/** FEEDBACK: I love the use of functions here! Could we have made it DRYer? 
 * Great job getting all test cases to pass and using the runner function!
 */

const makeH1 = () => {
  const newH1 = document.createElement('h1')
  newH1.id = "main-heading"
  newH1.textContent = "Hello World!"
  document.body.append(newH1)
}


const makeP = () => {
  const freshP = document.createElement('p')
  freshP.id = "main-text"
  freshP.className = "boring-text"
  freshP.textContent = "Look, I'm some text!"
  document.body.append(freshP)
}





const main = () => {
  makeH1() 
  makeP()
}

main();