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
  title: Scalars['String'];
  countPerWeek: Scalars['Int'];
};

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = (
  { __typename?: 'Query' }
  & { goals: Array<(
    { __typename?: 'Goal' }
    & Pick<Goal, 'title'>
  )> }
);


export const Test = gql`
    query test {
  goals {
    title
  }
}
    `;

export const TestDocument = gql`
    query test {
  goals {
    title
  }
}
    `;

/**
 * __useTestQuery__
 *
 * To run a query within a Vue component, call `useTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useTestQuery(
 *   {
 *   }
 * );
 */
export function useTestQuery(options: VueApolloComposable.UseQueryOptions<TestQuery, TestQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TestQuery, TestQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TestQuery, TestQueryVariables>> = {}) {
            return VueApolloComposable.useQuery<TestQuery, undefined>(TestDocument, undefined, options);
          }
export type TestQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TestQuery, TestQueryVariables>;