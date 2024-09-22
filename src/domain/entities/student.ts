import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

interface StudentProps {
    name: string
}

class Student extends Entity<StudentProps> {
    static create(
        props: StudentProps, 
        id?: UniqueEntityID
    ) {
        const student = new Student({
            ...props,
            createAt: new Date()
        }, id)

        return student
    }
}