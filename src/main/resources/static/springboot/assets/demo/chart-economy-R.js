// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var options = {
    title: {
      display: true,
      text: '해당 년도 영업이익 (단위:천원)'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
        },
        ticks: {
        }
      }],
      yAxes: [{
        ticks: {
        },
        gridLines: {
        }
      }],
    },
};


var ecoR1 = {
    labels: [
        "숙박 및 음식점업", "예술, 스포츠 및 여가관련 서비스업", "보건업 및 사회복지 서비스업", "보건업 및 사회복지 서비스업", "교육 서비스업", "전기, 가스, 증기 및 공기조절 공급업", "운수 및 창고업"
        ,"수도, 하수 및 폐기물 처리, 원료 재생업", "부동산업", "사업시설 관리, 사업 지원 및 임대 서비스업", "도매 및 소매업", "건설업", "제조업", "정보통신업"
        ,"광업", "전문, 과학 및 기술 서비스업", "금융 및 보험업", "협회 및 단체, 수리 및 기타 개인 서비스업", "농업, 임업 및 어업"
    ],
    datasets: [{
        type: 'line',
        label: "2019년 영업이익 (단위:천원)",
        backgroundColor: "rgba(51, 153, 255, 0.8)",
        borderColor: "rgba(51, 153, 255, 0.8)",
        data: [
            120.0235704, 67.25138559, -43.32872857, 112.5095, 112.2728706, 229.55, 229.037505
            , 487.2786404, 1230.266992, 147.1983445, 307.5069816, 407.2968282, 379.5962133, 178.725144
            , 339.6509231, 137.4268905, 1210.597018, -171.12728, -190.7175517
        ],
        fill: false,
    },{
        type: 'bar',
        label: "2020년 영업이익 (단위:천원)",
        backgroundColor: "rgba(255,153,0,0.9)",
        borderColor: "rgba(255,153,0,0.9)",
        data: [
            -819.854915, -381.7620811, -250.6410625, 90.5585, 25.31063415, -88.76152941, 181.8429686
            , 430.4196136, 1138.079408, 127.0773203, 368.556657, 529.1594081, 537.7362246, 385.6997169
            , 491.4710455, 262.4458952, 2879.769406, -421.3001598, 315.9636786
        ],
        fill: false,
    }],
};

var ecoR2 = {
    labels: [
        "숙박 및 음식점업", "예술, 스포츠 및 여가관련 서비스업", "보건업 및 사회복지 서비스업", "보건업 및 사회복지 서비스업", "교육 서비스업", "전기, 가스, 증기 및 공기조절 공급업", "운수 및 창고업"
        ,"수도, 하수 및 폐기물 처리, 원료 재생업", "부동산업", "사업시설 관리, 사업 지원 및 임대 서비스업", "도매 및 소매업", "건설업", "제조업", "정보통신업"
        ,"광업", "전문, 과학 및 기술 서비스업", "금융 및 보험업", "협회 및 단체, 수리 및 기타 개인 서비스업", "농업, 임업 및 어업"
    ],
    datasets: [{
        type: 'line',
        label: "2018년 영업이익 (단위:천원)",
        backgroundColor: "rgba(51, 153, 255, 0.8)",
        borderColor: "rgba(51, 153, 255, 0.8)",
        data: [
            23.50788574, 149.397065, -27.5224697, 52.60425, 129.227151, 1018.234065, 178.9349735
            , 407.8756577, 1122.178625, 149.0168142, 308.2294737, 408.1480426, 366.2532683, 132.8424796
            , 625.0053913, 137.8978594, 1247.420387, -38.48484734, 466.7262759
        ],
        fill: false,
    },{
        type: 'bar',
        label: "2020년 영업이익 (단위:천원)",
        backgroundColor: "rgba(255,153,0, 0.9)",
        borderColor: "rgba(255,153,0, 0.9)",
        data: [
            -819.854915, -381.7620811, -250.6410625, 90.5585, 25.31063415, -88.76152941, 181.8429686
            , 430.4196136, 1138.079408, 127.0773203, 368.556657, 529.1594081, 537.7362246, 385.6997169
            , 491.4710455, 262.4458952, 2879.769406, -421.3001598, 315.9636786
        ],
        fill: false,
    }],
};

