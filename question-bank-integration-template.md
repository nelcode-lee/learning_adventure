# Question Bank Integration Template

## 🎯 **How to Integrate 50-Question Banks with Random Selection**

### **📋 Implementation Pattern:**

#### **1. Question Bank Structure:**
```json
{
  "subject": {
    "age7": [50 questions],
    "age8": [50 questions], 
    "age9": [50 questions],
    "age10": [50 questions],
    "age11": [50 questions]
  }
}
```

#### **2. Integration into Existing Games:**

```javascript
// In the game's JavaScript section:

// Load child's age from learning agreement
function loadChildAge() {
    const agreement = JSON.parse(localStorage.getItem('learningAgreement') || '{}');
    childAge = agreement.childAge || 7;
    console.log(`Child's age loaded: ${childAge}`);
}

// Function to get random questions from bank
function getRandomQuestionsFromBank(subject, age, count = 3) {
    // Load the appropriate question bank
    const questionBank = loadQuestionBank(subject, age);
    
    // Randomly select questions
    return selectRandomQuestions(questionBank, count);
}

// Function to load question bank
function loadQuestionBank(subject, age) {
    // This would load from the JSON files
    // For now, return a sample structure
    return {
        'geography': {
            'age7': [...50 geography questions for age 7],
            'age8': [...50 geography questions for age 8],
            // etc.
        }
    }[subject][`age${age}`] || [];
}

// Function to select random questions
function selectRandomQuestions(questionBank, count) {
    if (!questionBank || questionBank.length === 0) {
        return [];
    }
    
    // Use Fisher-Yates shuffle for true randomization
    const shuffled = shuffleArray([...questionBank]);
    return shuffled.slice(0, Math.min(count, questionBank.length));
}

// Shuffle function (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
```

#### **3. Usage in Challenge Functions:**

```javascript
// Example for Geography Island
function startChallenge(areaId) {
    if (completedAreas.includes(areaId)) {
        alert('You\'ve already completed this area! Try another one.');
        return;
    }

    currentArea = areaId;
    const challenge = geographyChallenges[areaId];
    
    // Get random questions from the bank
    const randomQuestions = getRandomQuestionsFromBank('geography', childAge, 3);
    
    // Use the random questions instead of fixed ones
    questions = randomQuestions;
    currentQuestion = 0;
    
    // Continue with normal game flow...
    displayQuestion();
}
```

### **🎯 Benefits of This System:**

#### **Educational Advantages:**
1. **Variety**: 50 questions per age group provides immense variety
2. **Replayability**: Children can play multiple times without seeing the same questions
3. **Age-Appropriate**: Questions are specifically designed for each age level
4. **Random Selection**: Each session feels fresh and new

#### **Technical Advantages:**
1. **Scalable**: Easy to add more questions to the bank
2. **Maintainable**: Questions are organized by subject and age
3. **Flexible**: Can easily change the number of questions per session
4. **Consistent**: Same randomization algorithm across all subjects

### **📊 Question Bank Status:**

#### **Geography (geography-questions.json):**
- ✅ Age 7: 50 questions created
- ⏳ Age 8: In progress
- ⏳ Age 9: In progress  
- ⏳ Age 10: In progress
- ⏳ Age 11: In progress

#### **History (history-questions.json):**
- ⏳ Age 7: Not started
- ⏳ Age 8: Not started
- ⏳ Age 9: Not started
- ⏳ Age 10: Not started
- ⏳ Age 11: Not started

#### **Art & Design (art-questions.json):**
- ⏳ Age 7: Not started
- ⏳ Age 8: Not started
- ⏳ Age 9: Not started
- ⏳ Age 10: Not started
- ⏳ Age 11: Not started

### **🔧 Integration Steps:**

1. **Create Question Banks**: Build 50 questions per age group per subject
2. **Add Loading Functions**: Implement `loadQuestionBank()` and `getRandomQuestionsFromBank()`
3. **Update Game Logic**: Modify challenge functions to use random selection
4. **Test Randomization**: Ensure questions appear in different orders each time
5. **Validate Age Alignment**: Confirm questions match UK Key Stage 2 curriculum

### **⚠️ Important Notes:**

- **Always use Fisher-Yates shuffle** for true randomization
- **Validate question format** before adding to bank
- **Test age appropriateness** with actual children
- **Maintain curriculum alignment** with UK Key Stage 2 standards
- **Include explanations** for all questions to support learning

---

**This template ensures consistent, scalable, and educationally sound question bank implementation across all subjects.** 