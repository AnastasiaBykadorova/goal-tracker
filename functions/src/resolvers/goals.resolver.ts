import { Resolver, Query } from 'type-graphql';
import { Goal } from '@/models/goal.model';

@Resolver(Goal)
export class GoalsResolver {
  @Query(() => [Goal], { name: 'goals' })
  getGoals(): Goal[] {
    return [{ title: 'Success!', countPerWeek: 7 }];
  }
}
