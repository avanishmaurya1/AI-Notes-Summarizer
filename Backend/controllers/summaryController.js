 const { generateSummary } = require("../services/geminiService");

const summarizeNotes = async (req, res) => {
    try {
        const { notes } = req.body;

        if (!notes) {
            return res.status(400).json({
                success: false,
                message: "Notes are required",
            });
        }

        const summary = await generateSummary(notes);

        res.status(200).json({
            success: true,
            summary,
        });

    } catch (error) {
        console.error("Error:", error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { summarizeNotes };