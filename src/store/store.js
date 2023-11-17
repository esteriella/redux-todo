// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from '../todo/todoslice';

// export const store = configureStore({
//   reducer: todoReducer,
//     // ... other reducers
  
// });



import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from '../todo/todoslice';

const persistConfig = {
 key: 'root',
 storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

const store = configureStore({
 reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
