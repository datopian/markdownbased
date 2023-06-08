---
title: How to edit a single page on the Life Itself website
---

Welcome to the How to edit a single page on the Life Itself website for new team members:

https://lifeitself.org/

This guide is designed for non-technical contributors; there's no need to know how to code. 🔥

## Steps

### Step 1: Navigate to the underlying Markdown file and edit it

**Option A: Use "Edit this page" button**

Most pages on our website have an "Edit this page" button at the bottom. By clicking it, you'll be redirected to the corresponding Markdown file in [the Life Itself website repository](https://github.com/life-itself/community/tree/main), ready for editing.

**Option B: Locate the underlying Markdown file on our repository yourself**

If the "Edit this page" button is unavailable, or if you're looking to familiarize yourself more deeply with the structure of the repository 💪, follow these steps:

1. Go to the [Life Itself website repository] (https://github.com/life-itself/community/tree/main).

2. Find and click on the `content` folder to open it. This is where all the Markdown files for the website content are stored.

3. Navigate through the subfolders within the `content` folder to find the file corresponding to the page you wish to edit.

> ![tip] To know exactly which file to look for, consider the URL of the page on the website. The URL corresponds to the path of the file in the repository, without the '/content' prefix. For example, if the URL is `https://lifeitself.org/ecosystem/profiles/buddhafield`, the file will be located at `/content/ecosystem/profiles/buddhafield.md`.

4. Once you've found the correct file, click on it to see its contents.

5. Click on the pencil icon near the top right corner. This will open the file in edit mode.

Whichever option you chose, at this point you are ready to start editing the content of the file. Remember, the content of our web pages are written in Markdown. If you are unfamiliar with Markdown, check out [this short guide](https://flowershow.app/docs/syntax) on available syntax elements.

> ![tip] **Preview your changes**
> You can switch to the "Preview" mode of the file by toggling from "Edit" -> "Preview" at the top of the file content, to see a rough visualization of your changes. Keep in mind, that the actual website may have different styling and may support additional Markdown elements that GitHub doesn't render on the preview. But if the syntax is listed in the above guide, it is good to use.

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

Congratulations! You've now learned how to edit the content on the LifeItself website. From locating the correct Markdown file, to making changes and proposing them through a Pull Request, you've covered all the basics.

If anything is not clear to you, or you have suggestions on how we can make this 'How to' better, please don't hesitate to let us know. You can do this by opening an issue or starting a discussion in the repository. Your input will help us improve this guide and make the process easier for future contributors.

Thank you for being part of the Life Itself community. Happy editing!

---
