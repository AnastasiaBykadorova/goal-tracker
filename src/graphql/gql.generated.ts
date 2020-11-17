import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  goals: Array<Goal>;
};

export type Goal = {
  __typename?: 'Goal';
  id: Scalars['ID'];
  title: Scalars['String'];
  countPerWeek: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addGoal: Goal;
};

export type AddGoalMutationVariables = Exact<{ [key: string]: never; }>;


export type AddGoalMutation = (
  { __typename?: 'Mutation' }
  & { addGoal: (
    { __typename?: 'Goal' }
    & Pick<Goal, 'id' | 'title' | 'countPerWeek'>
  ) }
);

export type GetGoalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGoalsQuery = (
  { __typename?: 'Query' }
  & { goals: Array<(
    { __typename?: 'Goal' }
    & Pick<Goal, 'id' | 'title' | 'countPerWeek'>
  )> }
);


export const AddGoal = gql`
    mutation addGoal {
  addGoal {
    id
    title
    countPerWeek
  }
}
    `;
export const GetGoals = gql`
    query getGoals {
  goals {
    id
    title
    countPerWeek
  }
}
    `;

export const AddGoalDocument = gql`
    mutation addGoal {
  addGoal {
    id
    title
    countPerWeek
  }
}
    `;

/**
 * __useAddGoalMutation__
 *
 * To run a mutation, you first call `useAddGoalMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddGoalMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddGoalMutation({
 *   variables: {
 *   },
 * });
 */
export function useAddGoalMutation(options: VueApolloComposable.UseMutationOptions<AddGoalMutation, AddGoalMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddGoalMutation, AddGoalMutationVariables>> = {}) {
            return VueApolloComposable.useMutation<AddGoalMutation, AddGoalMutationVariables>(AddGoalDocument, options);
          }
export type AddGoalMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddGoalMutation, AddGoalMutationVariables>;
export const GetGoalsDocument = gql`
    query getGoals {
  goals {
    id
    title
    countPerWeek
  }
}
    `;

/**
 * __useGetGoalsQuery__
 *
 * To run a query within a Vue component, call `useGetGoalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGoalsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetGoalsQuery(
 *   {
 *   }
 * );
 */
export function useGetGoalsQuery(options: VueApolloComposable.UseQueryOptions<GetGoalsQuery, GetGoalsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetGoalsQuery, GetGoalsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetGoalsQuery, GetGoalsQueryVariables>> = {}) {
            return VueApolloComposable.useQuery<GetGoalsQuery, undefined>(GetGoalsDocument, undefined, options);
          }
export type GetGoalsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetGoalsQuery, GetGoalsQueryVariables>;