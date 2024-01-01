
document.addEventListener('DOMContentLoaded', function() {
    // ... [Previous code for exercises and affirmations]

    // Trivia Quiz Section - Interactive
    const triviaSection = document.getElementById('trivia-section');
    let score = 0;
    let currentQuestionIndex = 0;

    const triviaQuestions = [
        {
            question: 'What nutrient is essential for bone health and commonly recommended for breast cancer patients?',
            options: ['Vitamin C', 'Vitamin D', 'Iron'],
            answer: 'Vitamin D'
        },
        {
            question: 'Which type of exercise is considered safe and beneficial for most cancer patients?',
            options: ['High-intensity interval training', 'Gentle yoga', 'Heavy weightlifting'],
            answer: 'Gentle yoga'
        },
        {
            question: "What is the most common type of breast cancer?",
            options: ["Ductal carcinoma", "Lobular carcinoma", "Inflammatory breast cancer"],
            answer: "Ductal carcinoma"
          },
          {
            question: "What is the recommended age for women to start getting mammograms?",
            options: ["30 years old", "40 years old", "50 years old"],
            answer: "40 years old"
          },
          // Add more trivia questions here
        
    ];

    function showQuestion(questionIndex) {
        const question = triviaQuestions[questionIndex];
        let questionHTML = '<div class="quiz-card"><p><strong>' + question.question + '</strong></p><ul>';
        
        question.options.forEach(option => {
            questionHTML += '<li class="quiz-option">' + option + '</li>';
        });

        questionHTML += '</ul></div>';
        triviaSection.innerHTML = questionHTML;

        // Add click event listeners to options
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', function() {
                checkAnswer(this.textContent, question.answer);
            });
        });
    }

    function checkAnswer(selectedOption, correctAnswer) {
        if (selectedOption === correctAnswer) {
            score++;
            alert('Correct! Your score: ' + score);
        } else {
            alert('Incorrect. The correct answer is ' + correctAnswer + '. Your score: ' + score);
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < triviaQuestions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            triviaSection.innerHTML = '<p>Your final score: ' + score + ' out of ' + triviaQuestions.length + '</p>';
        }
    }

    // Start the quiz
    showQuestion(currentQuestionIndex);
});

// Function to perform gentle stretching exercise
function displayStretchingMethods() {
    console.log("Welcome to the Gentle Stretching Exercise App for Breast Cancer Patients!");
    console.log("Choose a stretching method:");
    console.log("1. Neck Stretch");
    console.log("2. Shoulder Stretch");
    console.log("3. Chest Opener");
    console.log("4. Arm and Wrist Stretch");
    console.log("5. Side Stretch");
    console.log("6. Seated Spinal Twist");
    console.log("7. Calf Stretch");
    console.log("8. Ankle Rotation");
    console.log("9. Back Stretch");
    console.log("10. Full Body Stretch");
}

function displayExerciseDetails(selectedMethod) {
    const exerciseDetails = {
        "Neck Stretch": "Gently tilt your head to one side, holding for 15-30 seconds. Repeat on the other side.",
        "Shoulder Stretch": "Roll your shoulders backward in a circular motion for 30 seconds. Repeat forward.",
        "Chest Opener": "Interlace your fingers behind your back, open your chest, and hold for 20-30 seconds.",
        // ... Add details for other exercises
    }

    if (selectedMethod in exerciseDetails) {
        console.log(`Method: ${selectedMethod}`);
        console.log(`Description: ${exerciseDetails[selectedMethod]}`);
    } else {
        console.log("Invalid selection. Please choose a valid stretching method.");
    }
}

// Example of how to use the functions
displayStretchingMethods();

