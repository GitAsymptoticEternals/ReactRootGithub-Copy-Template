-----------------------------------Saved Output GitHub Commands-----------------------------------------------

PS C:\Users\ashis\Desktop\ReactRootFolder> git status
fatal: not a git repository (or any of the parent directories): .git
PS C:\Users\ashis\Desktop\ReactRootFolder> git init
Initialized empty Git repository in C:/Users/ashis/Desktop/ReactRootFolder/.git/
PS C:\Users\ashis\Desktop\ReactRootFolder> git branch -M main
PS C:\Users\ashis\Desktop\ReactRootFolder> git branch
PS C:\Users\ashis\Desktop\ReactRootFolder> git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        App.js
        index.css
        index.html

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\ashis\Desktop\ReactRootFolder> git add .
PS C:\Users\ashis\Desktop\ReactRootFolder> git commit -m "base"
[main (root-commit) e91ae6d] base
 3 files changed, 41 insertions(+)
 create mode 100644 App.js
 create mode 100644 index.css
 create mode 100644 index.html
PS C:\Users\ashis\Desktop\ReactRootFolder> git remote add origin https://github.com/GitAsymptoticEternals/ReactRootGithub.git
PS C:\Users\ashis\Desktop\ReactRootFolder> git remote -v
origin  https://github.com/GitAsymptoticEternals/ReactRootGithub.git (fetch)
origin  https://github.com/GitAsymptoticEternals/ReactRootGithub.git (push)
PS C:\Users\ashis\Desktop\ReactRootFolder> git push -u origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 775 bytes | 775.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/GitAsymptoticEternals/ReactRootGithub.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Users\ashis\Desktop\ReactRootFolder> git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

---------------------------------------------------------------------------------------------------------------
