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
  title: `Word Association Study`,

  introduction: 
  `Welcome to this study on word associations. On average, an adult knows about 40,000 words. As scientists studying language and memory we are interested in the nature or organization of this mental dictionary. You can help us build a network that captures this knowledge by playing the game of word associations. This game takes just 5 minutes of your time. It's easy and fun: Just give the first three words that come to mind for a list of 18 cue words.

  All ages and nationalities are welcome, but please note that we do require you to be a fluent English speaker. If you're not a native speaker of English, please choose one of the language options the bottom of this page.

  Dr. Simon De Deyne, University of Melbourne

  Prof. Gert Storms, University of Leuven`,

  ages: agesList,
  genderTypes: genderList,
  educationLevels: educationLevelList,
  countries: countriesList,
  ethnicities: ethicGroupList,
  yesAndNo: yesNoList,
  languagesSpoken: languagesSpokenList,
};

export default formData;
