export default function (text) {
    const sentences = text.split('. ');
    const formattedSentences = sentences.map((sentence, index) => {
        if ((index + 1) % 3 === 0) {
            return sentence + '.</p><p>';
        } else {
            return sentence;
        }
    });
    const formattedText = '<p>' + formattedSentences.join('. ').replace(/<p>\./g, '<p>') + '.</p>';
    return formattedText;
}

