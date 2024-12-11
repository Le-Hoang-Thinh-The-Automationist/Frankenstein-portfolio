param(
    [String]$front_end_project,
    [String]$folder_to_deploy
);

# Get the current location
$current_directory = Get-Location
Set-Location $front_end_project

# Build SW
npm run build

$S3_from_AWS = "s3://ecommerce-project-s3deploy"

# Deploy
aws s3 sync "$front_end_project\\$folder_to_deploy" $S3_from_AWS