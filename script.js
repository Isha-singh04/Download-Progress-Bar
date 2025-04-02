let progress = 0;
let timeRemaining = 50;
let downloading = false;

function updateProgress() {
    if (progress < 100) {
        progress += 1;
        timeRemaining -= 0.50;
        document.getElementById("progress").style.width = progress + "%";
        document.getElementById("progress-text").textContent = progress + "%";
        document.getElementById("time").textContent = Math.max(0, Math.floor(timeRemaining));
        setTimeout(updateProgress, 500);
    } else {
        document.getElementById("download-btn").textContent = "Download Complete";
        document.getElementById("download-btn").disabled = true;
    }
}

document.getElementById("download-btn").addEventListener("click", function() {
    if (!downloading) {
        downloading = true;
        this.textContent = "Downloading...";
        this.disabled = true;
        updateProgress();
    }
});