var ecoR3_asc = {
    labels: [
        "콜밴", "중장비 대여", "도장", "레저-기타", "탁구장", "분재", "열쇠", "응급구조대", "복지시설", "낚시터", "당구장", "자동차 견인", "정보통신기기 수리", "건강원", "세무사", "자석요/온돌매트/옥매트", "네일케어", "고시원", "종묘사업", "골동품/예술품", "세탁소", "공예품", "꽃집/꽃배달", "의류 수선", "의류 대여", "커튼/카페트/수예", "복권", "인테리어 용품", "오토바이 용품", "보일러", "건설장비 대여", "복사대행", "공인노무사", "가구 제조", "유리/거울", "섬유", "운명/운세/작명", "특수세탁", "비디오감상실", "한약방", "가정용품 수리", "기념패 제작", "종합이삿짐대행", "무술 도장", "성인용품", "여관/민박", "조명기구", "주민자치센터", "전자오락실", "페인트", "물품보관소", "액세서리", "미용실", "종교용품", "노래방", "수중장비", "택배업", "떡/한과 제조", "보건소", "그림/액자", "미곡상", "대체의학", "보트", "한복/포목점", "체형/두피관리", "식품 제조", "자전거-아동용", "사진관", "생수", "캠프/별장/펜션", "미용제품", "애완동물/용품", "정밀기기 대여", "중장비 정비", "아동복/유아복", "스포츠마사지", "오토바이", "가방/핸드백", "떡/한과", "예복/웨딩드레스", "한복", "화훼/조경", "고등학교", "의류-기타", "세차/광택", "침구류", "내의", "선물/기념품", "축구/풋살/족구장", "담배", "동물농장", "화장품", "기계류 제조", "기타 제조", "병원-소아과", "영상/방송", "변리사", "음반/음원", "자전거-성인용", "심리상담", "보청기", "냉난방기기", "환경측정/검사/평가서비스", "문서/물품 서비스", "농협-상품권", "시계/귀금속", "스포츠강습", "건어물", "광고", "룸살롱/단란주점", "악기", "주스", "사무용기기", "농산물", "피부관리/마사지", "이벤트/행사 대행", "병원-신경정신과", "부동산중개", "테마카페", "이민/유학", "독서실", "용역서비스-기타", "고용알선/직업안내", "곡물/사료", "신발", "어린이집", "종교단체", "청과물", "식료품", "정기간행물 발행", "테니스장", "주방가구", "병원-가정의학과", "포장마차", "요가", "부동산-주택/아파트 임대", "장난감/오락기기", "분식", "문화센터", "그릇/주방기기", "우체국", "수족관", "치킨", "출판사", "낚시용품", "영상/음향기기", "자동판매기", "농기구/자재", "건강식품", "학원-예체능", "맥주/요리주점", "번역/통역서비스", "반찬", "교복", "치과기공소", "단품요리 전문", "병원-이비인후과", "기사식당", "실내야구연습장", "도시락", "혼수전문점", "병원-한의학과", "주차장", "변호사", "야식", "법무사", "꼬치구이", "모텔", "실내골프장", "피자", "박물관/전시관", "유치원", "농어업서비스", "인터넷PC방", "스포츠센터", "사진기/광학제품", "골프장", "복지매점", "병원-내과", "중학교", "수산물", "문구용품", "회계서비스", "렌터카", "가정식", "사회단체", "여객선", "연극/음악/공연", "의류", "아이스크림/빙수", "건축용자재/용품", "중장비 판매", "학원-입시/보습", "퀵배달", "주류", "자동차 시트/타이어", "샌드위치/토스트", "산후조리서비스", "차", "축산물", "농축산물가공", "목욕탕", "가구", "자연학습원", "커피", "가정용연료", "스테이크", "기타세계요리", "동남아/인도음식", "학원-어학", "베이커리", "일식", "인쇄업", "안경점", "자동차 정비-수입", "출장부페", "컴퓨터/주변기기", "양식", "중식", "병원-비뇨기과", "도너츠", "인테리어", "민속주점", "일반 유흥주점", "가발", "화물운송", "약국", "새마을금고", "단전호흡", "유아교육/키즈카페", "병원-동물병원", "병원-치과", "측량/제도/정밀기기", "수상스포츠", "생활용품", "스포츠용품", "자동차 검사소", "수입품", "호텔-기타", "가스관리사업소", "청소/소독 대행", "편의점", "수영장", "병원-산부인과", "학원-기타", "자동차 경정비", "영화관", "납골/묘지", "병원-외과", "초등학교", "건축설계사무소", "병원-마취과", "볼링장", "스포츠의류전문", "조합/협회", "예식서비스", "학원-직업", "부동산-건물관리", "햄버거", "산후조리원", "전기자재/장비", "치료/발달센터", "부페", "서점", "병원-정형외과", "학습교구", "한의약품", "병원-재활의학과", "병원-피부과의원", "병원-신경외과", "중고차", "금융-기타", "병원-일반", "생활장비 대여", "구내식당/푸드코트", "골프용품", "과학기기", "인삼제품", "장례식장", "놀이동산", "병원-성형외과", "병원-안과", "병원-영상의학과", "대학교", "의료기기", "연구소", "슈퍼마켓 일반형", "예식장", "가전제품", "2급호텔", "패밀리 레스토랑", "사원전용매장", "연금매장", "결혼정보회사", "유제품", "가전제품 수리", "콘도미니엄", "여행사", "1급호텔", "통신관련서비스", "슈퍼마켓 기업형", "상품권/기프티콘", "식자재", "농협-마트", "수입차", "병원-기타", "요양원", "학습지", "주유소", "고속버스", "정수기/연수기기", "컴퓨터 소프트웨어", "특급호텔", "유료도로", "면세점", "LPG가스", "병원-대학/종합병원", "상조서비스", "대형마트", "전자상거래", "자사가맹점", "교육단체", "항공사", "휴대폰", "아울렛", "택시", "제약회사", "생명보험", "다단계", "백화점", "홈쇼핑", "버스/지하철", "보훈매장", "해외사용", "손해보험", "통신요금", "월납/세금", "신차"
    ],
    datasets: [{
        type: 'bar',
        label: "연간 매출액 추정 손실 (단위:백만원)",
        backgroundColor: "rgba(51, 153, 255, 0.8)",
        borderColor: "rgba(51, 153, 255, 0.8)",
        data: [
            1.22, 1.34, 1.62, 1.73, 1.82, 2.08, 2.29, 2.33, 2.8, 2.84, 2.92, 2.97, 3.24, 3.3, 3.56, 3.71, 3.77, 3.79, 3.92, 4.08, 4.25, 4.31, 4.51, 4.52, 4.6, 4.66, 4.74, 4.89, 5.21, 5.3, 5.32, 5.33, 5.34, 5.39, 5.46, 5.63, 5.68, 5.83, 5.93, 6, 6.15, 6.22, 6.25, 6.42, 6.48, 6.55, 6.61, 6.74, 6.79, 6.82, 6.84, 6.96, 6.99, 7.02, 7.04, 7.09, 7.1, 7.11, 7.27, 7.45, 7.45, 7.48, 7.7, 7.72, 7.82, 7.91, 7.98, 8, 8.24, 8.47, 8.61, 8.62, 8.89, 8.96, 9.03, 9.08, 9.09, 9.18, 9.22, 9.34, 9.38, 9.41, 9.5, 9.63, 9.67, 9.72, 9.77, 9.81, 9.82, 10.22, 10.23, 10.24, 10.41, 10.42, 10.59, 10.69, 10.79, 10.91, 11.08, 11.13, 11.16, 11.33, 11.7, 11.78, 12.17, 12.2, 12.33, 12.46, 12.48, 12.53, 12.55, 12.57, 12.6, 12.63, 12.79, 13, 13.07, 13.07, 13.14, 13.34, 13.64, 13.68, 13.79, 13.83, 13.93, 14.05, 14.28, 14.33, 14.53, 14.73, 14.83, 15.1, 15.13, 15.15, 15.24, 15.26, 15.28, 15.42, 15.65, 15.69, 15.73, 15.76, 15.76, 16.52, 16.63, 16.75, 16.9, 16.93, 16.94, 16.99, 17.15, 17.29, 17.44, 17.5, 17.52, 17.91, 18.21, 18.24, 18.31, 18.32, 18.69, 18.71, 18.73, 19.32, 19.34, 19.75, 19.98, 20.02, 20.02, 20.06, 20.5, 20.52, 20.55, 20.76, 20.84, 20.89, 20.94, 21.01, 21.34, 21.56, 21.83, 22.06, 22.12, 22.13, 22.14, 22.37, 22.38, 22.61, 22.68, 23.42, 23.48, 23.53, 23.56, 23.57, 23.6, 23.71, 23.89, 23.97, 24.19, 24.6, 24.79, 25.01, 25.14, 25.53, 26.31, 26.38, 26.48, 26.72, 26.85, 27.57, 27.75, 28.26, 28.79, 28.9, 29.5, 30.38, 30.53, 30.85, 30.92, 31.08, 31.27, 31.29, 31.54, 32.46, 32.89, 33.35, 34.33, 34.57, 35.29, 35.83, 36.2, 36.38, 36.4, 36.58, 37.04, 37.04, 37.4, 37.63, 39.78, 40.47, 40.7, 43.52, 43.79, 43.87, 47.53, 47.57, 47.84, 47.87, 49.09, 49.28, 49.61, 51.56, 53.78, 53.92, 54.1, 55.69, 58.28, 59.74, 59.86, 60.42, 64.99, 65.85, 66.04, 68.63, 69.67, 70.51, 70.61, 72.28, 73.3, 79.58, 81.87, 83.72, 90.59, 90.95, 94.09, 94.98, 97.36, 99.49, 100.39, 102.22, 103.27, 104.14, 105.63, 107.87, 109.3, 115.08, 115.41, 119.68, 123.08, 139.59, 141.37, 151.91, 153.04, 154.04, 155.21, 155.78, 232.69, 249.58, 266.15, 293.58, 309, 349.28, 349.84, 362.94, 382.6, 387.34, 498.95, 518.93, 541.1, 548.36, 564.06, 889.26, 1044.09, 1077.54, 1089.02, 1536.75, 1942.7, 2030.92, 2224.64, 3353.73, 3959.78, 4116.94, 4166.17, 4302.78, 4569.01, 4886.42, 5163.69, 5871.37, 6128.64, 6426.09, 7584.33, 11535.26, 16064.04, 20310.49, 21786.81, 31689.76, 53074.57, 89622.25
        ],
        fill: false,
    }],
};

