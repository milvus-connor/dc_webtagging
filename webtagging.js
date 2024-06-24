window.addEventListener('load', (event) => {
    const domain = window.location.hostname;
    console.log(domain);
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
    //수집 목록 중 방문 시 URL, 
    SalesforceInteractions.sendEvent({
        interaction: {
            name: "Entered Page",
            euNo: 123456,
            loginType: "true",
            deviceType: window.navigator.userAgent,
            browserOsType: window.navigator.userAgent,
            eventType: "childFundEntered",
            entered: {
                location: window.navigator.language,
                fullUrl: window.location.href,
                pageDep2: "/depth2",
                pageDep3: "/depth3",
                pageDep4: "/depth4",
            }
            //eventId, category, dateTime, deviceId, sessionId 자동 생성
        }
    });
    console.log("05:13ㄴ")
});
