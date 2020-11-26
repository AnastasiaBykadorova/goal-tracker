import {
  Resolver, Query, Mutation, Arg,
} from 'type-graphql';
import { Goal } from '@/models/goal.model';
import * as admin from 'firebase-admin';
import { CollectionName } from '@/enums/collection-name.enum';
import { GoalsCollection } from '@/models/collections.types';
import { ApolloError } from 'apollo-server-express';

@Resolver(Goal)
export class GoalsResolver {
  goalsCollection = admin.firestore().collection(CollectionName.GOALS) as GoalsCollection;

  @Query(() => [Goal], { name: 'goals' })
  async getGoals(): Promise<Goal[]> {
    const goalsSnapshot = await this.goalsCollection.get();
    const goalsData = goalsSnapshot.docs.map((goalDocument) => {
      const goal: Goal = {
        ...goalDocument.data(),
        id: goalDocument.id,
      };

      return goal;
    });

    return goalsData;
  }

  @Mutation(() => Goal)
  async addGoal(
    @Arg('title') title: string,
      @Arg('countPerWeek') countPerWeek: number,
  ): Promise<Goal> {
    const goalInput = {
      title,
      countPerWeek,
    };
    const newGoalDocumentReference = await this.goalsCollection.add(goalInput);
    const newGoalDocument = await newGoalDocumentReference.get();
    const newGoalData = newGoalDocument.data();

    if (!newGoalData) throw new ApolloError('Couldn\'t add goal');

    const newGoal: Goal = {
      ...newGoalData,
      id: newGoalDocument.id,
    };

    return newGoal;
  }
}
