import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore } from '../lib/redux/__tests__/store';
import { verifyMockExecution as verifyLoginMockExecution } from '../lib/decorators/__mocks__/withLogin';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

jest.mock('../lib/decorators/withLogin');

const renderApp = (
  injectedStore?: ReturnType<typeof createStore>,
  injectedHistory?: ReturnType<typeof createMemoryHistory>
) => {
  const store = injectedStore ? injectedStore : createStore();
  const history = injectedHistory ? injectedHistory : createMemoryHistory();
  render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  return { store, history };
};

test('Test rendering dashboard no parties loaded', () => {
  const history = createMemoryHistory();
  history.push('/dashboard/1');

  const { store } = renderApp(undefined, history);

  verifyLoginMockExecution(store.getState());
  expect(store.getState().appState.loading.result).toBeFalsy();
});