# Define named parameters 
param ( 
    [string]$projectRepo, 
    [string]$PipRequirement
)

# Install Chocolatey if not already installed
if (-not (Get-Command choco -ErrorAction SilentlyContinue)) {
    Set-ExecutionPolicy Bypass -Scope Process -Force; `
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
    Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
}

# Check if Python is installed
$pythonPath = Get-Command python -ErrorAction SilentlyContinue

if ($null -eq $pythonPath) {
    Write-Host "Python is not installed on this system."
    
    # Install Python using Chocolatey
    choco install python -y
    
    # Verify Python installation
    python --version
} else {

    Write-Host "Python is installed at: $($pythonPath.Path)"
}

# Navigate to the project directory
$current_dir = Get-Location
Set-Location -Path $projectRepo

# Check if the file exists
if (Test-Path -Path .venv) {
    Write-Host "The venv is already made."

} else {
    
    Write-Host "The venv has not existed."
    Write-Host "Run the command 'python -m venv .venv'"
    # Create a virtual environment
    python -m venv .venv
}

# Activate the virtual environment
& "$projectRepo\.venv\Scripts\Activate.ps1"

# Upgrade pip
pip install --upgrade pip

# Check if the requirements.txt file exists
if (Test-Path -Path $PipRequirement) {
    Write-Host "The requirements.txt file exists."
    pip install -r $PipRequirement

} else {
    Write-Host "The requirements.txt file does not exist."
    # Install common packages
    pip install numpy pandas requests django djangorestframework
}


# Deactivate the virtual environment
deactivate
Write-Host "Python environment setup is complete."

Set-Location -Path $current_dir
