import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import themeReducer from './slices/themeSlice';
import tokenReducer from './slices/tokenSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    tokenManagement: tokenReducer,
  },
});
