const order = 
  {
    id: 1,
    userId: 1,
    categoryId: 1,
    storeId: 1,
    storeName: '미소야',
    limitPrice: 8000,
    orders: [
      {
        id: 1,
        listId: 1,
        itemId: 1,
        title: '로스까츠',
        price: 10000,
        extra: [{ id: 1, name: '돈까스 추가', price: 4000 }],
      },
    ],
  },


// 전역 상태로 관리될 것. 아님 서버에 임시 저장.
