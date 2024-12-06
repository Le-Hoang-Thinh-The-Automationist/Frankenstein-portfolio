function Update-Toolbox{
    param(
        [string]$branchName,
        [string]$currentBranch
    )

    $branchExists = git branch --list $branchName
    
    Write-Host "======================================================="
    
    if ($branchExists) {
        Write-Host "Proceed to update the newest toolbox to $branchName"
        
        # Git checkout the branch
        $toolbox_branch_commit_message = git log -1 --pretty=%B

        git checkout $branchName
        git merge $currentBranch -m "Update from devops/toolbox: $toolbox_branch_commit_message"
        git push

        # Return to the original devops branch
        git checkout $currentBranch

    } else {
        Write-Host "Branch '$branchName' does not exist in the repository."
    }
}


# Get the current branch name
$currentBranch = git rev-parse --abbrev-ref HEAD

# Output the branch name
Write-Host "Current branch: $currentBranch"
if ($currentBranch -eq "devops/toolbox"){
    Update-Toolbox -branchName "frontend/dev" -currentBranch $currentBranch
    Update-Toolbox -branchName "backend/dev" -currentBranch $currentBranch
}

