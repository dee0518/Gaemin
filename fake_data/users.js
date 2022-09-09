let users = [
  {
    id: 1,
    email: "abc@email.com",
    password: "123",
    name: "테스터",
  },
];

// 로그인
const login = (email, password) =>
  users.find((user) => user.email === email && user.password === password);

// user id 생성
const createUserId = () => Math.max(...users.map((user) => user.id), 0) + 1;

// user 조회
const findUserById = (id) => users.find((user) => user.id === id);

// user 추가
const addUser = (newUser) => {
  const id = createUserId();
  users = [...users, { id, ...newUser }];
};

// user 수정
const updateUser = ({ id, info }) => {
  users = users.map((user) => (user.id === id ? { ...user, ...info } : user));
};

// user 삭제
const deleteUser = (id) => {
  users = users.filter((user) => user.id !== id);
};

export { login, findUserById, addUser, updateUser, deleteUser };
