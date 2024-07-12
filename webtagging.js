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
            name: titleName, //Schema의 interactionName에 해당 //페이지 Title 정보 입력
            eventType: "pageEntered",
            euNo: "123456", //고객 EU_NO
            loginType: "true", //
            deviceType: window.navigator.userAgent,
            browserOsType: window.navigator.userAgent,
            entered: {
                location: window.navigator.language,
                fullUrl: window.location.href,
                pageDep2: "/depth2",
                pageDep3: "/depth3",
                pageDep4: "/depth4"
            }
            // enteredlocation: window.navigator.language,
            // enteredFullUrl: window.location.href,
            // enteredPageDep2: "/depth2",
            // enteredPageDep3: "/depth3",
            // enteredPageDep4: "/depth4",
            //eventId, category, dateTime, deviceId, sessionId 자동 생성
        }
    });

    //페이지 진입 시
    // SalesforceInteractions.sendEvent({
    //     interaction: {
    //         eventType: "pageEntered",
    //         name: titleName, //Schema의 interactionName에 해당 //페이지 Title 정보 입력
    //         euNo: 123456, //고객 EU_NO
    //         enteredFullUrl: window.location.href,
    //         enteredPageDep2: "/depth2",
    //         enteredPageDep3: "/depth3",
    //         enteredPageDep4: "/depth4",
    //         //eventId, category, dateTime, deviceId, sessionId 자동 생성
    //     }
    // });

    //로그인 성공 시
});