var ecoR3_desc = {
    labels: [
        "신차", "월납/세금", "통신요금", "손해보험", "해외사용", "보훈매장", "버스/지하철", "홈쇼핑", "백화점", "다단계", "생명보험", "제약회사", "택시", "아울렛", "휴대폰", "항공사", "교육단체", "자사가맹점", "전자상거래", "대형마트", "상조서비스", "병원-대학/종합병원", "LPG가스", "면세점", "유료도로", "특급호텔", "컴퓨터 소프트웨어", "정수기/연수기기", "고속버스", "주유소", "학습지", "요양원", "병원-기타", "수입차", "농협-마트", "식자재", "상품권/기프티콘", "슈퍼마켓 기업형", "통신관련서비스", "1급호텔", "여행사", "콘도미니엄", "가전제품 수리", "유제품", "결혼정보회사", "연금매장", "사원전용매장", "패밀리 레스토랑", "2급호텔", "가전제품", "예식장", "슈퍼마켓 일반형", "연구소", "의료기기", "대학교", "병원-영상의학과", "병원-안과", "병원-성형외과", "놀이동산", "장례식장", "인삼제품", "과학기기", "골프용품", "구내식당/푸드코트", "생활장비 대여", "병원-일반", "금융-기타", "중고차", "병원-신경외과", "병원-피부과의원", "병원-재활의학과", "한의약품", "학습교구", "병원-정형외과", "서점", "부페", "치료/발달센터", "전기자재/장비", "산후조리원", "햄버거", "부동산-건물관리", "학원-직업", "예식서비스", "조합/협회", "스포츠의류전문", "볼링장", "병원-마취과", "건축설계사무소", "초등학교", "병원-외과", "납골/묘지", "영화관", "자동차 경정비", "학원-기타", "병원-산부인과", "수영장", "편의점", "청소/소독 대행", "가스관리사업소", "호텔-기타", "수입품", "자동차 검사소", "생활용품", "스포츠용품", "수상스포츠", "측량/제도/정밀기기", "병원-치과", "병원-동물병원", "유아교육/키즈카페", "단전호흡", "새마을금고", "약국", "화물운송", "가발", "일반 유흥주점", "민속주점", "인테리어", "도너츠", "병원-비뇨기과", "중식", "양식", "컴퓨터/주변기기", "출장부페", "자동차 정비-수입", "안경점", "인쇄업", "일식", "베이커리", "학원-어학", "동남아/인도음식", "기타세계요리", "스테이크", "가정용연료", "커피", "자연학습원", "가구", "목욕탕", "농축산물가공", "축산물", "차", "산후조리서비스", "샌드위치/토스트", "자동차 시트/타이어", "주류", "퀵배달", "학원-입시/보습", "중장비 판매", "건축용자재/용품", "아이스크림/빙수", "의류", "연극/음악/공연", "여객선", "사회단체", "가정식", "렌터카", "회계서비스", "문구용품", "수산물", "중학교", "병원-내과", "복지매점", "골프장", "사진기/광학제품", "스포츠센터", "인터넷PC방", "농어업서비스", "유치원", "박물관/전시관", "피자", "모텔", "실내골프장", "꼬치구이", "법무사", "야식", "변호사", "주차장", "병원-한의학과", "혼수전문점", "도시락", "실내야구연습장", "기사식당", "병원-이비인후과", "단품요리 전문", "치과기공소", "교복", "반찬", "번역/통역서비스", "맥주/요리주점", "학원-예체능", "건강식품", "농기구/자재", "자동판매기", "영상/음향기기", "낚시용품", "출판사", "수족관", "치킨", "우체국", "그릇/주방기기", "문화센터", "분식", "장난감/오락기기", "부동산-주택/아파트 임대", "요가", "포장마차", "병원-가정의학과", "주방가구", "테니스장", "정기간행물 발행", "식료품", "청과물", "종교단체", "어린이집", "신발", "곡물/사료", "고용알선/직업안내", "용역서비스-기타", "독서실", "이민/유학", "테마카페", "병원-신경정신과", "부동산중개", "이벤트/행사 대행", "피부관리/마사지", "농산물", "사무용기기", "주스", "악기", "룸살롱/단란주점", "광고", "건어물", "스포츠강습", "시계/귀금속", "농협-상품권", "문서/물품 서비스", "환경측정/검사/평가서비스", "냉난방기기", "보청기", "심리상담", "자전거-성인용", "음반/음원", "변리사", "영상/방송", "병원-소아과", "기타 제조", "기계류 제조", "화장품", "동물농장", "담배", "축구/풋살/족구장", "선물/기념품", "내의", "침구류", "세차/광택", "의류-기타", "고등학교", "화훼/조경", "한복", "예복/웨딩드레스", "떡/한과", "가방/핸드백", "오토바이", "스포츠마사지", "아동복/유아복", "중장비 정비", "정밀기기 대여", "애완동물/용품", "미용제품", "캠프/별장/펜션", "생수", "사진관", "자전거-아동용", "식품 제조", "체형/두피관리", "한복/포목점", "보트", "대체의학", "그림/액자", "미곡상", "보건소", "떡/한과 제조", "택배업", "수중장비", "노래방", "종교용품", "미용실", "액세서리", "물품보관소", "페인트", "전자오락실", "주민자치센터", "조명기구", "여관/민박", "성인용품", "무술 도장", "종합이삿짐대행", "기념패 제작", "가정용품 수리", "한약방", "비디오감상실", "특수세탁", "운명/운세/작명", "섬유", "유리/거울", "가구 제조", "공인노무사", "복사대행", "건설장비 대여", "보일러", "오토바이 용품", "인테리어 용품", "복권", "커튼/카페트/수예", "의류 대여", "의류 수선", "꽃집/꽃배달", "공예품", "세탁소", "골동품/예술품", "종묘사업", "고시원", "네일케어", "자석요/온돌매트/옥매트", "세무사", "건강원", "정보통신기기 수리", "자동차 견인", "당구장", "낚시터", "복지시설", "응급구조대", "열쇠", "분재", "탁구장", "레저-기타", "도장", "중장비 대여", "콜밴"
    ],
    datasets: [{
        type: 'bar',
        label: "연간 매출액 추정 손실 (단위:백만원)",
        backgroundColor: "rgba(51, 153, 255, 0.8)",
        borderColor: "rgba(51, 153, 255, 0.8)",
        data: [
            89622.25, 53074.57, 31689.76, 21786.81, 20310.49, 16064.04, 11535.26, 7584.33, 6426.09, 6128.64, 5871.37, 5163.69, 4886.42, 4569.01, 4302.78, 4166.17, 4116.94, 3959.78, 3353.73, 2224.64, 2030.92, 1942.7, 1536.75, 1089.02, 1077.54, 1044.09, 889.26, 564.06, 548.36, 541.1, 518.93, 498.95, 387.34, 382.6, 362.94, 349.84, 349.28, 309, 293.58, 266.15, 249.58, 232.69, 155.78, 155.21, 154.04, 153.04, 151.91, 141.37, 139.59, 123.08, 119.68, 115.41, 115.08, 109.3, 107.87, 105.63, 104.14, 103.27, 102.22, 100.39, 99.49, 97.36, 94.98, 94.09, 90.95, 90.59, 83.72, 81.87, 79.58, 73.3, 72.28, 70.61, 70.51, 69.67, 68.63, 66.04, 65.85, 64.99, 60.42, 59.86, 59.74, 58.28, 55.69, 54.1, 53.92, 53.78, 51.56, 49.61, 49.28, 49.09, 47.87, 47.84, 47.57, 47.53, 43.87, 43.79, 43.52, 40.7, 40.47, 39.78, 37.63, 37.4, 37.04, 37.04, 36.58, 36.4, 36.38, 36.2, 35.83, 35.29, 34.57, 34.33, 33.35, 32.89, 32.46, 31.54, 31.29, 31.27, 31.08, 30.92, 30.85, 30.53, 30.38, 29.5, 28.9, 28.79, 28.26, 27.75, 27.57, 26.85, 26.72, 26.48, 26.38, 26.31, 25.53, 25.14, 25.01, 24.79, 24.6, 24.19, 23.97, 23.89, 23.71, 23.6, 23.57, 23.56, 23.53, 23.48, 23.42, 22.68, 22.61, 22.38, 22.37, 22.14, 22.13, 22.12, 22.06, 21.83, 21.56, 21.34, 21.01, 20.94, 20.89, 20.84, 20.76, 20.55, 20.52, 20.5, 20.06, 20.02, 20.02, 19.98, 19.75, 19.34, 19.32, 18.73, 18.71, 18.69, 18.32, 18.31, 18.24, 18.21, 17.91, 17.52, 17.5, 17.44, 17.29, 17.15, 16.99, 16.94, 16.93, 16.9, 16.75, 16.63, 16.52, 15.76, 15.76, 15.73, 15.69, 15.65, 15.42, 15.28, 15.26, 15.24, 15.15, 15.13, 15.1, 14.83, 14.73, 14.53, 14.33, 14.28, 14.05, 13.93, 13.83, 13.79, 13.68, 13.64, 13.34, 13.14, 13.07, 13.07, 13, 12.79, 12.63, 12.6, 12.57, 12.55, 12.53, 12.48, 12.46, 12.33, 12.2, 12.17, 11.78, 11.7, 11.33, 11.16, 11.13, 11.08, 10.91, 10.79, 10.69, 10.59, 10.42, 10.41, 10.24, 10.23, 10.22, 9.82, 9.81, 9.77, 9.72, 9.67, 9.63, 9.5, 9.41, 9.38, 9.34, 9.22, 9.18, 9.09, 9.08, 9.03, 8.96, 8.89, 8.62, 8.61, 8.47, 8.24, 8, 7.98, 7.91, 7.82, 7.72, 7.7, 7.48, 7.45, 7.45, 7.27, 7.11, 7.1, 7.09, 7.04, 7.02, 6.99, 6.96, 6.84, 6.82, 6.79, 6.74, 6.61, 6.55, 6.48, 6.42, 6.25, 6.22, 6.15, 6, 5.93, 5.83, 5.68, 5.63, 5.46, 5.39, 5.34, 5.33, 5.32, 5.3, 5.21, 4.89, 4.74, 4.66, 4.6, 4.52, 4.51, 4.31, 4.25, 4.08, 3.92, 3.79, 3.77, 3.71, 3.56, 3.3, 3.24, 2.97, 2.92, 2.84, 2.8, 2.33, 2.29, 2.08, 1.82, 1.73, 1.62, 1.34, 1.22
        ],
        fill: false,
    }],
};

