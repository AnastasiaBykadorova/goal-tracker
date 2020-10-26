import { IGoal } from '@/interfaces/goal.interface';

export type GoalsCollection = FirebaseFirestore.CollectionReference<Omit<IGoal, 'id'>>;
