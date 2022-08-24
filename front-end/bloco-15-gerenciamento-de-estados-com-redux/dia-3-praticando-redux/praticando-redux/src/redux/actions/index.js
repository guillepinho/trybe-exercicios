export const LOGGED = 'LOGGED';
export const CLIENT_ADD = 'CLIENT_ADD';
export const CLIENT_REMOVE = 'CLIENT_REMOVE';

export const loggedAction = (value) => ({ type: LOGGED, value });

export const addClientAction = (value) => ({ type: CLIENT_ADD, value });

export const removeClientAction = (value) => ({ type: CLIENT_REMOVE, value });
