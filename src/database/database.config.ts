import { User } from '../entities/User.entity';
import { DataSourceOptions } from 'typeorm';
// import { Post } from './entities/Post.entity';
import { User1698735766666 } from '../migrations/1698735766666-user';
import { User1698736088051 } from '../migrations/1698736088051-user';
 
export const getConfig = () => {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'todo',
    // entities: [User, Post],
    // migrations: [UserAndPost1695203237363],
    entities: [User],
    migrations: [User1698735766666,User1698736088051],
    synchronize: true,
  } as DataSourceOptions;
};