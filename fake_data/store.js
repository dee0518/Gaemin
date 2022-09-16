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
                img: '/assets/images/data_store/pork2.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
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
                img: '/assets/images/data_store/pork3.jpg',
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
              {
                id: 3,
                title: '모밀 + 돈가츠 세트',
                img: '/assets/images/data_store/pork4.jpg',
                content: '맛있는 모밀과 안심으로 만든 돈가츠 세트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '면 추가', price: 1000 },
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
                img: '/assets/images/data_store/pork1.jpg',
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
                    id: 2,
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
                img: '/assets/images/data_store/pork3.jpg',
                price: 13000,
                outOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
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
      {
        id: 2,
        type: 'normal',
        name: '회전 초밥',
        thumbnail: '/assets/images/data_store/sushi1.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 20000,
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
                img: '/assets/images/data_store/pork2.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
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
                img: '/assets/images/data_store/pork3.jpg',
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
              {
                id: 3,
                title: '모밀 + 돈가츠 세트',
                img: '/assets/images/data_store/pork4.jpg',
                content: '맛있는 모밀과 안심으로 만든 돈가츠 세트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '면 추가', price: 1000 },
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
                img: '/assets/images/data_store/pork1.jpg',
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
                    id: 2,
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
                img: '/assets/images/data_store/pork3.jpg',
                price: 13000,
                outOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
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
      {
        id: 3,
        type: 'normal',
        name: '갓덴스시',
        thumbnail: '/assets/images/data_store/sushi2.jpg',
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
                img: '/assets/images/data_store/pork2.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
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
                img: '/assets/images/data_store/pork3.jpg',
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
              {
                id: 3,
                title: '모밀 + 돈가츠 세트',
                img: '/assets/images/data_store/pork4.jpg',
                content: '맛있는 모밀과 안심으로 만든 돈가츠 세트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '면 추가', price: 1000 },
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
                img: '/assets/images/data_store/pork1.jpg',
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
                    id: 2,
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
                img: '/assets/images/data_store/pork3.jpg',
                price: 13000,
                outOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
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
      {
        id: 4,
        type: 'normal',
        name: '하루',
        thumbnail: '/assets/images/data_store/sushi3.jpg',
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
                img: '/assets/images/data_store/pork2.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
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
                img: '/assets/images/data_store/pork3.jpg',
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
              {
                id: 3,
                title: '모밀 + 돈가츠 세트',
                img: '/assets/images/data_store/pork4.jpg',
                content: '맛있는 모밀과 안심으로 만든 돈가츠 세트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '면 추가', price: 1000 },
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
                img: '/assets/images/data_store/pork1.jpg',
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
                    id: 2,
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
                img: '/assets/images/data_store/pork3.jpg',
                price: 13000,
                outOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
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
      {
        id: 5,
        type: 'normal',
        name: '미하루',
        thumbnail: '/assets/images/data_store/sushi4.jpg',
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
                img: '/assets/images/data_store/pork2.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
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
                img: '/assets/images/data_store/pork3.jpg',
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
              {
                id: 3,
                title: '모밀 + 돈가츠 세트',
                img: '/assets/images/data_store/pork4.jpg',
                content: '맛있는 모밀과 안심으로 만든 돈가츠 세트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '면 추가', price: 1000 },
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
                img: '/assets/images/data_store/pork1.jpg',
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
                    id: 2,
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
                img: '/assets/images/data_store/pork3.jpg',
                price: 13000,
                outOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '고로케 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
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
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 710,
        ownerComment: 54,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '짜장면',
                content: '맛있게 냠냠',
                img: '/assets/images/data_store/china1.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
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
              {
                id: 2,
                title: '짬뽕',
                content: '매운 국물이 일품',
                img: '/assets/images/data_store/china3.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
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
        id: 2,
        type: 'normal',
        name: '별빛 반점',
        thumbnail: '/assets/images/data_store/china2.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 710,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '짜장면',
                content: '맛있게 냠냠',
                img: '/assets/images/data_store/china1.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
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
              {
                id: 2,
                title: '짬뽕',
                content: '매운 국물이 일품',
                img: '/assets/images/data_store/china3.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
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
        type: 'normal',
        name: '불도장',
        thumbnail: '/assets/images/data_store/china3.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '짜장면',
                content: '맛있게 냠냠',
                img: '/assets/images/data_store/china1.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
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
              {
                id: 2,
                title: '짬뽕',
                content: '매운 국물이 일품',
                img: '/assets/images/data_store/china3.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
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
        type: 'normal',
        name: '내가 최고다',
        thumbnail: '/assets/images/data_store/china5.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '짜장면',
                content: '맛있게 냠냠',
                img: '/assets/images/data_store/china1.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
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
              {
                id: 2,
                title: '짬뽕',
                content: '매운 국물이 일품',
                img: '/assets/images/data_store/china3.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
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
              {
                id: 3,
                title: '탕수육',
                content: '돼지고기 맛있게 튀겼습니다',
                img: '/assets/images/data_store/china3.jpg',
                price: 14000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '소',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '중',
                        price: 5000,
                      },
                      {
                        id: 3,
                        name: '대',
                        price: 8000,
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
        type: 'normal',
        name: '헤~ 반점',
        thumbnail: '/assets/images/data_store/china4.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '짜장면',
                content: '맛있게 냠냠',
                img: '/assets/images/data_store/china1.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
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
              {
                id: 2,
                title: '짬뽕',
                content: '매운 국물이 일품',
                img: '/assets/images/data_store/china3.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
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
              {
                id: 3,
                title: '탕수육',
                content: '돼지고기 맛있게 튀겼습니다',
                img: '/assets/images/data_store/china3.jpg',
                price: 14000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '소',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '중',
                        price: 5000,
                      },
                      {
                        id: 3,
                        name: '대',
                        price: 8000,
                      },
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
    id: 3,
    title: '치킨',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '네네치킨',
        thumbnail: '/assets/images/data_store/chicken1.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '오리지널',
                content: '갓 튀긴 맛있는 치킨',
                img: '/assets/images/data_store/chicken2.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '갈릭 소스 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '케찹 소스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '양념 치킨',
                content: '달콤한 양념 소스를 버무린 치킨',
                img: '/assets/images/data_store/chicken1.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '마늘 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '땅콩 추가',
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
        id: 2,
        type: 'normal',
        name: '굽네 치킨',
        thumbnail: '/assets/images/data_store/chicken2.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '오리지널',
                content: '갓 튀긴 맛있는 치킨',
                img: '/assets/images/data_store/chicken2.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '갈릭 소스 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '케찹 소스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '양념 치킨',
                content: '달콤한 양념 소스를 버무린 치킨',
                img: '/assets/images/data_store/chicken1.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '마늘 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '땅콩 추가',
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
        type: 'normal',
        name: '푸라닭',
        thumbnail: '/assets/images/data_store/chicken3.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 103,
        ownerComment: 2184,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '오리지널',
                content: '갓 튀긴 맛있는 치킨',
                img: '/assets/images/data_store/chicken2.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '갈릭 소스 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '케찹 소스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '양념 치킨',
                content: '달콤한 양념 소스를 버무린 치킨',
                img: '/assets/images/data_store/chicken1.jpg',
                price: 7000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '마늘 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '땅콩 추가',
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
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 33,
        ownerComment: 433,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '잔치 국수',
                content: '오색 고명이 올라간 잔치국수',
                img: '/assets/images/data_store/noodles1.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '면 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '고명 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '제육덮밥',
                content: '매콤한 양념소스가 들어간 덮밥',
                img: '/assets/images/data_store/noodles1.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '고기 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '밥 추가',
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
        id: 2,
        type: 'no1',
        name: '굽네 국수',
        thumbnail: '/assets/images/data_store/noodles2.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '잔치 국수',
                content: '오색 고명이 올라간 잔치국수',
                img: '/assets/images/data_store/noodles1.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '면 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '고명 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '제육덮밥',
                content: '매콤한 양념소스가 들어간 덮밥',
                img: '/assets/images/data_store/noodles1.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '고기 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '밥 추가',
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
        type: 'normal',
        name: '본 국수',
        thumbnail: '/assets/images/data_store/noodles3.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 12,
        ownerComment: 824,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '잔치 국수',
                content: '오색 고명이 올라간 잔치국수',
                img: '/assets/images/data_store/noodles1.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '면 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '고명 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '제육덮밥',
                content: '매콤한 양념소스가 들어간 덮밥',
                img: '/assets/images/data_store/noodles1.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '고기 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '밥 추가',
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
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '도넛',
                content: '달달한 오색 도넛',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '아메리카노 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '머핀',
                content: '달콤한 컵케이크',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '초콜릿 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
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
        id: 2,
        type: 'no1',
        name: '에또끌레르',
        thumbnail: '/assets/images/data_store/desert1.bmp',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '도넛',
                content: '달달한 오색 도넛',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '아메리카노 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '머핀',
                content: '달콤한 컵케이크',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '초콜릿 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
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
        type: 'normal',
        name: '브리오슈 도레',
        thumbnail: '/assets/images/data_store/desert2.bmp',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '도넛',
                content: '달달한 오색 도넛',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '아메리카노 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '머핀',
                content: '달콤한 컵케이크',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '초콜릿 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
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
        type: 'normal',
        name: '케르반 베이커리',
        thumbnail: '/assets/images/data_store/turkish.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '도넛',
                content: '달달한 오색 도넛',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '아메리카노 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '머핀',
                content: '달콤한 컵케이크',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '초콜릿 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
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
        type: 'no1',
        name: '스트릿츄러스',
        thumbnail: '/assets/images/data_store/churos.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '도넛',
                content: '달달한 오색 도넛',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '아메리카노 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '머핀',
                content: '달콤한 컵케이크',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '초콜릿 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
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
        type: 'normal',
        name: '당고집',
        thumbnail: '/assets/images/data_store/dango.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '도넛',
                content: '달달한 오색 도넛',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '아메리카노 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '머핀',
                content: '달콤한 컵케이크',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '초콜릿 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
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
        type: 'normal',
        name: '스투룹와플&amp;커피',
        thumbnail: '/assets/images/data_store/waffle.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '도넛',
                content: '달달한 오색 도넛',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '아메리카노 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '머핀',
                content: '달콤한 컵케이크',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '초콜릿 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
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
        type: 'no1',
        name: 'Scone.zip',
        thumbnail: '/assets/images/data_store/scorn.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '도넛',
                content: '달달한 오색 도넛',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '아메리카노 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '머핀',
                content: '달콤한 컵케이크',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '초콜릿 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
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
        type: 'normal',
        name: '패스트리부티크',
        thumbnail: '/assets/images/data_store/Mille-feuille.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '도넛',
                content: '달달한 오색 도넛',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '아메리카노 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '머핀',
                content: '달콤한 컵케이크',
                img: '/assets/images/data_store/dunkinMain.jpg',
                price: 10000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '초콜릿 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '주스 추가',
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
    ],
  },
  {
    id: 6,
    title: '분식',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '응급실 떡볶이',
        thumbnail: '/assets/images/data_store/tteokbokki1.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '밀떡볶이',
                content: '매콤하고 쫀득한 밀떡볶이',
                img: '/assets/images/data_store/tteokbokki1.jpg',
                price: 4500,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '떡 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '계란 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '순대',
                content: '꽉찬 순대',
                img: '/assets/images/data_store/tteokbokki1.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '순대 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '내장 추가',
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
        id: 2,
        type: 'normal',
        name: '신전 떡볶이',
        thumbnail: '/assets/images/data_store/tteokbokki2.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '밀떡볶이',
                content: '매콤하고 쫀득한 밀떡볶이',
                img: '/assets/images/data_store/tteokbokki1.jpg',
                price: 4500,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '떡 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '계란 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '순대',
                content: '꽉찬 순대',
                img: '/assets/images/data_store/tteokbokki1.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '순대 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '내장 추가',
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
        type: 'normal',
        name: '엽기 떡볶이',
        thumbnail: '/assets/images/data_store/tteokbokki2.jpg',
        info: {
          address: '서울특별시 마포구 백범로31길 7 1동 113호',
          rating: 4.9,
          likeNum: 50,
          distance: 0.3,
          delivery: {
            tips: [2000, 2500],
            memo: '',
            limit: 11000,
            time: [40, 50],
            payment: ['바로 결제', '만나서 결제'],
          },
          pickup: {
            howToUse: ['포장'],
            limit: 10000,
            memo: '12,000원 이상 포장 시 할인됩니다.',
            time: [20, 32],
            payment: ['바로 결제'],
          },
        },
        review: 83,
        ownerComment: 84,
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '밀떡볶이',
                content: '매콤하고 쫀득한 밀떡볶이',
                img: '/assets/images/data_store/tteokbokki1.jpg',
                price: 4500,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 1,
                    items: [
                      {
                        id: 1,
                        name: '떡 추가',
                        price: 0,
                      },
                      {
                        id: 2,
                        name: '계란 추가',
                        price: 500,
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '순대',
                content: '꽉찬 순대',
                img: '/assets/images/data_store/tteokbokki1.jpg',
                price: 5000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가선택',
                    max: 2,
                    items: [
                      {
                        id: 1,
                        name: '순대 추가',
                        price: 2000,
                      },
                      {
                        id: 2,
                        name: '내장 추가',
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
    ],
  },
  {
    id: 7,
    title: '짬&centerdot;탕&centerdot;찌개',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '봉추 찜닭',
        thumbnail: '/assets/images/data_store/jjimdak1.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '순살 간장 찜닭',
                content: '맛있는 찜닭',
                img: '/assets/images/data_store/jjimdak1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '당면 추가', price: 4000 },
                      { id: 2, name: '고기 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
                    title: '소스 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '면 추가', price: 0 },
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
                title: '닭갈비',
                img: '/assets/images/data_store/jjimdak1.jpg',
                content: '맛있는  닭갈비',
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
              {
                id: 3,
                title: '고추장 찜닭 세트',
                img: '/assets/images/data_store/jjimdak1.jpg',
                content: '맛있는 모밀과 안심으로 만든 돈가츠 세트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '면 추가', price: 1000 },
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
      {
        id: 2,
        type: 'normal',
        name: '안동 찜닭',
        thumbnail: '/assets/images/data_store/jjimdak2.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '순살 간장 찜닭',
                content: '맛있는 찜닭',
                img: '/assets/images/data_store/jjimdak1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '당면 추가', price: 4000 },
                      { id: 2, name: '고기 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
                    title: '소스 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '면 추가', price: 0 },
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
                title: '닭갈비',
                img: '/assets/images/data_store/jjimdak1.jpg',
                content: '맛있는  닭갈비',
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
              {
                id: 3,
                title: '고추장 찜닭 세트',
                img: '/assets/images/data_store/jjimdak1.jpg',
                content: '맛있는 모밀과 안심으로 만든 돈가츠 세트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '면 추가', price: 1000 },
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
      {
        id: 3,
        type: 'normal',
        name: '달걀 찜닭',
        thumbnail: '/assets/images/data_store/jjimdak3.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '순살 간장 찜닭',
                content: '맛있는 찜닭',
                img: '/assets/images/data_store/jjimdak1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '당면 추가', price: 4000 },
                      { id: 2, name: '고기 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
                    title: '소스 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '면 추가', price: 0 },
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
                title: '닭갈비',
                img: '/assets/images/data_store/jjimdak1.jpg',
                content: '맛있는  닭갈비',
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
              {
                id: 3,
                title: '고추장 찜닭 세트',
                img: '/assets/images/data_store/jjimdak1.jpg',
                content: '맛있는 모밀과 안심으로 만든 돈가츠 세트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '면 추가', price: 1000 },
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
      {
        id: 4,
        type: 'normal',
        name: '내가 최고다',
        thumbnail: '/assets/images/data_store/jjimdak4.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '순살 간장 찜닭',
                content: '맛있는 찜닭',
                img: '/assets/images/data_store/jjimdak1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '당면 추가', price: 4000 },
                      { id: 2, name: '고기 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
                    title: '소스 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '면 추가', price: 0 },
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
                title: '닭갈비',
                img: '/assets/images/data_store/jjimdak1.jpg',
                content: '맛있는  닭갈비',
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
              {
                id: 3,
                title: '고추장 찜닭 세트',
                img: '/assets/images/data_store/jjimdak1.jpg',
                content: '맛있는 모밀과 안심으로 만든 돈가츠 세트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '면 추가', price: 1000 },
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
      {
        id: 5,
        type: 'normal',
        name: '헤~ 반점',
        thumbnail: '/assets/images/data_store/jjimdak5.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '순살 간장 찜닭',
                content: '맛있는 찜닭',
                img: '/assets/images/data_store/jjimdak1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '당면 추가', price: 4000 },
                      { id: 2, name: '고기 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 2,
                    title: '소스 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '면 추가', price: 0 },
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
                title: '닭갈비',
                img: '/assets/images/data_store/jjimdak1.jpg',
                content: '맛있는  닭갈비',
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
              {
                id: 3,
                title: '고추장 찜닭 세트',
                img: '/assets/images/data_store/jjimdak1.jpg',
                content: '맛있는 모밀과 안심으로 만든 돈가츠 세트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '돈까스 추가', price: 4000 },
                      { id: 2, name: '면 추가', price: 1000 },
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
    id: 8,
    title: '피자',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '도미노 피자',
        thumbnail: '/assets/images/data_store/pizza1.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '포테이토 피자',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/pizza1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '고구마 피자',
                img: '/assets/images/data_store/pizza1.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '오리지널 바이트',
                img: '/assets/images/data_store/pizza1.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '미스터 피자',
        thumbnail: '/assets/images/data_store/pizza2.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '포테이토 피자',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/pizza1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '고구마 피자',
                img: '/assets/images/data_store/pizza1.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '오리지널 바이트',
                img: '/assets/images/data_store/pizza1.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '반올림 피자',
        thumbnail: '/assets/images/data_store/pizza3.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '포테이토 피자',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/pizza1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '고구마 피자',
                img: '/assets/images/data_store/pizza1.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '오리지널 바이트',
                img: '/assets/images/data_store/pizza1.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
    id: 9,
    title: '양식',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '메드포갈릭',
        thumbnail: '/assets/images/data_store/pasta1.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '알리오 올리오',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/pasta1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '빠에야',
                img: '/assets/images/data_store/pasta1.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '부채살 스테이크',
                img: '/assets/images/data_store/pasta1.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'no1',
        name: '이탈리아 레스토랑',
        thumbnail: '/assets/images/data_store/pasta2.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '알리오 올리오',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/pasta1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '빠에야',
                img: '/assets/images/data_store/pasta1.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '부채살 스테이크',
                img: '/assets/images/data_store/pasta1.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '빕스',
        thumbnail: '/assets/images/data_store/pasta3.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '알리오 올리오',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/pasta1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '빠에야',
                img: '/assets/images/data_store/pasta1.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '부채살 스테이크',
                img: '/assets/images/data_store/pasta1.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
    id: 10,
    title: '고기&centerdot;구이',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '소삼겹살',
        thumbnail: '/assets/images/data_store/meat1.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '삼겹살',
                content: '고기 듬뿍',
                img: '/assets/images/data_store/meat1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '버섯 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '목살',
                img: '/assets/images/data_store/meat1.jpg',
                content: '맛있는 목살',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '사이드 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '깻잎 추가', price: 500 },
                      { id: 4, name: '버섯 추가', price: 500 },
                      { id: 5, name: '양파 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '등심',
                img: '/assets/images/data_store/meat1.jpg',
                content: '치즈 등심',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'no1',
        name: '에또끌레르',
        thumbnail: '/assets/images/data_store/meat2.jpg',
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
        coupon: [],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '삼겹살',
                content: '고기 듬뿍',
                img: '/assets/images/data_store/meat1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '버섯 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '목살',
                img: '/assets/images/data_store/meat1.jpg',
                content: '맛있는 목살',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '사이드 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '깻잎 추가', price: 500 },
                      { id: 4, name: '버섯 추가', price: 500 },
                      { id: 5, name: '양파 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '등심',
                img: '/assets/images/data_store/meat1.jpg',
                content: '치즈 등심',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '양곱창',
        thumbnail: '/assets/images/data_store/meat3.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '삼겹살',
                content: '고기 듬뿍',
                img: '/assets/images/data_store/meat1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '버섯 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '목살',
                img: '/assets/images/data_store/meat1.jpg',
                content: '맛있는 목살',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '사이드 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '깻잎 추가', price: 500 },
                      { id: 4, name: '버섯 추가', price: 500 },
                      { id: 5, name: '양파 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '등심',
                img: '/assets/images/data_store/meat1.jpg',
                content: '치즈 등심',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '케르반 고기',
        thumbnail: '/assets/images/data_store/meat4.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '삼겹살',
                content: '고기 듬뿍',
                img: '/assets/images/data_store/meat1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '버섯 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '목살',
                img: '/assets/images/data_store/meat1.jpg',
                content: '맛있는 목살',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '사이드 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '깻잎 추가', price: 500 },
                      { id: 4, name: '버섯 추가', price: 500 },
                      { id: 5, name: '양파 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '등심',
                img: '/assets/images/data_store/meat1.jpg',
                content: '치즈 등심',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'no1',
        name: '스트릿 미트볼',
        thumbnail: '/assets/images/data_store/meat5.jpg',
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
        coupon: [],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '삼겹살',
                content: '고기 듬뿍',
                img: '/assets/images/data_store/meat1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '버섯 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '목살',
                img: '/assets/images/data_store/meat1.jpg',
                content: '맛있는 목살',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '사이드 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '깻잎 추가', price: 500 },
                      { id: 4, name: '버섯 추가', price: 500 },
                      { id: 5, name: '양파 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '등심',
                img: '/assets/images/data_store/meat1.jpg',
                content: '치즈 등심',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '당고집',
        thumbnail: '/assets/images/data_store/meat1.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '삼겹살',
                content: '고기 듬뿍',
                img: '/assets/images/data_store/meat1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '버섯 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '목살',
                img: '/assets/images/data_store/meat1.jpg',
                content: '맛있는 목살',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '사이드 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '깻잎 추가', price: 500 },
                      { id: 4, name: '버섯 추가', price: 500 },
                      { id: 5, name: '양파 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '등심',
                img: '/assets/images/data_store/meat1.jpg',
                content: '치즈 등심',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '스투',
        thumbnail: '/assets/images/data_store/meat3.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '삼겹살',
                content: '고기 듬뿍',
                img: '/assets/images/data_store/meat1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '버섯 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '목살',
                img: '/assets/images/data_store/meat1.jpg',
                content: '맛있는 목살',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '사이드 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '깻잎 추가', price: 500 },
                      { id: 4, name: '버섯 추가', price: 500 },
                      { id: 5, name: '양파 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '등심',
                img: '/assets/images/data_store/meat1.jpg',
                content: '치즈 등심',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
    id: 11,
    title: '족발&centerdot;보쌈',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '가장 맛있는 족발',
        thumbnail: '/assets/images/data_store/jokbal1.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '족발',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/jokbal1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '보쌈',
                img: '/assets/images/data_store/jokbal1.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '냉채 족발',
                img: '/assets/images/data_store/jokbal1.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '원할머니 보쌈',
        thumbnail: '/assets/images/data_store/jokbal2.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '족발',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/jokbal1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '보쌈',
                img: '/assets/images/data_store/jokbal1.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '냉채 족발',
                img: '/assets/images/data_store/jokbal1.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '보보보쌈',
        thumbnail: '/assets/images/data_store/jokbal3.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '족발',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/jokbal1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '보쌈',
                img: '/assets/images/data_store/jokbal1.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '냉채 족발',
                img: '/assets/images/data_store/jokbal1.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
    id: 12,
    title: '아시안',
    store: [
      {
        id: 1,
        type: 'normal',
        name: '에머이',
        thumbnail: '/assets/images/data_store/asian1.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '양지 쌀국수',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/asian1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '볶음밥',
                img: '/assets/images/data_store/asian1.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '나시고랭',
                img: '/assets/images/data_store/asian1.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '땀땀',
        thumbnail: '/assets/images/data_store/asian2.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '양지 쌀국수',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/asian1.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '볶음밥',
                img: '/assets/images/data_store/asian1.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '나시고랭',
                img: '/assets/images/data_store/asian1.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        name: '한솥',
        thumbnail: '/assets/images/data_store/lunch1.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '시그니처',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/lunch2.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '한솥 도시락',
                img: '/assets/images/data_store/lunch3.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '치킨 마요',
                img: '/assets/images/data_store/lunch5.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '한가득솥',
        thumbnail: '/assets/images/data_store/lunch2.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '시그니처',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/lunch2.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '한솥 도시락',
                img: '/assets/images/data_store/lunch3.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '치킨 마요',
                img: '/assets/images/data_store/lunch5.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '두가지솥',
        thumbnail: '/assets/images/data_store/lunch3.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '시그니처',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/lunch2.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '한솥 도시락',
                img: '/assets/images/data_store/lunch3.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '치킨 마요',
                img: '/assets/images/data_store/lunch5.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '밥버기',
        thumbnail: '/assets/images/data_store/lunch4.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '시그니처',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/lunch2.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '한솥 도시락',
                img: '/assets/images/data_store/lunch3.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '치킨 마요',
                img: '/assets/images/data_store/lunch5.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '벤또',
        thumbnail: '/assets/images/data_store/lunch5.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '시그니처',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/lunch2.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '한솥 도시락',
                img: '/assets/images/data_store/lunch3.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '치킨 마요',
                img: '/assets/images/data_store/lunch5.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '6가지 반찬',
        thumbnail: '/assets/images/data_store/lunch6.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '시그니처',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/lunch2.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '한솥 도시락',
                img: '/assets/images/data_store/lunch3.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '치킨 마요',
                img: '/assets/images/data_store/lunch5.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
        type: 'normal',
        name: '무지개 도시락',
        thumbnail: '/assets/images/data_store/lunch7.jpg',
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
        coupon: [{ id: 1, name: '최대 4000원' }],
        menu: [
          {
            id: 1,
            category: 'signature',
            title: '인기 메뉴',
            list: [
              {
                id: 1,
                title: '시그니처',
                content: '감자 듬뿍',
                img: '/assets/images/data_store/lunch2.jpg',
                price: 15000,
                OutOfstock: false,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 1,
                    items: [
                      { id: 1, name: '감자 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                ],
              },
              {
                id: 2,
                title: '한솥 도시락',
                img: '/assets/images/data_store/lunch3.jpg',
                content: '맛있는 고구마',
                price: 13000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '고구마 추가', price: 4000 },
                      { id: 2, name: '치즈 추가', price: 4000 },
                    ],
                  },
                  {
                    id: 1,
                    title: '음료 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '콜라 추가', price: 0 },
                      { id: 2, name: '사이다 추가', price: 0 },
                      { id: 3, name: '우유 추가', price: 500 },
                      { id: 4, name: '주스 추가', price: 500 },
                      { id: 5, name: '아메리카노 추가', price: 500 },
                    ],
                  },
                ],
              },
              {
                id: 3,
                title: '치킨 마요',
                img: '/assets/images/data_store/lunch5.jpg',
                content: '치즈 바이트',
                price: 15000,
                OutOfstock: true,
                extra: [
                  {
                    id: 1,
                    title: '추가 선택',
                    max: 3,
                    items: [
                      { id: 1, name: '치즈 추가', price: 4000 },
                      { id: 2, name: '토핑 추가', price: 1000 },
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
const getStoreDetail = (categoryId, storeId) =>
  store.find(category => category.id === +categoryId).store.find(st => st.id === +storeId);
const getMenu = (categoryId, storeId, listId, itemId) =>
  getStoreDetail(categoryId, storeId)
    .menu.find(list => list.id === +listId)
    .list.find(item => item.id === +itemId);

module.exports = { getOneStore, getStoreDetail, getMenu };
