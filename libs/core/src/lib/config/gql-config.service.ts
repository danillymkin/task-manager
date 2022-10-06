import { GqlOptionsFactory } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      debug: false,
      playground: false,
      autoSchemaFile: true,
      sortSchema: true,
      subscriptions: {
        'graphql-ws': true,
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    };
  }
}
