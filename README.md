# In Development PlantView application

##### Stages in a task
1. *ongoing*
2. *in progress*
3. *partially done*
4. *mostly done*
5. **Done**

## Current TODO

1.	Fix configuration reading, and comply with config.json. *mostly done* - Nick
2.	Fix CSS formatting. *mostly done* - Nick
3.	Rework titles. *motsly done* - Nick
4.	Resolve all warnings/errors. *mostly done* - Zach
5.	Pick which project to view. *mostly done* - Zach
6.	Move dropdown boxes for project, iModel, and drawing selections to the header. *mostly done* (waiting for all buttons to be fully functional) - Nick/Zach

7.	Fix weird character bug (e.g. miscellaneous). *in progress* - Nick 
8.	Resolve list of projects in production. *in progress* - Zach
9.	Pick which drawing to view. *in progress* - Zach

10.	Fix the broken log-in in QA (right now, no log-in is required, but lacking access to currently fix this).
11.	Move configuration.ts set-up into the electron viewer instead.
12.	Fix initial button page.
13.	Put button selection sin the menu.
14.	Fix the briefcase id error in production.
15.	Modify dependencies list, strip unused pieces, and keep only browser specific portions.
16.	Add configurable options to options bar, and have those be saved in a JSON.
17.	In the bottom properties display widget, add functionality to click on a category to display only that category, and click on it again to switch back to all categories.
18.	Display both the 3D and 2D views in the viewport.
19.	Only display and allow to pass in the projcet, iModel, and drawing names.
20.	Maybe move the menu button to the window menu or in the toolbar in the viewport.
21.	Look into token restoration after certain periods of time (i.e. does token expire after an hour even if using it?).
22.	Implement loading circle function upon switching views/iModels/projects (possibly does not need to be done...).
23.	Implement nicer loading functionality (possibly does no tneed to be done...).
24.	Fix the sign-in button (lacking access to currently fix this).

25.	Manually view all projects **Done** - Nick
26.	Display only relevant documents in tree, and create new component to replace tree view for plant document models. **Done** - Nick
27.	Automatically update on changes. **Done** - Nick
28.	Be able to change the views in the viewer. **Done** - Nick
29.	Be able to edit properties in the viewer. **Done** - Nick
30.	Add scrolling to property. **Done** - Nick
31.	Clean up code base. **Done ** - Nick
32.	Comment parts for explanations. **Done** - Nick
33.	Convert backend to be entirely electron/desktop based. **Done** - Nick
34.	Fix clashes with electron IPC and configuration of front-back communication. **Done** - Nick
35.	Determine the necessity of webpack in browser runtime environment. **Done** - Nick
36.	If we end up keeping webpack, reconfigure its options to be better suited (right now, it's causing some problems on the backend). **Done** - Nick
37.	Determine whether/how to implement ipcMain-ipcRenderer communication. **Done** - Nick
38.	Get viewport to successfully update. **Done** - Nick
39.	Determine whether or not to migrate configuration.ts to a JSON. **Done** - Nick
40.	Add unified selection capability back into the tree. **Done** - Nick
41.	Fix scrolling issue with properties tool. **Done** - Nick

## Development Setup

1.	If you do not have a ProjectWise Project, register a sample one. Otherwise, you can skip this step.
	- For *Production*, go to https://imodeljs.github.io/iModelJs-docs-output/getting-started/registration-dashboard/.
	- For *QA*, go to http://builds.bentley.com/prgbuilds/AzureBuilds/iModelJsDocs/public/getting-started/registration-dashboard/.
	Go to [Registered Products], and select [+ New Project].
	Under [iModel Source], use the sample [Bentley Example] with the [Retail Building Sample] selection.

2.  Open the Command Prompt.

3.	Clone the rpeository from GitHub on your local machine with the following command:
	*	git clone https://github.com/OpenPlantDev/PlantViewer

4.	Navigate to the cloned directory with the following command:
	*	cd PlantViewer

5.	Open the directory in Visual Studio Code with the following command:
	*	code .

6.	Open [src/common/configuration.json] and scroll down to the bottom underneath the "* CONFIGURATION SETTINGS: *" comment.

7.	Comment/uncomment the lines of code for production/QA (*Production* requires 1 line, and *QA* requires 2 lines).

8.	Set the names of the Project, iModel, and Drawing in the lines below.

9.	Save your changes.

10.	Type [Ctrl + `] to open the terminal in Visual Studio Code.

11.	If you have not done so already, type the following command in the terminal to install the dependencies:
	*	npm install
	NOTE: This only needs to be done one time even if you change the configuration settings.

12.	Type the following command in the terminal to build the application:
	*	npm run build

13.	Type one of the following commands in the terminal to run the applicaiton:
	- To run in browser:
		*	npm run start:servers
	- To run in electron:
		*	npm run electron

14.	To run in browser, open [localhost:3000] in a web browser.
	To run in electron, a window will open automatically.

15.	*To view other projects/models, repeat steps 6, 7, 8, 9, 11, 12, and 13.*
	NOTE: Step 10 does not need to be repeated.

## Git instructions

### To Clone:
   - type into any command line, in the directory you want to project to be git clone "urltoproject"

### To push changes

   - cd into your local copy of project
   - type git add .
   - type git commit -m "Your comment on commits"
   - type git push

  It will then push changes, but be careful. If you get something called a merge conflict warning, type git stash, and google how to proceed. a merge conflict will change portions of the code. This is preferably avoided.
  Git stash creates a local copy of your changes, but reverts your files to the main shared version. This is one way to deal with merge conflicts. To apply your changes simply type git stash pop.
  **Warning** If you have a merge conflict, this will jumble the code, you should check what was changed before you commit.

  If you would like to check the files you are about to commit, before you commit type git status.

### To pull changes

  - cd into your local copy of project
  - type git pull

### Important
Don't remove node_modules from your .gitignore file. This is the file listing everything git will ignore
when looking for changes. This is because this file is very big, and everyone should have the same one, so its not necessary to upload it.
You can add files to the gitignore simply by editting it manually, I'm not sure there's a command for that. If you want to remove files in your gitignore from your repository, you may type git clean.
