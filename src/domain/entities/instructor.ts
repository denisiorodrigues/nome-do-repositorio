import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"

interface InstructorProps {
    name: string
}

export class Intructor extends Entity<InstructorProps> {

    get name() {
        return this.props.name
    }

    static create(
        props: InstructorProps,
        id?: UniqueEntityID
    ) {
        const instructor = new Intructor({
            ...props,
            createAt: new Date()
        }, id)

        return instructor
    }
}