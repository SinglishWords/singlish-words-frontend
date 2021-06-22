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
    title: `A Small World of Singlish Words:`,
    subtitle: `A Word Association Study`,
    introduction: `Welcome to this study on word associations in Singapore English. Singaporeans have a unique vocabulary, consisting of Singlish words and phrases that originate from various local languages, on top of the Standard English vocabulary. As researchers studying language and memory we are interested in the nature and organization of this unique mental dictionary of Singapore English. 
    
    You can help us capture this knowledge by playing a simple game of word associations. This game takes no more than 15 minutes of your time. It's easy and fun: Just give the first three words that come to your mind for a list of Singapore English words.
    
    If you are between 18 to 80 years old, and consider yourself to be a native speaker of Singapore English, you are eligible to take part in our study.
    
    Upon completion of the study, you can enter a `,
    introductionLuckyDraw: `monthly lucky draw (refer to "Lucky Draw T&C")`,
    introduction2: ` to stand a chance of winning $5 Grab vouchers by entering your email address in the last page. The more times you complete the study, the more chances you get. Don’t say bojio!

    If you proceed, you consent to your location, demographic, and linguistic data to be collected for research purposes. This data is completely anonymous and is never linked to your personal or contact information.`,
    luckyDrawButtonDescription: `Lucky Draw T&C`,
    luckyDrawInformation: `The lucky draw will be active from 1st January 2022 to 30th June 2022. In order to participate, please input your email address on the final page of the study. 
    Your decision to participate is voluntary. The chance that each participant has to win a voucher is proportional to the number of times they had completed the
    study and entered their email address on the final page. Participants who have been identified as exhibiting bot-like behavior are not permitted to participate
    in the lucky draw.

    Winners of the lucky draw will be randomly selected on the final day of the month. All participants will be notified of the outcome regardless of whether they
    had won or not. 100 $5 Grab Vouchers will be awarded each month.
    
    After winners have been selected, the pool from which the lucky draw winners are selected is reset for the next month.`,
    continueButtonDescription: `I want to participate!`,
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
      description3: `when reading this word.`,
      description4: `Press`,
      description5: `Enter`,
      description6: `to add a second and third word or proceed to the next word if you can't think of any.
      
      If you don't know the word at all, you can just proceed to the next word.`,
    },
    secondParagraphHeader: `Some hints`,
    secondParagraphDescription: {
      description1: `Only give associations to the word on top of the screen (not to your previous responses!)`,
      description2: `Try to avoid full sentences as responses.`,
      description3: `Simply type a word and press `,
      description4: `Enter`,
      description5: ` to go to the next one.`,
      buttonDescription: `continue`,
    },
  },

  /* Quiz Page */
  quizPage: {
    firstAssociationInstruction: `Enter a first association`,
    secondAssociationInstruction: `Enter a second association`,
    thirdAssociationInstruction: `Enter a third association`,
    needHelpButtonDescription: `Need Help?`,
    buttonDescription: `continue`,
    instructionReminder: `How it works...
    On the top of the screen a word will appear. Enter the first word that comes to mind when reading this word.
    Press Enter to add a second and third word or proceed to the next word if you can't think of any.
    If you don't know the word at all, you can just proceed to the next word.
    
    Some hints
    Only give associations to the word on top of the screen (not to your previous responses!)
    Try to avoid full sentences as responses.
    Simply type a word and press Enter to go to the next one.`,
  },

  /* Email Page */
  emailPage: {
    title: `Thank You!`,
    firstParagraphHeader: `What are we trying to do`,
    firstParagraphDescription: `The mental lexicon is the part of long-term memory where all of the words that you know and their meanings are stored. The connections between these words and concepts can be represented as a language network (akin to a “social network” of words) to model the large-scale structure of the mental lexicon.

    In this study, you were asked to respond with words that came to your mind upon the presentation of Singapore English words. These responses are called free associations, and we and other language researchers plan to use these free associations across thousands of words in Singapore English to model large-scale association networks and to model and study the structure of the Singaporean mental lexicon in the form of associative networks.`,
    secondParagraphHeader: `If you would like to take part in the lucky draw or receive updates about this research`,
    secondParagraphDescription: {
      description1: `Enter your email below.`,
      luckyDrawCheckboxDescription: `I would like to take part in the lucky draw!`,
      updatesCheckboxDescription: `I would like to receive updates about this research!`,
      description2: `Thank you for your submission!`,
      description3: `Note that the data that you provided remains confidential and anonymous.`,
    },
    thirdParagraphHeader: `Get in touch`,
    thirdParagraphDescription: {
      description1: `If you have any concerns or questions regarding this research, please do not hesitate to contact the project team at `,
      email: `smallworldofsinglishwords@gmail.com`,
      description2: `Principal Investigator: Dr. Cynthia Siew
      Department of Psychology, National University of Singapore.
      Email: `,
      email2: `cynthia@nus.edu.sg`,
    },

    fourthParagraphHeader: `Share the study`,
    fourthParagraphDescription: `To get enough words and make the mental dictionary useful, we need many helping hands. If you want to help, just share the study with family and friends or come back some other time for new words!`,
  },
};

export default formData;
