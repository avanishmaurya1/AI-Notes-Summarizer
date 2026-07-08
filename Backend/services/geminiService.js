const ai = require("../config/geminiConfig");

const generateSummary = async (notes) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Summarize these notes in simple points:\n\n${notes}`,
        });

        return response.text;
    } catch (error) {
        console.error("Gemini Error:", error);
        throw new Error("Failed to generate summary");
    }
};

module.exports = { generateSummary };