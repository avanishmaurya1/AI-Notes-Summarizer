 // ==========================
// DOM Elements
// ==========================

const summarize = document.getElementById("summarize");
const clearBtn = document.getElementById("clear");
const notes = document.getElementById("notes");
const result = document.getElementById("result");
const loading = document.getElementById("loading");
const copy = document.getElementById("copy");

const themeToggle = document.getElementById("themeToggle");
const charCount = document.getElementById("charCount");
const downloadPdf = document.getElementById("downloadPdf");
const toast = document.getElementById("toast");

// ==========================
// Character Counter
// ==========================

notes.addEventListener("input", () => {
    charCount.innerText = notes.value.length;
});

// ==========================
// Toast Notification
// ==========================

function showToast(message) {

    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}

// ==========================
// Theme
// ==========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    enableLightMode();
} else {
    enableDarkMode();
}

themeToggle.addEventListener("click", () => {

    if (document.body.classList.contains("light")) {

        enableDarkMode();
        localStorage.setItem("theme", "dark");

    } else {

        enableLightMode();
        localStorage.setItem("theme", "light");

    }

});

function enableDarkMode() {

    document.body.classList.remove("light");

    document.body.style.background =
        "linear-gradient(135deg,#0f172a,#1e293b,#0f172a)";

    document.querySelector(".container").style.color = "white";

    notes.style.background = "#1e293b";
    notes.style.color = "white";

    document.querySelector(".output").style.background = "#111827";

    result.style.color = "#dbeafe";

    themeToggle.innerHTML = "🌙";

}

function enableLightMode() {

    document.body.classList.add("light");

    document.body.style.background =
        "linear-gradient(135deg,#eff6ff,#dbeafe,#f8fafc)";

    document.querySelector(".container").style.color = "#111827";

    notes.style.background = "#ffffff";
    notes.style.color = "#111827";

    document.querySelector(".output").style.background = "#ffffff";

    result.style.color = "#111827";

    themeToggle.innerHTML = "☀️";

}

// ==========================
// Summarize
// ==========================

summarize.addEventListener("click", async () => {

    if (notes.value.trim() === "") {

        showToast("⚠ Please paste your notes first.");
        return;

    }

    loading.style.display = "block";

    summarize.disabled = true;
    clearBtn.disabled = true;

    result.innerHTML = "";

    try {

        const response = await fetch("https://ai-notes-summarizer-4b71.onrender.com/api/summarize", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                notes: notes.value

            })

        });

        const data = await response.json();

        if (data.success) {

            result.innerHTML = data.summary;

            showToast("✅ Summary Generated");

        }

        else {

            result.innerHTML = data.message;

        }

    }

    catch (error) {

        console.error(error);

        result.innerHTML = "❌ Failed to connect to backend.";

        showToast("Backend Connection Failed");

    }

    finally {

        loading.style.display = "none";

        summarize.disabled = false;
        clearBtn.disabled = false;

    }

});

// ==========================
// Clear
// ==========================

clearBtn.addEventListener("click", () => {

    notes.value = "";

    result.innerHTML = "Your summarized notes will appear here.";

    charCount.innerText = "0";

    showToast("🗑 Cleared");

});

// ==========================
// Copy Summary
// ==========================

copy.addEventListener("click", async () => {

    if (
        result.innerText.trim() === "" ||
        result.innerText === "Your summarized notes will appear here."
    ) {

        showToast("Nothing to copy.");

        return;

    }

    await navigator.clipboard.writeText(result.innerText);

    copy.innerHTML = "✅ Copied";

    showToast("Copied Successfully");

    setTimeout(() => {

        copy.innerHTML = "📋 Copy";

    }, 2000);

});

// ==========================
// Download PDF
// ==========================

downloadPdf.addEventListener("click", () => {

    if (
        result.innerText.trim() === "" ||
        result.innerText === "Your summarized notes will appear here."
    ) {

        showToast("Generate summary first.");

        return;

    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFont("helvetica");

    doc.setFontSize(18);

    doc.text("AI Notes Summary", 10, 20);

    doc.setFontSize(12);

    const lines = doc.splitTextToSize(result.innerText, 180);

    doc.text(lines, 10, 35);

    doc.save("summary.pdf");

    showToast("📄 PDF Downloaded");

});