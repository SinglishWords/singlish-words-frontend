# singlish-words-frontend

[GitHub - SinglishWords/singlish-words-frontend: Singlish Words Application's Frontend Code](https://github.com/SinglishWords/singlish-words-frontend)

This repository consists of the working files for the frontend of the SinglishWords project, written primarily using the React framework.

# Installation

To deploy the SinglishWords frontend on your local system, open your terminal and first clone the repository

```bash
$ git clone https://github.com/SinglishWords/singlish-words-frontend.git
$ cd singlish-words-frontend # to enter the directory
```

Then, use `npm` to install all the packages that the project uses

```bash
$ npm install
```

After all the packages are installed, use `npm start` to run the application on your `localhost`

```bash
$ npm start
```

This will deploy the frontend of the application to `https://localhost:3000`. Enter this address into a browser of your choice to run and test the application.

## Setting up CORS Everywhere

For the purpose of frontend testing on `[localhost](http://localhost)`, it is recommended to install the CORS Everywhere browser extension on [Firefox](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/) or [Google Chrome](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en). This will allow `localhost` to retrieve cues from the backend on [singlishwords.nus.edu.sg](http://singlishwords.nus.edu.sg). 

Follow the steps on the pages linked above to install and enable the browser extension

Please remember to disable CORS Everywhere after using it to test the application, as it poses a minor security risk during general web browsing.

# Editing pages

To make edits to the text, colours, fonts, etc. that are visible to the users, the frontend files must be modified.

Making and saving any edits to the frontend in your code editor will automatically refresh the React app on `[localhost:3000](http://localhost:3000)` with the same changes.

## App hierarchy

All the components are stored in the `./src/components` directory.

This project’s frontend consists of the following components in this hierarchy (these are not directories):

```
App
	|_ Form
			|_ Introduction
			|_ UserDetails
			|_ Instruction
			|_ Quiz
			|_ Email
```

## Editing structure and layout

Styles, such as element heights, fonts, colours, etc. are stored in `.css` files.

The positioning of elements and the HTML-rendered components are stored in `.js`

### Example, changing element tags

For example, let’s say the title in the `Introduction` component is to be changed from `<h2>` to `<h1>`. Below is what the `./src/components/Pages/Introduction/Introduction.js` file looks like.

```tsx
export class Introduction extends Component {
  render() {
    const { handleFieldChange, nextPage } = this.props;
    return (
			...
	    <h2 className="logoTxt titleTxt">
				{formData.introductionPage.title}
      </h2>
      <h2 className="logoTxt subTxt">
				{formData.introductionPage.subtitle}
			</h2>
			...
		);
	}
}
```

Above, the `<h2>` tags can be changed to `<h1>`. Saving the file with these changes will automatically refresh the React application running in the browser.

## Editing content and wordings

The content and wordings on every page in the frontend are served as `props` to the components. These properties can be found in `./src/utils/formData.js`. Here is a brief look at what the file contains:

```tsx
const formData = {
  /* Introduction Page, as an example */
  introductionPage: {
    title: `A Small World of Singlish Words:`,
    subtitle: `A Word Association Study`,
    introduction: `Welcome to this study on word associations ...`
    ...
	},
	/* All other pages */
}
```

The contents from this data is imported in every component file. When a component is loaded, for example `<Instruction>`, the code snippet in the previous section shows the content is being retrieved by using `{formData.introductionPage.title}`.

Hence, making changes to the wordings on any page or component involves changing the string values in `formData.js`. 

Once changes are saved, the React application running in the browser will automaticaly update these changes.

## Editing data lists

On the `UserDetails` page, there are several user input fields (dropdown) which ask for the users’

1. Age
2. Gender
3. Education Level
4. Country of Birth
5. Ethnic Group
6. Country of Residence
7. Fluency of English
8. Other Languages Spoken

The options which are available in these drop-down lists can be changed by navigating to `./src/utils/Data` and updating the corresponding `.js` file containing the choices.

For example, if an ‘Other’ option needs to be added to the Education Level dropdown, then the list containing the choices, in `.src/utils/Data/educationLevelList.js`, can be edited.

## Editing cues

The cues that are displayed to the user cannot be modified in the frontend. This is because the MySQL database containing the cues itself must be updated, which cannot be done from the frontend or using React.

To learn more about how to change our cues, follow the instructions on the `singlish-words-backend` [repository](https://github.com/SinglishWords/singlish-words-backend) and `deployment` [repository](https://github.com/SinglishWords/deployment).

# Building the app

After all the changes have been made, a production build containing all the minified assets with HTML, CSS, and JavaScript files can be created. The shell command to do so is

```bash
$ npm run build
```

This will create a `build` folder containing all the assets in the root directory `./`

> This is an important step, since we push these files to GitHub as well, and our deployment script will later use the contents of `build` folder when we create a Docker container
> 

# Next steps

At this point, the changes can be commited and pushed to the `master` branch of this repo. The next steps include:

1. Making changes to the backend, if any ([refer to this link](https://github.com/SinglishWords/singlish-words-backend))
2. Deploying the whole application in a Docker container ([refer to this link](https://github.com/SinglishWords/deployment))