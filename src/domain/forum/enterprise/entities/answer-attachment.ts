import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class AnswerAttachemntsProps {
  answerId: UniqueEntityID | undefined
  attachemntId!: UniqueEntityID
}

export class AnswerAttachemnt extends Entity<AnswerAttachemntsProps> {
  get answerId() {
    return this.props.answerId
  }

  get attachemntId() {
    return this.props.attachemntId
  }

  static create(props: AnswerAttachemntsProps, id?: UniqueEntityID) {
    const attachment = new AnswerAttachemnt(props, id)

    return attachment
  }
}
