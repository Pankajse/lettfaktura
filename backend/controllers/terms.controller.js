const prisma = require("../lib/prisma");

const getTerms = async (req, res) => {
    try {
        const {language} = req.query;
        const termsResponse = await prisma.terms.findUnique({
            where: { id: 1 },
        });
        let terms;
        if(language === 'English'){
             terms = termsResponse.english;
        } else {
             terms = termsResponse.svenska;
        }
        res.status(200).json(terms);
    } catch (error) {
        console.error("Error fetching terms:", error);
        res.status(500).json({ message: "Failed to fetch terms" });
    }
};

module.exports = { getTerms };