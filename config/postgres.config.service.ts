import { TypeOrmDataSourceFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Entity } from "typeorm";

export class PostegressConfigService implements TypeOrmDataSourceFactory {
    createTypeOrmOptions() : TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'marllon',
            password: 'teste',
            database: 'collab_db',
            entities: [],
            synchronize: true
        }
    }
}