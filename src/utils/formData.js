import agesList from "./Data/agesList";
import countriesList from "./Data/countriesList";
import educationLevelList from "./Data/educationLevelList";
import ethicGroupList from "./Data/ethicGroupList";
import genderList from "./Data/genderList";
import languagesSpokenList from "./Data/languagesSpokenList";
import yesNoList from "./Data/yesNoList";

/* formData is used in UserDetails. It is used for mapping through lists defined in utils/Data/
 so that the UserDetails page can render the various options */
const formData = {
  /* Introduction Page */
  introductionPage: {
    title: `Word Association Study`,
    introduction: `Welcome to this study on word associations. On average, an adult knows about 40,000 words. As scientists studying language and memory we are interested in the nature or organization of this mental dictionary. 
    
    You can help us build a network that captures this knowledge by playing the game of word associations. This game takes just 5 minutes of your time. It's easy and fun: Just give the first three words that come to mind for a list of 18 cue words.
    
    All ages and nationalities are welcome, but please note that we do require you to be a fluent English speaker. If you're not a native speaker of English, please choose one of the language options the bottom of this page.

    Dr. Simon De Deyne, University of Melbourne

    Prof. Gert Storms, University of Leuven`,
    buttonDescription: `I want to participate!`,
  },

  /* Information about you Page */
  informationAboutYouPage: {
    title: `Information about you`,
    instruction1: `Before we get started, please provide the following info.`,
    instruction2: `Asterisk (*) indicates a compulsory field.`,
    ageInstruction: `Please select your age`,
    genderInstruction: `Please select your gender`,
    educationInstruction: `Please select your highest attained educational qualification`,
    birthCountryInstruction: `Please select your country of birth`,
    ethnicityInstruction: `Please select your ethnic group`,
    residenceCountryInstruction: `Please select your current country of residence`,
    nativeSpeakerInstruction: `Are you a native English speaker?`,
    otherLanguagesInstruction: `What other languages do you speak?`,
    buttonDescription: `continue`,
    ages: agesList,
    genderTypes: genderList,
    educationLevels: educationLevelList,
    countries: countriesList,
    ethnicities: ethicGroupList,
    yesAndNo: yesNoList,
    languagesSpoken: languagesSpokenList,
  },

  /* Instructions Page */
  instructionsPage: {
    title: `Instructions`,
    firstParagraphHeader: `How it works...`,
    firstParagraphDescription: {
      description1: `On the top of the screen a word will appear.`,
      description2: `Enter the first word that comes to mind`,
      description3: `when reading this word. If you don't know this word, press`,
      buttonDescription1: `Unknown word`,
      description4: `Press`,
      description5: `Enter`,
      description6: `to add a second and third word or press`,
      buttonDescription2: `No more responses`,
      description7: `if you can't think of any.`,
    },
    secondParagraphHeader: `Some hints`,
    secondParagraphDescription: {
      description1: `Only give associations to the word on top of the screen (not to your previous responses!) Try to avoid full sentences as responses.`,
      description2: `Simply type a word and press `,
      description3: `Enter`,
      description4: ` to go to the next one.`,
      buttonDescription: `continue`,
    },
  },

  /* Quiz Page */
  quizPage: {
    firstAssociationInstruction: `Enter a first association`,
    secondAssociationInstruction: `Enter a second association`,
    thirdAssociationInstruction: `Enter a third association`,
    buttonDescription: `continue`,
    instructionReminder: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },

  /* Email Page */
  emailPage: {
    title: `Thank You!`,
    firstParagraphHeader: `Stay informed`,
    firstParagraphDescription: {
      description1: `Enter your email if you'd like to stay informed about the study (remains confidential).`,
      description2: `Thank you for your submission!`,
    },
    secondParagraphHeader: `Share the study`,
    secondParagraphDescription: `To get enough words and make the mental dictionary useful, we need many helping hands (it takes 250,000 persons!). If you want to help, just share the study with family and friends or come back some other time for new words: https://smallworldofwords.org/en`,
  },
};

export default formData;
