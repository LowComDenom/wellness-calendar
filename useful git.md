# Submodules

## Init submodules according to currently specified commit
`git submodule update --init --recursive`

## Sync all with main
`git submodule foreach --recursive 'git checkout main && git pull'`

## Delete a submodule
`git submodule deinit -f path/to/submodule
git rm -f path/to/submodule
rm -rf .git/modules/path/to/submodule
git commit -m "Remove submodule"`

# Feature branch lifecycle
```mermaid
flowchart TD
  subgraph main
    pull["git switch main
          &&
          git pull"]
    switch1["git switch -c my-feature"]
  end
  subgraph my-feature
    changes("Make changes")
    add["git add ."]
    commit["git commit -m 'feature implemented'"]
    push["git push -u origin my-feature"]
  end
  subgraph Github
    step1>"Open repo"]
    step2>"Go to PR tab"]
    step3>"Make a PR:
          my-feature ---> main"]
    step4>"Review and merge"]
  end
  subgraph Cleanup
    switch2["git switch main
            &&
            git pull"]
    deletel["git branch -d my-feature"]
    deleter["git push origin --delete my-feature"]
  end
  main-->my-feature-->Github-->Cleanup
  pull-->switch1
  changes-->add-->commit-->push
  step1-->step2-->step3-->step4
  switch2-->deletel-->deleter
```
### Pull current main and make a new branch
`git switch main
git pull
git switch -c my-feature`

### Commit and push after making changes
`git add .
git commit -m 'Implement feature'`  
`git push -u origin my-feature`  
`-u` sets up the upstream so subsequent pushes can simply be `git push`

### Push and make a pull request
On GitHub:
  * Open the repository.
  * Go to the Pull requests tab, or follow the prompt for your newly pushedbranch.
  * Create a PR from my-feature → main.  
*likely ends here for this class* 
  * Review the changes and merge when ready.

### Cleanup local

`git switch main
git pull`  
Delete local branch:  
`git branch -d my-feature`  
Maybe delete remote branch too:  
`git push origin --delete my-feature`
