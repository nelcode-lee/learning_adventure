// Question Bank Utilities
// Functions for managing and randomly selecting questions from large question banks

/**
 * Loads questions from a JSON file
 * @param {string} subject - The subject (geography, history, art)
 * @param {number} age - The child's age (7-11)
 * @returns {Array} Array of questions for the subject and age
 */
function loadQuestionsFromBank(subject, age) {
    // This would load from the JSON files we're creating
    // For now, we'll return a placeholder
    return [];
}

/**
 * Randomly selects a specified number of questions from a question bank
 * @param {Array} questionBank - Array of all available questions
 * @param {number} count - Number of questions to select (default: 3)
 * @returns {Array} Randomly selected questions
 */
function selectRandomQuestions(questionBank, count = 3) {
    if (!questionBank || questionBank.length === 0) {
        return [];
    }
    
    // Use Fisher-Yates shuffle to get truly random selection
    const shuffled = shuffleArray([...questionBank]);
    return shuffled.slice(0, Math.min(count, questionBank.length));
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Gets age-appropriate questions for a subject
 * @param {string} subject - The subject (geography, history, art)
 * @param {number} age - The child's age (7-11)
 * @param {number} questionCount - Number of questions to return (default: 3)
 * @returns {Array} Randomly selected age-appropriate questions
 */
function getAgeAppropriateQuestions(subject, age, questionCount = 3) {
    // Load the appropriate question bank based on subject and age
    const questionBank = loadQuestionsFromBank(subject, age);
    
    // Return randomly selected questions
    return selectRandomQuestions(questionBank, questionCount);
}

/**
 * Validates that a question has the correct format
 * @param {Object} question - Question object to validate
 * @returns {boolean} True if question is valid
 */
function validateQuestion(question) {
    return question &&
           question.question &&
           question.options &&
           question.options.length >= 2 &&
           question.correct &&
           question.explanation;
}

/**
 * Formats questions for use in the game system
 * @param {Array} questions - Array of question objects
 * @returns {Array} Formatted questions ready for game use
 */
function formatQuestionsForGame(questions) {
    return questions.map(q => ({
        type: 'multiple-choice',
        question: q.question,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation
    }));
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadQuestionsFromBank,
        selectRandomQuestions,
        shuffleArray,
        getAgeAppropriateQuestions,
        validateQuestion,
        formatQuestionsForGame
    };
} 