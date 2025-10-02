import Person from "./Person";

const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map(person =>
                <Person person={person} key={person.id} />
            )}
        </div>
    )
}

export default Persons
