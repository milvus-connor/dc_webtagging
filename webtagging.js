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

    SalesforceInteractions.sendEvent({
        interaction: {
            name: "Entered Page",
            eventType: "childFundEntered",
            entered: {
                fullUrl: window.location.href,
            }
        }
    });
    console.log("HI")
});
