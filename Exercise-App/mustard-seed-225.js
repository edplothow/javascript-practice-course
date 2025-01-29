const benchPressWorkoutData = [
  {weight: 135, reps: 10},
  {weight: 145, reps:8},
  {weight: 155, reps: 6},
  {weight: 165, reps: 4}
]
const beginWorkoutButton = document.getElementById('beginWorkout');
const workoutsDivTrunk = document.getElementById('workoutsDivTrunk');
const suggestedNewWorkout = document.getElementById('suggestedNewWorkout');




beginWorkoutButton.addEventListener('click', () => {
  displayLastWorkout(benchPressWorkoutData);
});

function displayLastWorkout (insertedWorkoutArry) {
  const previousResultsGraft = document.createElement('p');
  previousResultsGraft.innerText = 'Your previous BenchPress results on (insert date) were:';
  workoutsDivTrunk.appendChild(previousResultsGraft);
  // STOPPED HERE
  const suggestedWorkoutGraft = document.createElement('p');
  

  calculateAndDisplayNewWorkout(benchPressWorkoutData);

};

function calculateAndDisplayNewWorkout (previousWorkout) {
  const newBenchPressArray = [];
// calculate the new suggested array:
  if(previousWorkout[0].weight < previousWorkout[1].weight) {
    let newSetRow = {};
    
    for (let setRow of previousWorkout) {
      if (setRow === previousWorkout[0]){
          newSetRow = {
          weight: setRow.weight + 10,
          reps: setRow.reps
          }
          } else {
          newSetRow = {
            weight: setRow.weight,
            reps: setRow.reps
          }
      }
        
      newBenchPressArray.push(newSetRow);
    }
       
  }
  
  
  // Display the suggested array on a webpage:

  const workoutList = document.createElement('p');
  const newWorkoutDisplayMessage = document.createElement('p');
  newWorkoutDisplayMessage.innerText = 'Suggested Workout for Today:';
  workoutList.appendChild(newWorkoutDisplayMessage);
  
  

  newBenchPressArray.forEach((currentArray, index) => {
    const newBenchPressData = document.createElement('li');
    newBenchPressData.innerText = `Weight: ${currentArray.weight} Reps: ${currentArray.reps}`;
    workoutList.appendChild(newBenchPressData);
  })

  suggestedNewWorkout.appendChild(workoutList);
  

} 
  
  


