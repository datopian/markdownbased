---
Title: How to add a single (simple markdown) page
---
Welcome to the How to add a simple page on the Life Itself website for new team members: 

https://lifeitself.org/

This guide is designed for non-technical contributors; there's no need to know how to code. 

> **Tip.** We recommend doing this locally in Obsidian, a Markdown editor, if you are planning to link to other pages from this page, embedding images and other interlinking actions. For how to do this you can view [this guide](details to be added)

## Steps
  
### Step 1  : Create the new page

1. Go to the [Life Itself website repository] (https://github.com/life-itself/community/tree/main).

2. Find and click on the `content` folder to open it. This is where all the Markdown files for the website content are stored and where you will be adding your file (page). If you need to add this within a subfolder in the content folder, find this folder and click on this as well.

3. Click “Add file”, add the page name + extension .md i.e. new-page-name.md

4. Paste or write the file using the md layout 

5. Preview

The following steps are the same as from the [Edit a single page how to](link)                                               
### Step 2: Save your changes

When you're happy with your edits, click on the “Commit changes” button. In the "Commit message" field, provide a concise summary of your changes. If necessary, you can add further explanation in the "Extended description" text field.

> [!tip] **How to write a good commit message (and a description).**
> Your commit message should be no longer than 50 chracters. It should be a concise explanation of your changes - a phrase, rather than a full sentence(s). It shouldn't end with a dot and should use imperative, present tense, e.g. "Fix typo in xyz.md". You can add more information in the description field, which should be no longer than 72 characters.

❗️ Select “Create a new branch for this commit and start a pull request” and enter a descriptive name for your new branch. This will be the branch that your changes will be committed (saved) to.

When you're ready, click on "Propose changes" to move to the next step.

> [!important] **Why do I need to create a new branch vs committing directly to main?**
> Creating a new branch allows you to work on your changes without affecting the 'main' branch, which is the primary copy of the project - the one which is used to build the live version of the website. This way, the main project remains undisturbed until your changes are reviewed by the LifeItself team members, approved and merged to the main branch (copy) of the repository.

> [!tip] **How to name your branches.**
> When naming a GitHub branch, keep it concise and descriptive. Use hyphens or underscores to separate words, and include relevant context like the feature, bug, or issue number you're working on.

> [!info] **What does "commit changes" mean?**
> Committing changes is like saving a file. In the context of GitHub, it means you're saving your edits or additions to the repository - or strictly, to a given branch of the repository. Each commit is accompanied by a message describing the changes, which makes it easy to track modifications over time.

> [!info] **What is a branch?**
> A branch is a copy of the main project codebase. When you create a new branch, you are essentially creating a copy of the project codebase that you can work on without affecting the main project codebase.

### Step 3: Propose your changes

After clicking "Propose changes", a new branch will be created with your changes. You'll then be redirected to the "Open a pull request" page, where you'll see a summary of your modifications.

Review your Pull Request to ensure all the changes are as intended. If needed, provide additional context or explanation in the comment box.

When everything is in order, click "Create Pull Request".

> [!info] **What is a Pull Request?**
> A Pull Request is a request to merge changes from one branch into another branch. In this 'How to' a Pull Request is a request to merge your changes from the new branch you created into the main project codebase - which lives on the branch called `main`.

### Step 4: See your changes live

Once your Pull Request has been created, it will be reviewed by the project team. If the project team approves your Pull Request, it will be merged into the `main` project branch, and after that, it should be live on our website in no time! 🎉

## Summary
You've now learned how to create a new page on the LifeItself website. 

If anything is not clear to you, or you have suggestions on how we can make this 'How to' better, please don't hesitate to let us know. You can do this by opening an issue or starting a discussion in the repository. Your input will help us improve this guide and make the process easier for future contributors.

Thank you for being part of the Life Itself community. Happy editing!
