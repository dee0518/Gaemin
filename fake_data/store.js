const store = [];

const getStore = () => store;
const getOneStore = (id) => store.find((store) => store.id === id);
