/* Backend to exclude survey participant from lucky draw if timeOnPage is very short
formState is used on Form.js to set a state for Form to collect data */

const formState = {
  step: 1,
  age: "",
  gender: "",
  education: "",
  countryOfBirth: "Singapore",
  countryOfResidence: "Singapore",
  ethnicity: "",
  isNative: "",
  languagesSpoken: [],
  startTime: "",
  endTime: "",
  uuid: "",
  data: [
    {
      question: { id: 1, progress: 1, word: "word1" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 2, progress: 2, word: "word2" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 3, progress: 3, word: "word3" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 4, progress: 4, word: "word4" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 5, progress: 5, word: "word5" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 6, progress: 6, word: "word6" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 7, progress: 7, word: "word7" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 8, progress: 8, word: "word8" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 9, progress: 9, word: "word9" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 10, progress: 10, word: "word10" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 11, progress: 11, word: "word11" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 12, progress: 12, word: "word12" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 13, progress: 13, word: "word13" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 14, progress: 14, word: "word14" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 15, progress: 15, word: "word15" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 16, progress: 16, word: "word16" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 17, progress: 17, word: "word17" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 18, progress: 18, word: "word18" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 19, progress: 19, word: "word19" },
      response: ["", "", ""],
      timeOnPage: "",
    },
    {
      question: { id: 20, progress: 20, word: "word20" },
      response: ["", "", ""],
      timeOnPage: "",
    },
  ],
};

export const recaptchaState = {
  isVerified: false,
  // 10% chance of recaptcha rendering to catch bots
  showRecaptcha: Math.random() < 0.1,
  // Render recaptcha once on Quiz page, at random depending on showRecaptcha boolean
  recaptchaAlreadyShown: false,
};

export const visualisationState = {
  nodes: [
    {
      id: "0",
      name: "apple",
      symbolSize: 40,
      value: 40,
      category: 0,
    },
    {
      id: "1",
      name: "fruit",
      symbolSize: 36,
      value: 36,
      category: 0,
    },
    {
      id: "2",
      name: "red",
      symbolSize: 26,
      value: 26,
      category: 0,
    },
    {
      id: "3",
      name: "orange",
      symbolSize: 25,
      value: 25,
      category: 4,
    },
    {
      id: "4",
      name: "tree",
      symbolSize: 21,
      value: 21,
      category: 3,
    },
    {
      id: "5",
      name: "pear",
      symbolSize: 19,
      value: 19,
      category: 1,
    },
    {
      id: "6",
      name: "pie",
      symbolSize: 18,
      value: 18,
      category: 0,
    },
    {
      id: "7",
      name: "green",
      symbolSize: 16,
      value: 16,
      category: 1,
    },
    {
      id: "8",
      name: "core",
      symbolSize: 9,
      value: 9,
      category: 0,
    },
    {
      id: "9",
      name: "banana",
      symbolSize: 6,
      value: 6,
      category: 1,
    },
    {
      id: "10",
      name: "doctor",
      symbolSize: 5,
      value: 5,
      category: 0,
    },
    {
      id: "11",
      name: "computer",
      symbolSize: 5,
      value: 5,
      category: 0,
    },
    {
      id: "12",
      name: "seed",
      symbolSize: 5,
      value: 5,
      category: 3,
    },
    {
      id: "13",
      name: "sweet",
      symbolSize: 4,
      value: 4,
      category: 1,
    },
    {
      id: "14",
      name: "grape",
      symbolSize: 4,
      value: 4,
      category: 1,
    },
    {
      id: "15",
      name: "crunch",
      symbolSize: 4,
      value: 4,
      category: 2,
    },
    {
      id: "16",
      name: "juice",
      symbolSize: 4,
      value: 4,
      category: 4,
    },
    {
      id: "17",
      name: "round",
      symbolSize: 4,
      value: 4,
      category: 4,
    },
    {
      id: "18",
      name: "crisp",
      symbolSize: 3,
      value: 3,
      category: 2,
    },
    {
      id: "19",
      name: "crunchy",
      symbolSize: 3,
      value: 3,
      category: 2,
    },
  ],
  links: [
    {
      source: "0",
      target: "1",
    },
    {
      source: "0",
      target: "2",
    },
    {
      source: "0",
      target: "3",
    },
    {
      source: "0",
      target: "4",
    },
    {
      source: "0",
      target: "5",
    },
    {
      source: "0",
      target: "6",
    },
    {
      source: "0",
      target: "7",
    },
    {
      source: "0",
      target: "8",
    },
    {
      source: "0",
      target: "9",
    },
    {
      source: "0",
      target: "10",
    },
    {
      source: "0",
      target: "11",
    },
    {
      source: "0",
      target: "12",
    },
    {
      source: "0",
      target: "13",
    },
    {
      source: "0",
      target: "14",
    },
    {
      source: "0",
      target: "15",
    },
    {
      source: "0",
      target: "16",
    },
    {
      source: "0",
      target: "17",
    },
    {
      source: "0",
      target: "18",
    },
    {
      source: "0",
      target: "19",
    },
    {
      source: "18",
      target: "15",
    },
    {
      source: "18",
      target: "19",
    },
    {
      source: "18",
      target: "0",
    },
    {
      source: "12",
      target: "7",
    },
    {
      source: "12",
      target: "4",
    },
    {
      source: "11",
      target: "8",
    },
    {
      source: "9",
      target: "5",
    },
    {
      source: "9",
      target: "1",
    },
    {
      source: "9",
      target: "13",
    },
  ],
  categories: [
    {
      name: "A",
    },
    {
      name: "B",
    },
    {
      name: "C",
    },
    {
      name: "D",
    },
    {
      name: "E",
    },
  ],
};

export default formState;
