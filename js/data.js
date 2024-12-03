const qnaList = [
    {
        q: '1. 조립하거나 기기를 만지는 것을 좋아하나요?',
        a: [
            {answer : 'a. 네', type:[0], type:[1], type:[2], type:[5], type:[6],type:[7],type:[8],type:[9],type:[10],type:[14],type:[19]},
            {answer : 'b. 아니요', type:[3],type:[4],type:[11],type:[12],type:[13],type:[15],type:[16],type:[17],type:[18]}
        ]
    },
    {
        q: '2. 며칠이 걸리든 문제가 풀릴 때까지 끝까지 노력을 하나요?',
        a: [
            {answer : 'a. 네', type:[0], type:[1], type:[2], type:[3], type:[4], type:[5], type:[6], type:[7], type:[8], type:[9], type:[10], type:[11], type:[14], type:[19]},
            {answer : 'b. 아니요', type:[12], type:[13], type:[15], type:[16], type:[17], type:[18]},
        ]
    },
    {
        q: '3. 쉬는 날에 이중에서 어떤 걸 가장 하고싶나요?',
        a: [
            {answer : 'a. 영화, 드라마, 음악 감상', type:[11],type:[12],type:[13],type:[15],type:[16],type:[18],type:[19]},
            {answer : 'b. 만들기, 몸으로 체험하고 활동하기', type:[0],type:[1],type:[2],type:[3],type:[4],type:[5],type:[6],type:[7],type:[8],type:[9],type:[10],type:[14],type:[17]}
        ]
    },
    {
        q: '4. 어떤 삶이 나에게 더 맞는 것 같나요?',
        a: [
            {answer : 'a. 규칙적인 삶', type:[0], type:[11], type:[11], type:[11], type:[11], type:[11], type:[11]},
            {answer : 'b. 즉흥적인 삶', type:[0], type:[11], type:[11], type:[11], type:[11], type:[11], type:[11]},
        ]
    },
    {
        q: '5. 간단하게 놀려갈만 한 곳으로 이중에서 어디로 갈 것인가요?',
        a: [
            {answer : 'a. 영화관, 미술관', type:[11], type:[12], type:[13], type:[15], type:[18], type:[19]},
            {answer : 'b. 박물관, 과학관, 체험관', type:[0], type:[1], type:[2], type:[3], type:[4], type:[5], type:[6], type:[7], type:[8], type:[9], type:[10]},
            {answer : 'c. PC방, 노래방, 오락실', type:[11], type:[12], type:[18], type:[19]},
        ]
    },
    {
        q: '6. 가장 관심있는 분야가 어떤 것인가요?',
        a: [
            {answer : 'a. 과학/공학', type:[0], type:[1], type:[2], type:[3], type:[4], type:[5], type:[6], type:[7], type:[8], type:[9], type:[10]},
            {answer : 'b. 예술/체육/디자인', type:[11], type:[12], type:[13], type:[16], type:[17], type:[18], type:[19]},
            {answer : 'c. 인문/법학', type:[11], type:[12], type:[15], type:[16]},
        ]
    },
    {
        q: '7. 어떨 때가 더 편한가요?',
        a: [
            {answer : 'a. 혼자 지내는 것', type:[0], type:[1], type:[2], type:[3], type:[4], type:[5], type:[6], type:[7], type:[8], type:[9], type:[10], type:[14]},
            {answer : 'b. 남들과 함께 지내는 것', type:[11], type:[12], type:[13], type:[15], type:[17], type:[18], type:[19]},
        ]
    },
    {
        q: '8. 모임에서 나는 어떤 역할인 것 같나요?',
        a: [
            {answer : 'a. 리더. 모임의 리더로써 중심이 되는 역할이다', type:[0], type:[9], type:[10], type:[4], type:[3]},
            {answer : 'b. 개그 담당. 모임에서 웃음을 담당하는 역할이다', type:[11], type:[12], type:[13], type:[11], type:[11], type:[11]},
            {answer : 'c. 서기. 다른 사람의 말과 행동을 관찰한다', type:[0], type:[1], type:[2], type:[4], type:[5], type:[6], type:[7], type:[8]},
            {answer : 'd. 중재자. 다툼을 말리거나 적절히 선을 그어주는 역할이다.', type:[3], type:[8], type:[10]}
        ]
    },
    {
        q: '9. 어떤 소설책이 자신에게 흥미롭게 느껴지나요?',
        a: [
            {answer : 'a. 로멘스 / 연애 소설', type:[11], type:[12], type:[13], type:[14], type:[15], type:[16], type:[18], type:[19]},
            {answer : 'b. 추리 / 스릴러 소설', type:[0], type:[1], type:[2], type:[3], type:[4], type:[5], type:[6], type:[7], type:[8], type:[9], type:[10], type:[16], type:[17]},
        ]
    },
    {
        q: '10. 일을 할 때 나는 어떤 모습으로 일을 하나요?',
        a: [
            {answer : 'a. 직접 기획하며 제작하는 것에 몰두함', type:[3], type:[4], type:[6], type:[7], type:[8], type:[11], type:[12], type:[13], type:[14], type:[15], type:[16], type:[17], type:[18], type:[19]},
            {answer : 'b. 지시받은 일에 대해 최선을 다해 제작함', type:[0], type:[1], type:[2], type:[5], type:[9], type:[10]},
        ]
    },
    {
        q: '11. 일을 하였을 때 보상으로 금전적 보상이나 확실한 명성 및 명예가 있어야 한다',
        a: [
            {answer : 'a. 네', type:[0], type:[11], type:[11], type:[11], type:[11], type:[11]},
            {answer : 'b. 아니요', type:[0], type:[11], type:[11], type:[11], type:[11], type:[11]},
        ]
    },
    {
        q: '12. 개성이 강하면 사서 고생한다고 믿는 편이다',
        a: [
            {answer : 'a. 네', type:[0], type:[11], type:[11], type:[11]},
            {answer : 'b. 아니요', type:[0], type:[11], type:[11], type:[11]},
        ]
    },
    {
        q: '13. 무언가를 꾸준히 한다는 말을 들어본 적이 있다',
        a: [
            {answer : 'a. 네', type:[0], type:[11], type:[11], type:[11], type:[11], type:[11]},
            {answer : 'b. 아니요', type:[0], type:[11], type:[11], type:[11], type:[11], type:[11]},
        ]
    },
    {
        q: '14. 즉흥적인 행동에 대해 어떻게 생각하나요?',
        a: [
            {answer : 'a. 즉흥적인 행동은 자연스러운 것이다.', type:[0], type:[11], type:[11], type:[11], type:[11]},
            {answer : 'b. 계획을 파괴하는 해서는 안되는 행위이다', type:[0], type:[11], type:[11], type:[11], type:[11]},
        ]
    },
    {
        q: '15. 호기심 때문에 행동을 하는 경우는 거의 없다.',
        a: [
            {answer : 'a. 네', type:[0], type:[11], type:[11], type:[11], type:[11], type:[11]},
            {answer : 'b. 아니요', type:[0], type:[11], type:[11], type:[11], type:[11], type:[11]},
        ]
    },
]

