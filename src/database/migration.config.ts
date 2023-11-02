import { DataSource } from 'typeorm';
import { getConfig } from './database.config';
 
const dataSource = new DataSource(getConfig());
dataSource.initialize();
export default dataSource;