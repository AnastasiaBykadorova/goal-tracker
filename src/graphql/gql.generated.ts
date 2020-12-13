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
};

export type GetGoalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGoalsQuery = (
  { __typename?: 'Query' }
  & { goals: Array<(
    { __typename?: 'Goal' }
    & Pick<Goal, 'id' | 'title'>
  )> }
);


export const GetGoals = gql`
    query getGoals {
  goals {
    id
    title
  }
}
    `;

export const GetGoalsDocument = gql`
    query getGoals {
  goals {
    id
    title
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