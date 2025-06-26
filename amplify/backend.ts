import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
export const backend = defineBackend({
  auth,
  data
});

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 * @see https://docs.amplify.aws/react/build-a-backend/define-backend
 * @see https://docs.amplify.aws/react/build-a-backend/define-data
 * @see https://docs.amplify.aws/react/build-a-backend/define-auth
 * @see https://docs.amplify.aws/react/build-a-backend/define-storage
 * @see https://docs.amplify.aws/react/build-a-backend/define-functions
 * @see https://docs.amplify.aws/react/build-a-backend/define
 */