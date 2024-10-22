import { IncomingMessage, ServerResponse } from 'http';

import { isMatchingMethod } from '../utils/isMatchingMethod';

export const usersRoutes = (req: IncomingMessage, res: ServerResponse) => {
    const hasMatched =
        isMatchingMethod('POST', req.method) &&
        isMatchingMethod('/users', req.url);

    if (hasMatched) {
    }
};
