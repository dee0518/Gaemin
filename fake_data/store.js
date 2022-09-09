const store = [
  {
    id: 1,
    title: '돈까스&centerdot;회&centerdot;일식',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '미소야',
        thumbnail: '/assets/images/data_store/pork1.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 15000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 8000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원 할인 받기' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '로스까츠',
                content: '맛있는 등심으로 튀긴 돈가츠',
                img: '',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '소스 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 소스 추가', price: 0 },
                      { id: 2, name: '케찹 추가', price: 0 },
                      { id: 3, name: '머스타드 추가', price: 500 },
                      { id: 4, name: '와사비 추가', price: 500 },
                      { id: 5, name: '핑크솔트 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '히레까츠',
                img: '',
                content: '맛있는 안심으로 튀긴 돈가츠',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '소스 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 소스 추가', price: 0 },
                      { id: 2, name: '케찹 추가', price: 0 },
                      { id: 3, name: '머스타드 추가', price: 500 },
                      { id: 4, name: '와사비 추가', price: 500 },
                      { id: 5, name: '핑크솔트 추가', price: 500 },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            category: 'normal',
            title: '사이드 메뉴',
            list: [
              {
                id: 1,
                title: '로스까츠',
                content: '맛있는 등심으로 튀긴 돈가츠',
                img: '/assets/images/data_store/donut1.png',
                price: 10000,
                outOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '소스 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 소스 추가', price: 0 },
                      { id: 2, name: '케찹 추가', price: 0 },
                      { id: 3, name: '머스타드 추가', price: 500 },
                      { id: 4, name: '와사비 추가', price: 500 },
                      { id: 5, name: '핑크솔트 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '히레까츠',
                content: '맛있는 안심으로 튀긴 돈가츠',
                img: '',
                price: 13000,
                outOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '소스 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 소스 추가', price: 0 },
                      { id: 2, name: '케찹 추가', price: 0 },
                      { id: 3, name: '머스타드 추가', price: 500 },
                      { id: 4, name: '와사비 추가', price: 500 },
                      { id: 5, name: '핑크솔트 추가', price: 500 },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: '중식',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '홍콩 반점',
        thumbnail: '/assets/images/data_store/china1.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        type: 'normal',
        name: '별빛 반점',
        thumbnail: '/assets/images/data_store/china2.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        type: 'normal',
        name: '불도장',
        thumbnail: '/assets/images/data_store/china3.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        type: 'normal',
        name: '내가 최고다',
        thumbnail: '/assets/images/data_store/china5.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        type: 'normal',
        name: '헤~ 반점',
        thumbnail: '/assets/images/data_store/china4.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: '치킨',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '네네치킨',
        thumbnail: '/assets/images/data_store/chicken1.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        type: 'normal',
        name: '굽네 치킨',
        thumbnail: '/assets/images/data_store/chicken2.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        type: 'normal',
        name: '푸라닭',
        thumbnail: '/assets/images/data_store/chicken3.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: '백반&centerdot;죽&centerdot;국수',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '국수나무',
        thumbnail: '/assets/images/data_store/noodles1.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        type: 'no1',
        name: '굽네 국수',
        thumbnail: '/assets/images/data_store/noodles2.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        type: 'normal',
        name: '본 국수',
        thumbnail: '/assets/images/data_store/noodles3.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: '카페&centerdot;디저트',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '던킨 강남역사2호점',
        thumbnail: '/assets/images/data_store/dunkinMain.png',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        type: 'no1',
        name: '에또끌레르',
        thumbnail: '/assets/images/data_store/desert1.bmp',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 4000],
          distance: 0.3,
          limit: 20000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        type: 'normal',
        name: '브리오슈 도레',
        thumbnail: '/assets/images/data_store/desert2.bmp',
        info: {
          rating: 4.9,
          deliveryTips: [1000, 2000],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        type: 'normal',
        name: '케르반 베이커리',
        thumbnail: '/assets/images/data_store/turkish.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        type: 'no1',
        name: '스트릿츄러스',
        thumbnail: '/assets/images/data_store/churos.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 4000],
          distance: 0.3,
          limit: 20000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        type: 'normal',
        name: '당고집',
        thumbnail: '/assets/images/data_store/dango.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [1000, 2000],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        type: 'normal',
        name: '스투룹와플&amp;커피',
        thumbnail: '/assets/images/data_store/waffle.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 8,
        type: 'no1',
        name: 'Scone.zip',
        thumbnail: '/assets/images/data_store/scorn.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 4000],
          distance: 0.3,
          limit: 20000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 9,
        type: 'normal',
        name: '패스트리부티크',
        thumbnail: '/assets/images/data_store/Mille-feuille.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [1000, 2000],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: '분식',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '미소야',
        thumbnail: '/assets/images/data_store/tteokbokki1.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '히레까츠',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '돈까스 소스',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '머스타드 소스',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: '짬&centerdot;탕&centerdot;찌개',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '홍콩 반점',
        thumbnail: '/assets/images/data_store/jjimdak1.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        type: 'normal',
        name: '별빛 반점',
        thumbnail: '/assets/images/data_store/jjimdak2.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        type: 'normal',
        name: '불도장',
        thumbnail: '/assets/images/data_store/jjimdak3.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        type: 'normal',
        name: '내가 최고다',
        thumbnail: '/assets/images/data_store/jjimdak4.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        type: 'normal',
        name: '헤~ 반점',
        thumbnail: '/assets/images/data_store/jjimdak5.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: '피자',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '네네치킨',
        thumbnail: '/assets/images/data_store/pizza1.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        type: 'normal',
        name: '굽네 치킨',
        thumbnail: '/assets/images/data_store/pizza2.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        type: 'normal',
        name: '푸라닭',
        thumbnail: '/assets/images/data_store/pizza3.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: '양식',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '국수나무',
        thumbnail: '/assets/images/data_store/pasta1.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        type: 'no1',
        name: '굽네 국수',
        thumbnail: '/assets/images/data_store/pasta2.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        type: 'normal',
        name: '본 국수',
        thumbnail: '/assets/images/data_store/pasta3.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: '고기&centerdot;구이',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '던킨 강남역사2호점',
        thumbnail: '/assets/images/data_store/meat1.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        type: 'no1',
        name: '에또끌레르',
        thumbnail: '/assets/images/data_store/desert1.bmp',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 4000],
          distance: 0.3,
          limit: 20000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        type: 'normal',
        name: '브리오슈 도레',
        thumbnail: '/assets/images/data_store/desert2.bmp',
        info: {
          rating: 4.9,
          deliveryTips: [1000, 2000],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        type: 'normal',
        name: '케르반 베이커리',
        thumbnail: '/assets/images/data_store/turkish.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        type: 'no1',
        name: '스트릿츄러스',
        thumbnail: '/assets/images/data_store/churos.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 4000],
          distance: 0.3,
          limit: 20000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        type: 'normal',
        name: '당고집',
        thumbnail: '/assets/images/data_store/dango.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [1000, 2000],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        type: 'normal',
        name: '스투룹와플&amp;커피',
        thumbnail: '/assets/images/data_store/waffle.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 8,
        type: 'no1',
        name: 'Scone.zip',
        thumbnail: '/assets/images/data_store/scorn.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 4000],
          distance: 0.3,
          limit: 20000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 9,
        type: 'normal',
        name: '패스트리부티크',
        thumbnail: '/assets/images/data_store/Mille-feuille.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [1000, 2000],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: '족발&centerdot;보쌈',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '미소야',
        thumbnail: '/assets/images/data_store/jokbal1.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '히레까츠',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '돈까스 소스',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '머스타드 소스',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 12,
    title: '아시안',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '홍콩 반점',
        thumbnail: '/assets/images/data_store/asian1.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        type: 'normal',
        name: '별빛 반점',
        thumbnail: '/assets/images/data_store/asian2.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        type: 'normal',
        name: '불도장',
        thumbnail: '/assets/images/data_store/asian3.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 13,
    title: '패스트푸드',
    store: [],
  },
  {
    id: 14,
    title: '도시락',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '국수나무',
        thumbnail: '/assets/images/data_store/lunch1.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        type: 'no1',
        name: '굽네 국수',
        thumbnail: '/assets/images/data_store/lunch2.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        type: 'normal',
        name: '본 국수',
        thumbnail: '/assets/images/data_store/lunch3.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    title: '채식',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '던킨 강남역사2호점',
        thumbnail: '/assets/images/data_store/dunkinMain.png',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 8000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        type: 'no1',
        name: '에또끌레르',
        thumbnail: '/assets/images/data_store/desert1.bmp',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 4000],
          distance: 0.3,
          limit: 20000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        type: 'normal',
        name: '브리오슈 도레',
        thumbnail: '/assets/images/data_store/desert2.bmp',
        info: {
          rating: 4.9,
          deliveryTips: [1000, 2000],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        type: 'normal',
        name: '케르반 베이커리',
        thumbnail: '/assets/images/data_store/turkish.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        type: 'no1',
        name: '스트릿츄러스',
        thumbnail: '/assets/images/data_store/churos.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 4000],
          distance: 0.3,
          limit: 20000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        type: 'normal',
        name: '당고집',
        thumbnail: '/assets/images/data_store/dango.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [1000, 2000],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        type: 'normal',
        name: '스투룹와플&amp;커피',
        thumbnail: '/assets/images/data_store/waffle.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 2500],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 8,
        type: 'no1',
        name: 'Scone.zip',
        thumbnail: '/assets/images/data_store/scorn.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [2000, 4000],
          distance: 0.3,
          limit: 20000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 9,
        type: 'normal',
        name: '패스트리부티크',
        thumbnail: '/assets/images/data_store/Mille-feuille.jpg',
        info: {
          rating: 4.9,
          deliveryTips: [1000, 2000],
          distance: 0.3,
          limit: 10000,
          deliveryTime: [40, 50],
          address: '서울시 강남구',
        },
        review: 83,
        comment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            name: '짜장면',
            content: '맛있게 냠냠',
            extra: [
              {
                id: 1,
                title: '추가선택',
                max: 5,
                items: [
                  {
                    id: 1,
                    name: '면 추가',
                    price: 0,
                  },
                  {
                    id: 2,
                    name: '소스 추가',
                    price: 500,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const getOneStore = id => store.find(store => store.id === +id);
const getStoreDetail = (storeId, detailId) =>
  store.find(store => store.id === +storeId).store.find(detail => detail.id === +detailId);
const getMenu = (storeId, detailId, categoryId, itemId) =>
  getStoreDetail(storeId, detailId)
    .menu.find(category => category.id === +categoryId)
    .list.find(item => item.id === +itemId);

module.exports = { getOneStore, getStoreDetail, getMenu };