const infoList = [
    {
        name: '로봇 공학자',
        desc: '모든 분야에서 사람을 대신할 수 있는 로봇을 제작해요'
    },
    {
        name: '인공지능 전문가',
        desc: '스스로 사고하고 추론하는 능력을 가진 컴퓨터시스템을 개발해요'
    },
    {
        name: '무인 자동차 엔지니어',
        desc: '운전자의 조작 없이도 스스로 도로 상황을 파악해 목적지에 도착할 수 있어요'
    },
    {
        name: '생명공학자',
        desc: '생물체의 현상과 원리를 연구해 인간 생명에 도움되는 일을 해요'
    },
    {
        name: '바이오 의약품 개발 전문가',
        desc: '생명체에서 얻은 물질을 이용해 인간을 치료하는 약을 개발해요'
    },
    {
        name: '빅 데이터 전문가',
        desc: '빅 데이터를 분석하면 새로운 것들을 발견하고 미래를 예측할 수 있어요'
    },
    {
        name: '항공우주공학자',
        desc: '하늘을 무대로 항공기, 우주선, 로켓, 인공위성을 연구하고 개발해요'
    },
    {
        name: '디지털 포렌식 수사관',
        desc: '휴대폰·PC·서버 등에서 데이터를 수집하고 분석하여 범죄 수사에 활용해요'
    },
    {
        name: '블록체인 전문가',
        desc: '누구도 정보를 조작할 수 없도록 하는 블록체인 기술을 개발해요'
    },
    {
        name: '신재생에너지 전문가',
        desc: '지구를 살리는 착한 에너지, 자연에서 찾아요'
    },
    {
        name: '기후변화 대응 전문가',
        desc: '기후변화를 예측하고 대응하기 위한 대책을 내놓습니다.'
    },
    {
        name: '게임 기획자',
        desc: '누구나 쉽게 즐길 수 있는 게임을 만들어요'
    },
    {
        name: '크리에이터',
        desc: '내가 표현하고 싶은 것들을 영상 콘텐츠로 만들어요'
    },
    {
        name: '반려동물 훈련·상담사',
        desc: '반려동물의 문제 행동을 바로잡을 수 있도록 도와줘요'
    },
    {
        name: '의료 기기 개발 전문가',
        desc: '환자의 건강 증진을 위해 의료 기기를 설계하고 개발해요'
    },
    {
        name: '노인 전문 간호사',
        desc: '노인들의 건강관리를 책임져요'
    },
    {
        name: '정밀 농업기술자',
        desc: '식량부족 시대의 새로운 대안은 정밀 농업에 있어요'
    },
    {
        name: '곤충 음식 개발자 조리사',
        desc: '인류의 미래 먹거리를 책임지는 일을 해요'
    },
    {
        name: '캐릭터 디자이너',
        desc: '애니메이션, 만화, 게임, 상품 등의 주인공을 디자인해요'
    },
    {
        name: '3D 프린팅 전문가',
        desc: '제조 분야의 혁명! 개인이 원하는 단 하나의 맞춤형 제품을 제작해요'
    },
]
