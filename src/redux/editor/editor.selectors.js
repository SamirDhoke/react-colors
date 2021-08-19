const selectEditor = state => state.editor;

export const selectIsModalOpen = state => selectEditor(state).isModalOpen;
export const selectActivePalette = state => selectEditor(state).palette;