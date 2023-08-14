export default function (text, maxWords) {
    const words = text.split(' ');
    if (words.length <= maxWords) {
        return text;
    } else {
        const trimmedText = words.slice(0, maxWords).join(' ') + '...';
        return trimmedText;
    }
}
