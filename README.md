# Prj_finance_mydata_web
데이터 공모전 제출용 홈페이지 
  
## :computer: Used
- R
- 태블로
- Spring
- HTML
- CSS
- Javascript
- HFS (서버)

## :+1: Achievement
1) 공모전 제출


## :memo: Summary
**(1) 주제**  
![image](https://user-images.githubusercontent.com/40004210/133216717-93a1c444-ca69-4423-be3b-08895124dc20.png)  
전염병으로 경제 피해를 받은 소상공인 및 자영업자를 위한 보험료 산출 방안을 제시한다. 상권변화, 바이러스, 임대료를 각각 등급으로 구분하고 상인별 보험료를 차등 지원한다.

**(2) 분석 배경**  
현재 코로나-19 전염병 대유행으로 국내 경제 성장률이 하락세이다. 이는 자영업자 및 소상공인의 매출 감소에 영향을 미치고 있다. 따라서 상인에게 최소한의 경제적 안전 장치를 마련하고자 '전염병(바이러스) 보험료 산출 모델' 구축을 목표로 한다.

**(3) 아이디어 제안**  
![image](https://user-images.githubusercontent.com/40004210/133223197-e7ea5aca-b0c3-483f-ad52-33cb3121de67.png)  
본 '전염병(바이러스) 보험료 산출 모델'은 상인의 업종, 매장 위치, 매출액 등 여러 상황을 종합하고 적합한 월간 보험료를 제시한다. 모델 프로세스는 다음과 같다. 상인 개인의 상권변화(유동인구), 임대료, 전염병 데이터가 입력되면 보험료 등급이 선정되고 보험료율을 측정한다. 최종적으로 보험료율은 업종별 매출액 추정 손실 데이터와 계산되어 월간 보험료를 산출하게 된다.

**(4) 모델 범위 설정**    
본 '전염병(바이러스) 보험료 산출 모델'은 경제 피해 정도에 따라 업종별로 보험료를 차등 지원한다. 또한 전염병 이후 평균 연간 매출액이 48.5% 감소한 경우를 고려하며, 지역은 서울특별시 행정동으로 구분한다.

**(5) 데이터 설명 및 예시**    
![image](https://user-images.githubusercontent.com/40004210/133217056-2d1d54b4-d99e-441f-a4d5-a78bf0380456.png)    
상권변화, 바이러스, 임대료 데이터의 설명은 위 그림과 같다.

![image](https://user-images.githubusercontent.com/40004210/133217159-701ea184-027b-4b3e-8ff5-158702a9ede1.png)   
한 예로 서울특별시 화곡 1동에서 일식집에 종사하고 있는 상인의 보험료 산출 방식은 위와 같다.   

## :mag: Content
**- 메인 홈페이지**  
![image](https://user-images.githubusercontent.com/40004210/133217324-e27f0eee-343c-480d-a8f1-7fd881078eb7.png)  
공공데이터 오픈 API를 이용하여 코로나 확진자 데이터(일별, 월별, 자치구별)를 사용자에게 보여준다.  

**- 경제피해**   
![image](https://user-images.githubusercontent.com/40004210/133217604-1e3b1ae0-ae5f-467c-a74c-ba8383ca6f1b.png)  
코로나 전후로 중소기업 업종별로 구분한 영업이익/매출액 데이터를 표로 보여준다.  

**- 유동인구**  
![image](https://user-images.githubusercontent.com/40004210/133217773-6e45a86c-f61d-44a0-825e-aa98ae92089e.png)  
코로나 전염병의 3번의 유행 시기에 따라 서울 기준 2019년부터 2021년 유동인구 데이터를 보여준다.  

**- 바이러스 정보**  
![image](https://user-images.githubusercontent.com/40004210/133217938-c4c8774d-8a3b-4d7b-9644-b3e4eb54ef19.png)  
해당 전염병에 대한 정보를 그래프로 분석하고 값을 조절하여 위험도를 예측할 수 있다.

**- 보험료 산출**  
![image](https://user-images.githubusercontent.com/40004210/133218319-b342ca41-f315-48c5-b785-414df3ddc2d8.png)  
최종적으로 상인마다 직종, 매장 위치, 임대료 등의 개인 데이터를 이용하여 적합한 보험료를 산출하고 타인과 비교할 수 있다.

## :clipboard: Result
**- 개인적 측면**    
(1) 상인은 보험 모델로 본인의 상황에 따라 보험료를 산출하고 경제 안정을 취할 수 있다.  
(2) 상인은 홈페이지를 통해 본 모델에 쉽게 접근할 수 있으며 시각화된 유동인구, 업종별 매출액과 영업이익 등 데이터를 통해 동일 업종의 상인들과 비교 분석할 수 있다.  
**- 사회적 측면**    
(1) 전염병으로 발생하는 경제 피해에 대해 소상공인ㆍ자영업자에게 경제적 안전을 제공할 수 있다.  
(2) 추후에 코로나가 아닌 다른 감염병의 피해에도 상인의 경제안전자금을 지원하여 상권유지를 가능하도록 도울 수 있다.  
