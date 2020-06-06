import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'Felix de Pablo',
        password: 'felix',
      },
      {
        userId: 2,
        username: 'Profesor 2',
        password: 'profe2',
      },
      {
        userId: 3,
        username: 'Profesor 3',
        password: 'profe3',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}