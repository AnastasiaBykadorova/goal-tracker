import {
  Resolver, Query,
} from 'type-graphql';
import { Goal } from '@/models/goal.model';
import * as admin from 'firebase-admin';
import { CollectionName } from '@/enums/collection-name.enum';
import { GoalsCollection } from '@/models/collections.types';

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
}
