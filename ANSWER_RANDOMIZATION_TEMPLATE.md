# Answer Randomization Template

## 🎯 **MANDATORY: Always Randomize Answer Positions**

### **📋 Implementation Checklist:**

#### **1. Add Shuffle Function (Required)**
```javascript
// Reusable function to shuffle arrays (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
```

#### **2. Use Shuffle Function (Required)**
```javascript
// Always shuffle options to randomize correct answer position
const shuffledOptions = shuffleArray([...q.options]);

shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.className = 'option';
    button.textContent = option;
    button.onclick = () => selectAnswer(option);
    optionsContainer.appendChild(button);
});
```

### **✅ Current Implementation Status:**

- **✅ Reading Island**: `reading-island.html` - Randomized
- **✅ Science Island**: `science-island.html` - Randomized  
- **✅ Times Tables**: `index.html` - Randomized
- **✅ Treasure Hunt**: `treasure-hunt.html` - Randomized

### **🔧 Future Development Rules:**

#### **MANDATORY REQUIREMENTS:**
1. **ALWAYS** include the `shuffleArray()` function
2. **ALWAYS** use `shuffleArray([...options])` before displaying answers
3. **NEVER** display answers in fixed order
4. **ALWAYS** test that answers appear in random positions

#### **Code Template:**
```javascript
// In displayQuestion() or similar function:
const optionsContainer = document.getElementById('options');
optionsContainer.innerHTML = '';

// ALWAYS shuffle options to randomize correct answer position
const shuffledOptions = shuffleArray([...q.options]);

shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.className = 'option';
    button.textContent = option;
    button.onclick = () => selectAnswer(option);
    optionsContainer.appendChild(button);
});
```

### **🎯 Educational Benefits:**
- Prevents pattern recognition
- Forces real understanding
- Reduces guessing strategies
- Improves assessment accuracy
- Maintains game integrity

### **⚠️ IMPORTANT:**
**NEVER** use `.sort(() => Math.random() - 0.5)` as it's not truly random.
**ALWAYS** use the Fisher-Yates algorithm implemented in `shuffleArray()`.

---

**This template ensures all future games maintain fair, challenging gameplay with truly randomized answer positions.** 