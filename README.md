# Frankenstein-portfolio
Frankenstein Portfolio
## Introduction
Hi, my name is Le Hoang Thinh, I identify myself as an inventor and I want to learn absolutely everything even if it is not practical.
<br>
This project is a my porfolio with the involvement of frontend, backend, database, devops, and many other domains.
Just as the name suggest, it is a Frankenstein porfolio, an abomination if you could say. 
But then again, the main purpose of this repo is for me to learn everything so expect the chaotics

## Prequisite
Please install the following:
### Window
#### Step 1: Download package management for Powershell

Download the Chocolatey here https://chocolatey.org/install

#### Step 2: Open PowerShell as Administrator:
Right-click on the PowerShell icon and select "Run as Administrator".

#### Step 3: Set the Execution Policy:

Run the following command to set the execution policy to allow running unsigned scripts:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
This command sets the execution policy to RemoteSigned for the current user, which allows running scripts that are created locally and requires scripts downloaded from the internet to be signed by a trusted publisher.

#### Step 4: Run Your Script

Now, try running your script again:

```powershell
Frankenstein-portfolio\DevOps\NewcomerSetup\EnvSetup.ps1
```

#### Step 5: Reset the Execution Policy 
If you want to revert the execution policy to its default setting after running your script, you can use the following command:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope CurrentUser
```
This will set the execution policy back to Restricted, which is the default setting and prevents running any scripts.