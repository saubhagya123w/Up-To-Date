document.addEventListener("DOMContentLoaded", function () {
    function checkFakeNews() {
        const newsContent = document.getElementById("news-content").value;
        if (newsContent.trim() !== "") {
            analyzeNews(newsContent);
        } else {
            alert("Please enter valid news article content.");
        }
    }

    async function analyzeNews(newsContent) {
        try {
            
            const sentimentApiKey = 'adcd8dc4bf748de03df020a0875184e5';
            const sentimentResponse = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${sentimentApiKey}&txt=${encodeURIComponent(newsContent)}&lang=en`);
            const sentimentData = await sentimentResponse.json();

            const resultElement = document.getElementById("result");

            if (sentimentData && sentimentData.score_tag) {
                resultElement.innerHTML = `<p>Sentiment: ${sentimentData.score_tag}</p>`;
                if (sentimentData.score_tag === 'P+' || sentimentData.score_tag === 'P') {
                    resultElement.innerHTML += "<p>The news article is likely positive or neutral.</p>";
                } else {
                    resultElement.innerHTML += "<p>The news article may have negative sentiment and could be considered suspicious.</p>";
                }
            } else {
                resultElement.innerHTML = "<p>Unable to determine sentiment.</p>";
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    }

    window.checkFakeNews = checkFakeNews;
});