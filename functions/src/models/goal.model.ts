import {
  Field, Int, ObjectType, ID,
} from 'type-graphql';
import { IGoal } from '@/interfaces/goal.interface';

@ObjectType()
export class Goal implements IGoal {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => Int)
  countPerWeek: number;
}