var ecoR4 = {
    labels: [
        "주민자치센터", "탁구장", "당구장", "도장", "낚시터", "콜밴", "복권", "중장비 대여", "보건소", "응급구조대", "열쇠", "네일케어", "동물농장", "세탁소", "골동품/예술품", "건강원", "자동차 견인", "비디오감상실", "고시원", "노래방", "기념패 제작", "공예품", "무술 도장", "전자오락실", "여관/민박", "복지시설", "꽃집/꽃배달", "커튼/카페트/수예", "의류-기타", "수중장비", "레저-기타", "한복/포목점", "정보통신기기 수리", "출장부페", "한약방", "가구 제조", "공인노무사", "대체의학", "성인용품", "종묘사업", "물품보관소", "인터넷PC방", "화훼/조경", "그림/액자", "건설장비 대여", "인테리어 용품", "유리/거울", "선물/기념품", "테마카페", "운명/운세/작명", "스포츠강습", "섬유", "스포츠마사지", "한복", "독서실", "미용실", "보일러", "복사대행", "피부관리/마사지", "사진관", "아동복/유아복", "세무사", "예복/웨딩드레스", "교복", "종교용품", "특수세탁", "테니스장", "자석요/온돌매트/옥매트", "자연학습원", "조명기구", "실내야구연습장", "목욕탕", "룸살롱/단란주점", "내의", "생수", "고등학교", "가방/핸드백", "부동산중개", "문화센터", "수족관", "가정용품 수리", "맥주/요리주점", "체형/두피관리", "건축설계사무소", "일반 유흥주점", "종합이삿짐대행", "미곡상", "요가", "곡물/사료", "세차/광택", "농축산물가공", "보청기", "박물관/전시관", "중장비 정비", "전기자재/장비", "야식", "영상/음향기기", "정밀기기 대여", "애완동물/용품", "주차장", "침구류", "의류 수선", "기계류 제조", "혼수전문점", "인쇄업", "오토바이 용품", "식품 제조", "심리상담", "액세서리", "학원-예체능", "축구/풋살/족구장", "화장품", "이벤트/행사 대행", "유치원", "미용제품", "담배", "변리사", "페인트", "떡/한과", "학원-입시/보습", "스포츠센터", "기타 제조", "치킨", "주스", "시계/귀금속", "농협-상품권", "음반/음원", "모텔", "단전호흡", "악기", "분식", "자동판매기", "산후조리서비스", "꼬치구이", "피자", "수영장", "냉난방기기", "단품요리 전문", "택배업", "학원-어학", "의류 대여", "반찬", "광고", "정기간행물 발행", "사무용기기", "떡/한과 제조", "오토바이", "포장마차", "민속주점", "퀵배달", "병원-신경정신과", "종교단체", "농기구/자재", "기사식당", "영화관", "어린이집", "부동산-주택/아파트 임대", "결혼정보회사", "장난감/오락기기", "보트", "분재", "아이스크림/빙수", "치과기공소", "가정식", "스테이크", "농산물", "복지매점", "병원-소아과", "청소/소독 대행", "커피", "호텔-기타", "병원-한의학과", "자전거-성인용", "연극/음악/공연", "그릇/주방기기", "의류", "볼링장", "법무사", "문구용품", "양식", "회계서비스", "고용알선/직업안내", "이민/유학", "신발", "인테리어", "병원-이비인후과", "수상스포츠", "차", "사진기/광학제품", "동남아/인도음식", "자전거-아동용", "유아교육/키즈카페", "도시락", "중장비 판매", "건어물", "수산물", "식료품", "병원-가정의학과", "안경점", "우체국", "가정용연료", "일식", "중식", "낚시용품", "측량/제도/정밀기기", "금융-기타", "중학교", "변호사", "자동차 경정비", "농어업서비스", "건강식품", "자동차 검사소", "자동차 시트/타이어", "가발", "기타세계요리", "베이커리", "청과물", "용역서비스-기타", "도너츠", "조합/협회", "실내골프장", "출판사", "스포츠용품", "학원-기타", "병원-내과", "화물운송", "부페", "샌드위치/토스트", "가구", "수입품", "예식서비스", "초등학교", "건축용자재/용품", "병원-비뇨기과", "병원-치과", "축산물", "약국", "주류", "캠프/별장/펜션", "컴퓨터/주변기기", "햄버거", "병원-동물병원", "납골/묘지", "편의점", "서점", "학습교구", "병원-산부인과", "구내식당/푸드코트", "골프용품", "스포츠의류전문", "병원-외과", "산후조리원", "여행사", "병원-마취과", "2급호텔", "생활용품", "사원전용매장", "번역/통역서비스", "학원-직업", "예식장", "인삼제품", "병원-정형외과", "병원-피부과의원", "병원-재활의학과", "병원-신경외과", "영상/방송", "장례식장", "새마을금고", "과학기기", "병원-일반", "패밀리 레스토랑", "병원-영상의학과", "휴대폰", "병원-성형외과", "치료/발달센터", "중고차", "가스관리사업소", "병원-안과", "골프장", "슈퍼마켓 일반형", "대학교", "의료기기", "렌터카", "통신관련서비스", "연금매장", "부동산-건물관리", "1급호텔", "가전제품 수리", "유제품", "놀이동산", "환경측정/검사/평가서비스", "사회단체", "콘도미니엄", "농협-마트", "자동차 정비-수입", "정수기/연수기기", "요양원", "연구소", "컴퓨터 소프트웨어", "슈퍼마켓 기업형", "식자재", "특급호텔", "주유소", "가전제품", "생활장비 대여", "수입차", "주방가구", "상품권/기프티콘", "학습지", "항공사", "LPG가스", "문서/물품 서비스", "한의약품", "고속버스", "병원-기타", "면세점", "병원-대학/종합병원", "다단계", "상조서비스", "여객선", "대형마트", "아울렛", "자사가맹점", "전자상거래", "백화점", "교육단체", "택시", "유료도로", "제약회사", "버스/지하철", "홈쇼핑", "생명보험", "손해보험", "보훈매장", "통신요금", "해외사용", "월납/세금", "신차"
    ],
    datasets: [{
        type: 'bar',
        label: "2020 매출액 추정 손실 (단위:백만원)",
        backgroundColor: "rgba(51, 153, 255, 0.8)",
        borderColor: "rgba(51, 153, 255, 0.8)",
        data: [
            0.02, 0.18, 0.24, 0.25, 0.26, 0.32, 0.33, 0.37, 0.38, 0.4, 0.41, 0.41, 0.44, 0.47, 0.47, 0.51, 0.54, 0.55, 0.6, 0.6, 0.6, 0.62, 0.63, 0.65, 0.67, 0.7, 0.7, 0.71, 0.73, 0.77, 0.78, 0.79, 0.8, 0.8, 0.84, 0.86, 0.86, 0.86, 0.87, 0.88, 0.89, 0.89, 0.9, 0.9, 0.93, 0.96, 0.96, 0.96, 0.96, 1, 1, 1.01, 1.02, 1.03, 1.03, 1.05, 1.1, 1.13, 1.14, 1.15, 1.15, 1.16, 1.16, 1.17, 1.18, 1.2, 1.2, 1.22, 1.24, 1.25, 1.26, 1.26, 1.27, 1.28, 1.29, 1.31, 1.32, 1.32, 1.32, 1.33, 1.36, 1.4, 1.41, 1.42, 1.43, 1.44, 1.44, 1.47, 1.47, 1.48, 1.48, 1.49, 1.5, 1.54, 1.55, 1.56, 1.57, 1.58, 1.58, 1.58, 1.6, 1.61, 1.61, 1.61, 1.61, 1.63, 1.66, 1.66, 1.67, 1.67, 1.69, 1.73, 1.73, 1.73, 1.75, 1.76, 1.81, 1.83, 1.83, 1.83, 1.86, 1.89, 1.9, 1.91, 1.93, 1.94, 1.95, 1.96, 1.98, 2.01, 2.02, 2.02, 2.02, 2.15, 2.16, 2.16, 2.22, 2.26, 2.33, 2.33, 2.34, 2.35, 2.36, 2.39, 2.4, 2.41, 2.41, 2.42, 2.42, 2.45, 2.46, 2.46, 2.46, 2.55, 2.56, 2.59, 2.61, 2.61, 2.62, 2.63, 2.64, 2.7, 2.75, 2.75, 2.76, 2.83, 2.83, 2.84, 2.85, 2.87, 3, 3.01, 3.06, 3.07, 3.22, 3.23, 3.24, 3.33, 3.36, 3.36, 3.42, 3.44, 3.45, 3.47, 3.47, 3.49, 3.52, 3.56, 3.6, 3.64, 3.67, 3.67, 3.72, 3.73, 3.78, 3.79, 3.92, 3.93, 3.94, 3.98, 4.02, 4.04, 4.05, 4.07, 4.08, 4.08, 4.17, 4.19, 4.32, 4.36, 4.51, 4.55, 4.57, 4.57, 4.58, 4.6, 4.71, 4.79, 4.8, 4.81, 4.83, 4.87, 4.89, 5.04, 5.2, 5.2, 5.21, 5.26, 5.48, 5.52, 5.82, 5.84, 5.97, 6.03, 6.39, 6.55, 6.59, 6.74, 7.16, 7.31, 7.33, 7.35, 7.43, 7.7, 8.17, 8.35, 8.58, 8.77, 8.86, 9.32, 9.37, 9.54, 9.6, 9.77, 10.58, 11.71, 11.78, 12.01, 12.47, 12.53, 12.9, 13.06, 13.85, 13.95, 13.95, 14.48, 15.56, 16.12, 16.53, 17.05, 17.41, 19.54, 19.83, 21.16, 21.17, 21.24, 23.47, 23.68, 23.83, 24.5, 25.07, 25.82, 26.36, 26.77, 28.08, 30.64, 32.16, 32.74, 33.35, 36.6, 38.31, 38.96, 39.94, 40.71, 42, 50.91, 57.02, 57.84, 60.41, 61.39, 71.9, 85.84, 86.05, 87.1, 92.69, 93.3, 98.48, 121.1, 123.06, 123.18, 167.82, 179.73, 205.57, 207.28, 270.02, 301.26, 322, 346.55, 382.28, 453.84, 476.07, 523.9, 678.83, 726.34, 731.21, 736.94, 754.44, 772.82, 1068.84, 1142.51, 1445.59, 1613.01, 3152.47, 3250.63, 8172.82, 10648.2, 10770.17, 17864.81
        ],
        fill: false,
    },{
        type: 'line',
        label "2019 매출액 추정 손실 (단위:백만원)",
        backgroundColor: "rgba(255,153,0,0.9)",
        borderColor: "rgba(255,153,0,0.9)",
        data: [
            1.05, 0.3, 0.47, 0.24, 0.52, 0.23, 0.77, 0.34, 1.08, 0.4, 0.39, 0.59, 1.19, 0.5, 0.51, 0.52, 0.54, 1.02, 0.63, 1.17, 2.01, 0.68, 1.02, 1.14, 1.07, 0.39, 0.64, 0.73, 1.12, 1.14, 0.41, 0.82, 0.55, 3.81, 1.31, 0.87, 0.96, 1.02, 1.09, 0.43, 1.05, 3.73, 1.2, 1.33, 0.93, 0.78, 0.97, 1.54, 2.22, 0.97, 1.99, 1, 1.5, 1.79, 3.22, 1.16, 1.52, 0.97, 1.96, 1.26, 1.48, 0.69, 1.55, 1.7, 1.09, 0.88, 2.2, 0.55, 3.83, 1, 3.31, 3.84, 1.98, 1.64, 1.84, 1.9, 1.52, 1.86, 2.68, 2.61, 0.92, 2.91, 1.32, 16.06, 5.31, 0.88, 1.41, 2.28, 3.48, 1.98, 3.61, 1.66, 2.67, 1.54, 11.5, 3, 2.93, 1.33, 1.48, 2.98, 1.67, 0.72, 1.76, 3.2, 4.89, 0.18, 1.34, 1.8, 1.15, 2.8, 1.69, 1.65, 2.47, 3.19, 1.32, 1.81, 1.61, 1.07, 2.08, 3.62, 2.94, 1.64, 2.56, 2.36, 1.96, 2.3, 1.72, 3.36, 2.97, 1.94, 2.5, 2.99, 3.65, 3.17, 3.42, 7.49, 1.89, 2.92, 1.13, 4.16, 0.84, 2.97, 2.2, 2.74, 1.95, 1.38, 1.57, 2.52, 5.19, 3.34, 2.2, 2.4, 2.66, 3.13, 5.61, 2.48, 2.61, 27.84, 2.62, 2.01, 0.46, 5.24, 3.48, 3.6, 4.26, 2.29, 3.04, 1.66, 6.73, 4.38, 6.55, 3.02, 1.94, 3.64, 2.68, 3.87, 8.43, 3.21, 3.3, 5.1, 3.57, 2.62, 1.43, 2.39, 6.21, 2.84, 6.97, 4.15, 3.18, 4.34, 2.25, 5.69, 2.87, 3.63, 2.64, 3.97, 2.65, 2.54, 4.34, 2.65, 3.36, 4.35, 4.83, 3.5, 6.72, 21.26, 4.17, 4.21, 5.74, 3.62, 3.32, 4.45, 3.74, 4.97, 4.25, 4.42, 2.75, 2.55, 5.32, 8.11, 3.35, 3.19, 6.26, 7.21, 3.5, 5.24, 10.09, 4.06, 4.34, 4.49, 8.87, 7.81, 3.93, 4.86, 5.67, 5.02, 5.79, 4.17, 1.69, 5.55, 10.11, 6.4, 8.69, 7.77, 9.91, 11.26, 7.22, 16.1, 15.1, 9.44, 7.81, 10.28, 42.06, 8.41, 23.54, 6.11, 24.7, 2.94, 9.48, 20.61, 21.07, 11.57, 12.05, 12, 12.85, 1.96, 18.03, 6.01, 17.01, 14.65, 22.12, 16.65, 800.09, 17.06, 10.87, 14.13, 7.44, 16.85, 3.8, 19.8, 17.87, 21.25, 3.19, 53.63, 23.66, 9.98, 46.69, 27.6, 34.35, 16.25, 2.14, 4.96, 40.37, 66.84, 5.27, 93.32, 84.61, 21.32, 156, 53.21, 52.89, 182.27, 96.42, 20.07, 31.16, 66.58, 1.68, 74.41, 91.48, 683.08, 246.1, 1.91, 8.73, 89.54, 67.66, 223.46, 326.38, 1116.08, 386.21, 4.38, 403.86, 774.65, 642.86, 572.63, 1101.83, 635.36, 883.7, 183.77, 852.55, 2175.59, 1197.58, 1022.94, 3611.61, 2916.14, 5384.42, 3496.01, 9721.99, 12683.29
        ],
        fill: false,
    }],
};

