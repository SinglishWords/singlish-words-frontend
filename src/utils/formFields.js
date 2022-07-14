/* Backend to exclude survey participant from lucky draw if timeOnPage is very short
formFields is used on Form.js to set a state for Form to collect data */

const formFields = {
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

export const recaptchaFields = {
  isVerified: false,
  // 10% chance of recaptcha rendering to catch bots
  showRecaptcha: Math.random() < 0.1,
  // Render recaptcha once on Quiz page, at random depending on showRecaptcha boolean
  recaptchaAlreadyShown: false,
};

export default formFields;
