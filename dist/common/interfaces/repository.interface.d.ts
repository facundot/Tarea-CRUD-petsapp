export interface RepositoryI<E> {
    create(E: any): any;
    findAll(): E[];
    findOneById(string: any): E;
    delete(string: any): any;
}
