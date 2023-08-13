export default function (phone) {
    return phone.replace(/[ ()-]/g, '')
}