import Person from "./Person";

const Persons = ({ persons, deletePerson }) => {
    return (
        <div>
            {persons.map(person =>
                <Person person={person} key={person.id} deletePerson={() => deletePerson(person.id)}/>
            )}
        </div>
    )
}

export default Persons
