import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'findAllUsers' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'findUserById' })
  findOneById(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.userService.findOneById(id);
  }

  @Query(() => User, { name: 'findUserByEmail' })
  findOneByEmail(@Args('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Query(() => User, { name: 'findUserByNickName' })
  findOneByNickName(@Args('nickName') nickName: string) {
    return this.userService.findOneByNickName(nickName);
  }
}
