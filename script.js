function Risposta(event)
{
  const scelta = event.currentTarget;
  scelta.querySelector('.checkbox').src = 'images/checked.png';
  scelta.classList.add('checked');
  scelta.classList.remove('unchecked');
  
  const otherContainers = document.querySelectorAll('div[data-question-id =' + scelta.dataset.questionId + ']');
  for(const container of otherContainers)
  {
    if(container.dataset.choiceId !== scelta.dataset.choiceId)
    {
      container.classList.add('unchecked');
      container.querySelector('.checkbox').src = 'images/unchecked.png';
    }
  }

  choiceContainer[scelta.dataset.questionId] = scelta.dataset.choiceId;

   if(choiceContainer.one && choiceContainer.two && choiceContainer.three)
   {
      ShowResult();
   }
}

function ShowResult(){
  console.log('sono nella funzione');
  const result = getResult(); 
  const resultContainers = document.querySelector('#results');
  const title = document.createElement('h1');
  const content = document.createElement('p');

  title.textContent = RESULTS_MAP[result].title;
  content.textContent = RESULTS_MAP[result].contents;
  resultContainers.appendChild(title);
  resultContainers.appendChild(content);
  const button = document.querySelector('button');
  button.classList.remove('hide');
  button.addEventListener('click', resetta);
  
  for (const box of boxes)
  {
    box.removeEventListener('click', Risposta);
  }
}

function getResult()
{
  if(choiceContainer.one === choiceContainer.two || choiceContainer.one === choiceContainer.three)
      return choiceContainer.one;
  if(choiceContainer.two === choiceContainer.one || choiceContainer.two === choiceContainer.three)
      return choiceContainer.two;
  if(choiceContainer.three === choiceContainer.one || choiceContainer.three === choiceContainer.two)
      return choiceId.three;
  return choiceContainer.one;
}

function resetta(){
  const hideAnswer = document.querySelector('#results');
  hideAnswer.classList.add('hide');
  const removeButton = document.querySelector('button');
  removeButton.classList.add('hide');

  for(const box of boxes){
    box.classList.remove('unchecked');
    box.classList.remove('checked');
    box.addEventListener('click', Risposta);
    box.querySelector('.checkbox').src = "images/unchecked.png";
  }
}

const choiceContainer = {};
const boxes = document.querySelectorAll('.choice-grid div');
for (const box of boxes)
{
  box.addEventListener('click', Risposta);
}


