export const loadState = () => {
  try {
      const serializedState = localStorage.getItem("userAccessibilitySettings");
      if (serializedState === null) {
          return undefined;
      }
      return JSON.parse(serializedState);
  } catch (err) {
      return undefined;
  }
}

export const saveState = (state) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("userAccessibilitySettings", serializedState);
  } catch (err) {
      throw new Error(`errors from localstorage.js -: ${err}`)
  }
}