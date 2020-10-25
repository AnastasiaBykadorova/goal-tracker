import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Goal {
  @Field(() => String)
  title: string;

  @Field(() => Int)
  countPerWeek: number;
}
