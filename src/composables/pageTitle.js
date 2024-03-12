export default function updateTitle(title) {
    const baseTitle = 'F1 Standings - '
    document.querySelector('title').innerText = baseTitle + title
}