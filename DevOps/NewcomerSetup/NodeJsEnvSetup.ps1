# Define named parameters 
param ( 
    [string]$projectDirectory
)

# Install Chocolatey if not already installed
if (-not (Get-Command choco -ErrorAction SilentlyContinue)) {
    Set-ExecutionPolicy Bypass -Scope Process -Force; `
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
    iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
}



# Check if NodeJs is installed
$nodePath = Get-Command node -ErrorAction SilentlyContinue
if ($null -eq $nodePath) {
    Write-Host "NodeJS is not installed on this system."
    # Install Node.js using Chocolatey
    choco install nodejs -y

    # Verify Node.js and npm installation
    node -v
} else {
    Write-Host "NodeJS is installed at: $($nodePath.Path)"
}

npm -v

# Navigate to the ReactJS project directory
$currentDir = Get-Location
Set-Location -Path $projectDirectory 

# Install the necessary libraries for the ReactJS project
npm install

Write-Host "Node.js, npm, and ReactJS libraries installation is complete."
Set-Location -Path $currentDir
