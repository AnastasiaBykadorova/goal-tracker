import { IGoal } from '@/interfaces/goal.interface';
import { IUserGoal } from '@/interfaces/user-goal.interface';

export type GoalsCollection = FirebaseFirestore.CollectionReference<Omit<IGoal, 'id'>>;

export type UserGoalsCollection = FirebaseFirestore.CollectionReference<Omit<IUserGoal, 'id'>>;