var empty = {
    labels: [],
    datasets: [{
        data: [],
        fill: false,
    }],
};

// Bar Chart Example
var ctx = document.getElementById("ecoRevenueChart");
var ecoRChart_second = new Chart(ctx, {
  type: 'bar',
  data: ecoR1,
  options: options
});


var ctx = document.getElementById("ecoRevenueChart2");
var ecoRChart_third = new Chart(ctx, {
  type: 'bar',
  data: ecoR2,
  options: options
});

function btn_eco1R_click(){
    ecoRChart_second.data = ecoR1;
    ecoRChart_second.update();
    ecoRChart_third.data = ecoR2;
    ecoRChart_third.update();
    document.getElementById("textEcoGraph2").innerHTML = '업종별 영업이익 (2020, 2019)';
    document.getElementById("textEcoGraph3").innerHTML = '업종별 영업이익 (2020, 2018)';
}

function btn_eco2R_click(){
    ecoRChart_second.data = ecoR3_asc;
    ecoRChart_second.update();
    ecoRChart_third.data = ecoR4;
    ecoRChart_third.update();
    document.getElementById("textEcoGraph2").innerHTML = '연간 매출액 추정 손실액 (소분류)';
    document.getElementById("textEcoGraph3").innerHTML = '2019, 2020 매출액 추정 손실액 비교 (소분류)';
}

var ascdesc_flag = 1;

function btn_ascdesc_click(){
    ascdesc_flag = ascdesc_flag * -1;
    if (ascdesc_flag==-1){
        ecoRChart_second.data = ecoR3_desc;
        ecoRChart_second.update();
    }
    else {
        ecoRChart_second.data = ecoR3_asc;
        ecoRChart_second.update();
    }
}