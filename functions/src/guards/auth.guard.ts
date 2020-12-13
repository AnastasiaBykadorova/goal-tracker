import * as admin from 'firebase-admin';
import { MiddlewareInterface, NextFn, ResolverData } from 'type-graphql';
import { AuthenticationError } from 'apollo-server-express';
import { IGQLContext } from '@/interfaces/gql-context.interface';

export class AuthGuard implements MiddlewareInterface<IGQLContext> {
  private async decodeToken(authHeader: string): Promise<admin.auth.DecodedIdToken> {
    const [bearerTag, token] = authHeader.split(' ');

    if (bearerTag !== 'Bearer') {
      throw new AuthenticationError('Token bearer is missing');
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);

      return decodedToken;
    } catch {
      throw new AuthenticationError('Invalid token');
    }
  }

  async use({ context }: ResolverData<IGQLContext>, next: NextFn): Promise<unknown> {
    if (!context.headers?.authorization) {
      throw new AuthenticationError('Authorization header is missing');
    }

    const decodedToken = await this.decodeToken(context.headers?.authorization);

    context.user = await admin.auth().getUser(decodedToken.uid);

    return next();
  }
}
