import {
  Resolver, Query, Ctx, UseMiddleware,
} from 'type-graphql';
import { UserGoal } from '@/models/user-goal.model';
import { CollectionName } from '@/enums/collection-name.enum';
import * as admin from 'firebase-admin';
import { UserGoalsCollection } from '@/models/collections.types';
import { AuthGuard } from '@/guards/auth.guard';

@Resolver(UserGoal)
export class UserGoalsResolver {
  userGoalsCollection = admin.firestore()
    .collection(CollectionName.USER_GOALS) as UserGoalsCollection;

  @Query(() => String, { name: 'userGoals' })
  @UseMiddleware(AuthGuard)
  async getUserGoals(
    @Ctx('user') currentUser: admin.auth.UserRecord,
  ): Promise<string> {
    // TODO: Extract user goals from query snapshot
    console.log('currentUser', currentUser);
    const some = await this.userGoalsCollection.where('userId', '==', currentUser.uid).get();
    console.log(some);

    return currentUser.uid;
  }
}
