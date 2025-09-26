
document.addEventListener('DOMContentLoaded', () => {
    const muscleMapContainer = document.getElementById('muscle-map');
    const exerciseListContainer = document.getElementById('exercise-list');
    const frontViewBtn = document.getElementById('front-view-btn');
    const sideViewBtn = document.getElementById('side-view-btn');

    let exercisesData = null;

    // Fetch exercise data
    fetch('exercises.json')
        .then(response => response.json())
        .then(data => {
            exercisesData = data.muscles;
            // Load front view by default
            loadSvg('front-view.svg');
        });

    // Function to load an SVG file
    function loadSvg(svgFile) {
        fetch(svgFile)
            .then(response => response.text())
            .then(svgData => {
                muscleMapContainer.innerHTML = svgData;
                addMuscleClickListeners();
            });
    }

    // Function to add click listeners to muscles
    function addMuscleClickListeners() {
        const muscles = muscleMapContainer.querySelectorAll('.muscle');
        muscles.forEach(muscle => {
            muscle.addEventListener('click', (event) => {
                const muscleId = event.target.id;
                displayExercises(muscleId);
            });
        });
    }

    // Function to display exercises for a given muscle
    function displayExercises(muscleId) {
        const muscle = exercisesData.find(m => m.id === muscleId);
        if (muscle) {
            let html = `<h2>${muscle.name}</h2>`;
            html += '<ul>';
            muscle.exercises.forEach(exercise => {
                html += `<li><strong>${exercise.name}</strong> (${exercise.difficulty}, Equipment: ${exercise.equipment})</li>`;
            });
            html += '</ul>';
            exerciseListContainer.innerHTML = html;
        } else {
            exerciseListContainer.innerHTML = '<p>No exercises found for this muscle.</p>';
        }
    }

    // Event listeners for view switcher buttons
    frontViewBtn.addEventListener('click', () => loadSvg('front-view.svg'));
    sideViewBtn.addEventListener('click', () => loadSvg('side-view.svg'));
});
