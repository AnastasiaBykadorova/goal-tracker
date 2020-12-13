import {
  ObjectType, Field, ID, Int,
} from 'type-graphql';
import { IUserGoal } from '@/interfaces/user-goal.interface';

@ObjectType()
export class UserGoal implements IUserGoal {
  @Field(() => ID)
  userId: string;

  @Field(() => ID)
  goalId: string;

  @Field(() => Int)
  count: number;
}
