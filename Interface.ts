// INTERFACE
// Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members. It often helps in providing a standard structure that the deriving classes would follow.


interface Person {
    firstName: string;
    lastName: string;
}

function greetings(person: Person): string {
    return `Hello ${person.firstName} ${person.lastName}`

}

const emp={
    firstName:"Nazreen",
    lastName:"Sheikh"
}

console.log(greetings(emp))

// EXTENDING  INTERFACE

interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string ): boolean {
        console.log(`Sent email to ${email}`);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
