export default function (data) {
    const currentDate = new Date(data);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options)
}
