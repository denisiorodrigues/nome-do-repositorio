import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"

interface AnswerQuestionRequest {
    instructorId: string
    questionId: string
    content: string
}

export class AnswerQuestionUseCase {

    constructor( 
        private AnswersRepository : AnswersRepository
    ) {}

    async execute({ instructorId, questionId, content } : AnswerQuestionRequest) {
        const answer = Answer.create({
            authorId: new UniqueEntityID(instructorId),
            questionId: new UniqueEntityID(questionId),
            content, 
        })

        await this.AnswersRepository.create(answer)

        return answer
    } 
}