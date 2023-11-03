import { createSlice } from '@reduxjs/toolkit';

const flowSlice = createSlice({
  name: 'flow',
  initialState: {
    elements: [], // initial state for flow elements
  },
  reducers: {
    setElements: (state, action) => {
      state.elements = action.payload;
    },
    updateNode: (state, action) => {
      state.elements = state.elements.map((el) =>
        el.id === action.payload.id ? { ...el, data: { label: action.payload.newLabel } } : el
      );
    },
    deleteNode: (state, action) => {
      state.elements = state.elements.filter((el) => el.id !== action.payload.id);
    },
    // Add more reducers for other actions like adding nodes, updating edges, etc.
  },
});

export const { setElements, updateNode, deleteNode } = flowSlice.actions;

export default flowSlice.reducer;
