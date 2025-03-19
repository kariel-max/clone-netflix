import * as create from './create';
import * as getByEmail from './GetByEmail';

export const usuariosProvider ={
    ...getByEmail,
    ...create
}