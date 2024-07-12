window.addEventListener('load', (event) => {
    const domain = window.location.hostname;
    SalesforceInteractions.init({
        cookieDomain: domain,
        consents: [{
            provider: 'ChildFund',
            purpose: SalesforceInteractions.ConsentPurpose.Tracking,
            status: SalesforceInteractions.ConsentStatus.OptIn
        }]
    })
    SalesforceInteractions.setLoggingLevel(5);

    //특정 이벤트에 해당될 때 사용
    //아래 예시는 페이지 방문이 일어났을 때, Schema 기반으로 고객 행동 정보 수집
    //모든 데이터 String Type
    //페이지 진입 시
    SalesforceInteractions.sendEvent({
        interaction: {
            eventType: "pageEntered",
            name: "방문페이지 Title", //Schema의 interactionName에 해당 //페이지 Title 정보 입력
            euNo: "123456", //고객 EU_NO
            fullUrl: window.location.href,
            pageDep2: "/depth2",
            pageDep3: "/depth3",
            pageDep4: "/depth4",
            //eventId, category, dateTime, deviceId, sessionId 자동 생성
        }
    });
    
    //로그인 완료 시
    document.querySelector(".login").addEventListener("click", () => {
        SalesforceInteractions.sendEvent({
            interaction: {
                eventType: "loginComplete",
                name: "login", //Schema의 interactionName에 해당
                euNo: "123456", //고객 EU_NO
                loginType: "naver", //로그인 타입
                deviceType: "PC", //로그인 기기
                browserOs: "Chrome", //로그인 브라우저
                location: "KR" //로그인 지역
                //eventId, category, dateTime, deviceId, sessionId 자동 생성
            }
        });
    });
});
