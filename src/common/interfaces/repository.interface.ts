export interface RepositoryI<E> {
    create(E);
    findAll(): E[];
    findOneById(string): E;
    delete(string);
}