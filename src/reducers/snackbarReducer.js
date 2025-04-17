export function snackbarReducer(state, action) {
    switch (action.type) {
      case 'SHOW_SNACKBAR':
        return {
          ...state,
          open: true,
          message: action.payload.message,
          severity: action.payload.severity || 'info',
        };
      case 'HIDE_SNACKBAR':
        return { ...state, open: false };
      default:
        return state;
    }
  }