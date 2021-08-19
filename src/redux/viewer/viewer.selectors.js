const selectViewerStore = state => state.viewer;

export const selectActivePalette = state => selectViewerStore(state).palette;