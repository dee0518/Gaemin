let order = [
  {
    id: 1,
    user: {
      id: 1,
      email: "abc@email.com",
      password: "123",
      name: "테스터",
    },
    store: "던킨",
    address: "서울 강남구",
    orders: [
      {
        id: 1,
        title: "올스타 도넛세트",
        extra: [
          {
            menu: "페이머스 글레이즈드, 올리브 츄이스티, 허니후리터, 카푸치노츄이스티, 스트로베리필드, 바바리안필드",
            price: 15000,
          },
        ],
      },
    ],
  },
];

// 전역 상태로 관리될 것. 아님 서버에 임시 저장.
