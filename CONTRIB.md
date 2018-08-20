# Contributor's Guide

We welcome pull requests from freeCodeCamp campers (our students) and seasoned JavaScript developers alike! Follow these steps to contribute:

1. Find an issue that needs assistance.

2. Let us know you are working on it by posting a comment on the issue.

3. Follow the instructions in this guide to start working on the issue.

Remember to feel free to ask for help.

Working on your first Pull Request? You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Found a Bug?
Be certain it's a new bug, go ahead and create a new GitHub issue. Be sure to include as much information as possible so we can reproduce the bug.

--------------------------------------------------------------------------------
## Quick Reference

|command|description|
|----------------|------------------------------|
| `npm run-script start` | parses, builds and serves the app |
| `npm run-script build` | builds the app and parses all the files |
| `npm run-script clean` | erases previous build |
| `npm run-script lint` | parses all the files and run all available JS tests |


### Creating a Pull Request

#### What is a Pull Request?

A pull request (PR) is a method of submitting proposed changes to the any repo. You will
make changes to copies of the files which make up freeCodeCamp in a personal fork, then
apply to have them accepted and merged into the repo.

#### Important: ALWAYS EDIT ON A BRANCH

Take away only one thing from this document: Never, **EVER**
make edits to the `staging` or `master` branch. ALWAYS make a new branch BEFORE you edit
files. This is critical, because if your PR is not accepted, your copy of
staging will be forever sullied and the only way to fix it is to delete your
fork and re-fork.

#### Methods

There are two methods of creating a pull request:

-   Editing files on a local clone (recommended)
-   Editing files via the GitHub/Gitlab Interface

##### Method 1: Editing via your Local Fork _(Recommended)_

This is the recommended method.

1.  Perform the maintenance step of rebasing `staging` or `master`.
2.  Ensure you are on the `staging` branch using `git status`:

        $ git status
        On branch staging
        Your branch is up-to-date with 'origin/staging'.

        nothing to commit, working directory clean

3.  If you are not on staging or your working directory is not clean, resolve
    any outstanding files/commits and checkout staging `git checkout staging`

4.  Create a branch off of `staging` with git: `git checkout -B
    branch/new-branch-name` **Note:** Branch naming is important. Use a name like
    `fix/short-fix-description` or `feature/short-feature-description`.

5.  Edit your file(s) locally with the editor of your choice.

4.  Check your `git status` to see unstaged files.

5.  Add your edited files: `git add path/to/filename.ext` You can also do: `git
    add .` or `git add -A` to add all unstaged files. Take care, though, because you can
    accidentally add files you don't want added. Review your `git status` first.

6.  Commit your edits. Type a standard commit message

7.  [Squash your commits](http://forum.freecodecamp.org/t/how-to-squash-multiple-commits-into-one-with-git/13231) if there are more than one.

8.  If you would want to add/remove changes to previous commit, add the files as in Step 5 earlier,
    and use `git commit --amend` or `git commit --amend --no-edit` (for keeping the same commit message).

9.  Push your commits to your GitHub Fork: `git push origin branch/your-branch-name`

##### Method 2: Editing via the GitHub Interface

Note: Editing via the GitHub Interface is not recommended, since it is not
possible to update your fork via GitHub's interface without deleting and
recreating your fork.

Read the [Wiki
article](http://forum.freecodecamp.org/t/how-to-make-a-pull-request-on-free-code-camp/19114)
for further information

### Common Steps

1.  Once the edits have been committed, you will be prompted to create a pull
    request on your fork's GitHub Page.

2.  By default, all pull requests should be against the main repo, `staging` or
`development` branch.

3.  Submit a [pull
    request](http://forum.freecodecamp.org/t/how-to-contribute-via-a-pull-request/19368)
    from your branch to `staging` or `development` branch.

4.  In the body of your PR include a more detailed summary of the changes you
    made and why.

    -   If the PR is meant to fix an existing bug/issue then, at the end of
        your PR's description, append the keyword `closes` and #xxxx (where xxxx
        is the issue number). Example: `closes #1337`. This tells GitHub to
        close the existing issue, if the PR is merged.

5.  Indicate if you have tested on a local copy of the site or not.

### Next Steps

#### If your PR is accepted

Once your PR is accepted, you may delete the branch you created to submit it.
This keeps your working fork clean.

You can do this with a press of a button on the GitHub PR interface. You can
delete the local copy of the branch with: `git branch -D branch/to-delete-name`

#### If your PR is rejected

Don't despair! You should receive solid feedback from the Issue Moderators as to
why it was rejected and what changes are needed.

Many Pull Requests, especially first Pull Requests, require correction or
updating. If you have used the GitHub interface to create your PR, you will need
to close your PR, create a new branch, and re-submit.

If you have a local copy of the repo, you can make the requested changes and
amend your commit with: `git commit --amend` This will update your existing
commit. When you push it to your fork you will need to do a force push to
overwrite your old commit: `git push --force`

Be sure to post in the PR conversation that you have made the requested changes.
