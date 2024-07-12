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
    const titleName = document.querySelector("title").innerHTML;
    console.log(titleName);
    SalesforceInteractions.sendEvent({
        interaction: {
            name: titleName, //Schema의 interactionName에 해당
            euNo: 123456,
            loginType: "true",
            deviceType: window.navigator.userAgent,
            browserOsType: window.navigator.userAgent,
            eventType: "pageEntered",
            enteredlocation: window.navigator.language,
            enteredFullUrl: window.location.href,
            enteredPageDep2: "/depth2",
            enteredPageDep3: "/depth3",
            enteredPageDep4: "/depth4",
            //eventId, category, dateTime, deviceId, sessionId 자동 생성
        }
    });
});
