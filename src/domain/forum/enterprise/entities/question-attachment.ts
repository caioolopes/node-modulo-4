import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class QuestionAttachemntsProps {
  questionId: UniqueEntityID | undefined
  attachemntId!: UniqueEntityID
}

export class QuestionAttachemnt extends Entity<QuestionAttachemntsProps> {
  get questionId() {
    return this.props.questionId
  }

  get attachemntId() {
    return this.props.attachemntId
  }

  static create(props: QuestionAttachemntsProps, id?: UniqueEntityID) {
    const attachment = new QuestionAttachemnt(props, id)

    return attachment
  }
}
