import * as Create from './Create';
import * as DeleteById from './DeteleById';
import * as GetById from './GetById';
import * as GetAll from './GetAll';
import * as UpdateById from './UpdateById';


export const produtosControllers = {
    ...Create,
    ...DeleteById,
    ...GetAll,
    ...GetById,
    ...UpdateById
}