// Assume the user selects "Neck Stretch"
const selectedMethod = "Neck Stretch";
displayExerciseDetails(selectedMethod);

  
  // Function to perform breathing exercises
  function displayBreathingMethods() {
    console.log("Welcome to the Breathing Exercise App for Breast Cancer Patients!");
    console.log("Choose a breathing exercise:");
    console.log("1. Deep Diaphragmatic Breathing");
    console.log("2. Pursed Lip Breathing");
    console.log("3. Box Breathing");
    console.log("4. 4-7-8 Breathing");
    console.log("5. Alternate Nostril Breathing");
    console.log("6. Belly Breathing");
    console.log("7. Guided Imagery Breathing");
    console.log("8. Progressive Muscle Relaxation with Breathing");
    console.log("9. Equal Breathing");
    console.log("10. Resonant Breathing");
  }
  
  function displayBreathingExerciseDetails(selectedMethod) {
    const breathingExerciseDetails = {
      "Deep Diaphragmatic Breathing": "Inhale deeply through your nose, expanding your diaphragm. Exhale slowly through pursed lips.",
      "Pursed Lip Breathing": "Inhale through your nose for a count of two. Purse your lips and exhale slowly for a count of four.",
      "Box Breathing": "Inhale for a count of four, hold your breath for four counts, exhale for four counts, and pause for four counts before inhaling again.",
      // ... Add details for other breathing exercises
    };
  
    if (selectedMethod in breathingExerciseDetails) {
      console.log(`Method: ${selectedMethod}`);
      console.log(`Description: ${breathingExerciseDetails[selectedMethod]}`);
    } else {
      console.log("Invalid selection. Please choose a valid breathing exercise.");
    }
  }
  
  // Example of how to use the functions
  displayBreathingMethods();
  
  // Assume the user selects "Deep Diaphragmatic Breathing"
  const selectedMethodBreathing = "Deep Diaphragmatic Breathing";
  displayBreathingExerciseDetails(selectedMethodBreathing);
  
  
  // Function to perform meditation
  function displayMeditationMethods() {
    console.log("Welcome to the Meditation App for Breast Cancer Patients!");
    console.log("Choose a meditation method:");
    console.log("1. Mindfulness Meditation");
    console.log("2. Loving-Kindness Meditation");
    console.log("3. Body Scan Meditation");
    console.log("4. Guided Visualization Meditation");
    console.log("5. Mantra Meditation");
    console.log("6. Walking Meditation");
    console.log("7. Breath Awareness Meditation");
    console.log("8. Progressive Muscle Relaxation Meditation");
    console.log("9. Gratitude Meditation");
    console.log("10. Compassion Meditation");
}
function displayMeditationDetails(selectedMethod) {
    // Assume there's a dictionary or database of meditation details
    const meditationDetails = {
        "Mindfulness Meditation": "Focus on your breath and bring your attention to the present moment without judgment.",
        "Loving-Kindness Meditation": "Cultivate feelings of love and compassion towards yourself and others.",
        "Body Scan Meditation": "Bring awareness to each part of your body, starting from your toes to the top of your head.",
        // ... Add details for other meditation methods
    };

    // Display details for the selected meditation method
    if (selectedMethod in meditationDetails) {
        console.log(`Method: ${selectedMethod}`);
        console.log(`Description: ${meditationDetails[selectedMethod]}`);
    } else {
        console.log("Invalid selection. Please choose a valid meditation method.");
    }
}

displayMeditationMethods();

// Assume the user selects "Mindfulness Meditation"
const selectedMethodMeditation = "Mindfulness Meditation";
displayMeditationDetails(selectedMethodMeditation);
  
 
  // Example usage
  performStretchingExercise();
  performBreathingExercise();
  performMeditation();


  // Function to set reminders for breast cancer patients
function setReminder(time, message) {
    // Code to set reminder using a notification library or API
    // Example: 
    // notificationLibrary.setReminder(time, message);
  }
  
  // Example usage
  setReminder("08:00 AM", "Take your medication");
  setReminder("12:00 PM", "Log your daily mood");
  setReminder("02:00 PM", "Doctor's appointment");