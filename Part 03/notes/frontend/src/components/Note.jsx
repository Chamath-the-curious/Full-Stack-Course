const Note = ({ note, toggleImoportance }) => {
    const label = note.important
        ? 'make not important' : 'make important'

    return (
    <li className="note">
        {note.content}
        <button onClick={toggleImoportance}>{label}</button>
    </li>)
}

export default Note
