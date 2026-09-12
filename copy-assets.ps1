# Copy assets from the original site to the Next.js public directory.
# Run this script from the nextjs-app directory:
#   powershell -ExecutionPolicy Bypass -File copy-assets.ps1

$sourceRoot = Split-Path -Parent $PSScriptRoot
if ($PSScriptRoot -eq $null -or $PSScriptRoot -eq "") {
    $sourceRoot = Split-Path -Parent (Get-Location)
}

# Use the parent of nextjs-app as source
$sourceRoot = Resolve-Path ".."

$destImages = ".\public\images"
$destReels = ".\public\images\reels"

# Create directories
New-Item -ItemType Directory -Force -Path $destImages | Out-Null
New-Item -ItemType Directory -Force -Path $destReels | Out-Null

# Copy root-level images
$rootImages = @(
    "logo.jpeg",
    "boss.PNG",
    "collaborator.png",
    "signature.png"
)

foreach ($img in $rootImages) {
    $src = Join-Path $sourceRoot $img
    if (Test-Path $src) {
        Copy-Item $src -Destination $destImages -Force
        Write-Host "Copied: $img" -ForegroundColor Green
    } else {
        Write-Host "NOT FOUND: $img" -ForegroundColor Red
    }
}

# Copy assets folder images
$assetImages = @(
    "about_photo.PNG",
    "hero_graphic.png"
)

foreach ($img in $assetImages) {
    $src = Join-Path $sourceRoot "assets\$img"
    if (Test-Path $src) {
        Copy-Item $src -Destination $destImages -Force
        Write-Host "Copied: assets\$img" -ForegroundColor Green
    } else {
        Write-Host "NOT FOUND: assets\$img" -ForegroundColor Red
    }
}

# Copy all reel thumbnails
$reelsDir = Join-Path $sourceRoot "assets\reels"
if (Test-Path $reelsDir) {
    $reelFiles = Get-ChildItem $reelsDir -File
    foreach ($reel in $reelFiles) {
        Copy-Item $reel.FullName -Destination $destReels -Force
        Write-Host "Copied: reels\$($reel.Name)" -ForegroundColor Green
    }
    Write-Host "`nCopied $($reelFiles.Count) reel thumbnails." -ForegroundColor Cyan
} else {
    Write-Host "Reels directory not found at: $reelsDir" -ForegroundColor Red
}

Write-Host "`nAsset migration complete!" -ForegroundColor Cyan
