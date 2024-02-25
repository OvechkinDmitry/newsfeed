import { actions, reducer } from './model/slice';
import { UserSchema, UserState } from './model/types';

export type { UserSchema, UserState };
export const User = { actions, reducer };
