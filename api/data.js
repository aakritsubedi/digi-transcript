SECURITY_KEY = process.env.SECURITY_KEY;

const TRANSCRIPTS = {
  "aakrit": {
    "username": "aakrit",
    "fullname": "Aakrit Subedi",
    "courses": {
      "english": {"code":"ENG", "grade":"A"},
      "spanish": {"code":"SPA", "grade":"B"},
      "mathematics": {"code":"MAT", "grade":"A"},
      "science": {"code":"SCI", "grade":"C"},
      "civics": {"code":"CIV", "grade":"B"},
      "history": {"code":"HIS", "grade":"A"},
    },
    "GPA": 3.5
  },
  "john": {
    "username": "john",
    "fullname": "John Travolta",
    "courses": {
      "english": {"code":"ENG", "grade":"A+"},
      "spanish": {"code":"SPA", "grade":"A"},
      "mathematics": {"code":"MAT", "grade":"B"},
      "science": {"code":"SCI", "grade":"A"},
      "civics": {"code":"CIV", "grade":"C"},
      "history": {"code":"HIS", "grade":"A"},
    },
    "GPA": 3.6
  },
  "arnold": {
    "username": "arnold",
    "fullname": "Arnold Schwarzenegger",
    "courses": {
      "english": {"code":"ENG", "grade":"B"},
      "spanish": {"code":"SPA", "grade":"A"},
      "mathematics": {"code":"MAT", "grade":"C"},
      "science": {"code":"SCI", "grade":"A"},
      "civics": {"code":"CIV", "grade":"A"},
      "history": {"code":"HIS", "grade":"B"},
    },
    "GPA": 3.2
  },
  "jennifer": {
    "username": "jennifer",
    "fullname": "Jennifer Lawrence",
    "courses": {
      "english": {"code":"ENG", "grade":"C"},
      "spanish": {"code":"SPA", "grade":"A"},
      "mathematics": {"code":"MAT", "grade":"B"},
      "science": {"code":"SCI", "grade":"C"},
      "civics": {"code":"CIV", "grade":"A"},
      "history": {"code":"HIS", "grade":"C"},
    },
    "GPA": 3.0
  },
};

module.exports = {
  SECURITY_KEY,
  TRANSCRIPTS
};
