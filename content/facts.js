window.LFS_FACTS = {
  siteMeta: {
    name: 'Leaving the Forces in Scotland',
    canonicalBase: 'https://leaving-forces-scotland.netlify.app',
    operatedBy: 'AI Scotland Productions',
    contentLastReviewed: '2026-05',
    linksChecked: '2026-05',
    sourcesDecision: 'repo-only pending Sink decision',
    domainDecision: 'reserved for Sink'
  },
  noMonetisation: {
    ads: false,
    affiliates: false,
    sponsorship: false,
    leadGeneration: false,
    paidPlacement: false
  },
  contacts: {
    combatStress: { label: 'Combat Stress', phone: '0800 138 1619', href: 'tel:08001381619', availability: '24/7', review_by: '2027-01-25', disposition: 'pending_phone_check' },
    breathingSpace: { label: 'Breathing Space', phone: '0800 83 85 87', href: 'tel:0800838587', availability: '6pm-2am weekdays, 24hr weekends', review_by: '2027-01-25', disposition: 'pending_phone_check' },
    veteransUK: { label: 'Veterans UK', phone: '0808 1914 218', href: 'tel:08081914218', availability: 'Monday to Friday', review_by: '2027-01-25', disposition: 'pending_phone_check' },
    samaritans: { label: 'Samaritans', phone: '116 123', href: 'tel:116123', availability: 'free, 24/7', review_by: '2027-01-25', disposition: 'pending_phone_check' },
    nhs24: { label: 'NHS 24', phone: '111', href: 'tel:111', availability: '24/7', review_by: '2027-01-25', disposition: 'pending_phone_check' },
    emergency: { label: 'Emergency', phone: '999', href: 'tel:999', availability: 'emergency only', review_by: '2027-01-25', disposition: 'pending_phone_check' }
  },
  scripts: {
    housing: { claim_id: 'housing-homeless-application', quote: 'I am making a homeless application. My armed forces service counts toward residence under the Housing (Scotland) Act 2010.', context: 'Say this at any Scottish council. You do not need an address to apply.', disposition: 'pending' },
    gp: { claim_id: 'gp-veterans-recognition', quote: 'I am a veteran. I would like my veteran status flagged on my NHS Scotland record. I would also like to know if this practice is part of the GP Veterans Recognition Scheme.', context: 'Say this at your GP surgery. It makes your service history visible before referrals or assessments are made.', disposition: 'pending' },
    adp: { claim_id: 'adp-statements', quote: 'I am applying for Adult Disability Payment. I am a veteran and my condition is service-related. I would like to speak to a veteran-aware adviser.', context: 'Use this with Social Security Scotland. It asks for your application to be understood in a veteran-aware context.', disposition: 'pending' },
    pension: { claim_id: 'afps-pension-forecast', quote: 'I would like a pension forecast for my service. My service number is [your number]. I served under [AFPS 75 / AFPS 05 / AFPS 15].', context: 'Use this with Veterans UK. Have your service number ready before you call 0808 1914 218.', disposition: 'pending_phone_check' },
    compensation: { claim_id: 'compensation-disregard', quote: 'My Armed Forces Compensation Scheme payment and/or War Pension must be fully disregarded as income in any means-tested benefit calculation. This is a legal requirement. Please confirm you are applying this.', context: 'Use this with benefits advisers or local authorities if compensation is being counted as income.', disposition: 'pending' },
    covenant: { claim_id: 'covenant-duty-2026', quote: 'I am a veteran and I am asking you to apply the Armed Forces Covenant duty to my case. If you are unable to do this, please tell me your complaints procedure.', context: 'Use this with a public body that is not recognising the effect of service on your case.', disposition: 'pending' }
  },
  volatileFacts: [
    // === 6-month cadence: named services, phone numbers, scheme-status, health routes ===
    // These are the facts that failed tonight — services close, numbers change, schemes evolve.
    { id: 'combat-stress-phone', risk: 'phone-number', review_by: '2027-01-25', disposition: 'pending_phone_check', register: 'content-citation-register.md', note: '24/7 veterans mental health. Dial and confirm hours.' },
    { id: 'breathing-space-phone', risk: 'phone-number', review_by: '2027-01-25', disposition: 'pending_phone_check', register: 'content-citation-register.md', note: '6pm-2am weekdays, 24hr weekends. Dial and confirm.' },
    { id: 'samaritans-phone', risk: 'phone-number', review_by: '2027-01-25', disposition: 'pending_phone_check', register: 'content-citation-register.md', note: '116 123, 24/7. Confirm free from all networks.' },
    { id: 'nhs24-phone', risk: 'phone-number', review_by: '2027-01-25', disposition: 'pending_phone_check', register: 'content-citation-register.md', note: '111. Confirm routing.' },
    { id: 'veterans-uk-phone', risk: 'phone-number', review_by: '2027-01-25', disposition: 'pending_phone_check', register: 'content-citation-register.md', note: '0808 1914 218, Mon-Fri. Dial and confirm.' },
    { id: 'shelter-scotland-phone', risk: 'phone-number', review_by: '2027-01-25', disposition: 'pending_phone_check', register: 'content-citation-register.md', note: '0808 800 4444. New entry — housing advice helpline.' },
    { id: 'v1p-coverage-by-board', risk: 'health-route', review_by: '2027-01-25', disposition: 'pending', register: 'content-citation-register.md', note: 'Board-level funding in flux. V1P Lothian defunded. Verify which boards still operate V1P and what numbers they use.' },
    { id: 'valour-status', risk: 'scheme-status', review_by: '2027-01-25', disposition: 'pending', register: 'content-citation-register.md', note: 'VALOUR Round 1 SSAFA announced March 2026. Check for Round 2 and current recognised centres.' },
    { id: 'visin-hosting-referral', risk: 'health-route', review_by: '2027-01-25', disposition: 'pending', register: 'content-citation-register.md', note: 'Programme ownership/referral may change.' },
    { id: 'gp-veterans-recognition', risk: 'health-route', review_by: '2027-01-25', disposition: 'pending', register: 'content-citation-register.md', note: 'Service scope may vary by practice/board.' },
    { id: 'lgbt-financial-recognition-scheme', risk: 'scheme-status', review_by: '2027-01-25', disposition: 'pending', register: 'content-citation-register.md', note: 'Official scheme opened Dec 2024; status may change.' },
    { id: 'veterans-mental-health-pathway', risk: 'scheme-status', review_by: '2027-01-25', disposition: 'pending', register: 'content-citation-register.md', note: 'Expected to launch in 2026. Watch-note.' },

    // === 12-month cadence: legislative provisions, framework-level facts, stable mechanisms ===
    // These change by statute or budget cycle, not by service closure.
    { id: 'housing-nov-2022-position', risk: 'legislative', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md', note: 'Local connection referral between Scottish councils ended 29 Nov 2022. Verify not superseded.' },
    { id: 'housing-act-2010-s156', risk: 'legislative', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md', note: 'Armed forces service counts toward residence. Legislative, stable.' },
    { id: 'compensation-disregard-uc', risk: 'legal-benefits', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'compensation-disregard-hb', risk: 'legal-benefits', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'compensation-disregard-ctr-scotland', risk: 'legal-benefits', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'afcs-time-limit', risk: 'legal-deadline', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'covenant-duty-2026', risk: 'statutory-duty', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'afps75-deferred-age', risk: 'pension', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'afps05-deferred-age', risk: 'pension', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'afps15-deferred-age', risk: 'pension', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'edp-18-under-55', risk: 'pension', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'adp-replaced-pip', risk: 'benefits', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'adp-transfer-handling', risk: 'benefits', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'adp-components', risk: 'benefits', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'adp-income-savings-work', risk: 'benefits', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md' },
    { id: 'uc-taper-rate-mechanism', risk: 'benefits', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md', note: '55% taper, stable since Nov 2021. Check after any Budget.' },
    { id: 'council-employability-route', risk: 'framework', review_by: '2027-07-25', disposition: 'pending', register: 'content-citation-register.md', note: 'No One Left Behind framework. Could change with new strategic plan.' },
  ],
  printStages: {
    'still-serving': { label: 'Still serving or just left', documents: ['Service number', 'Discharge papers / Certificate of Service', 'Service medical records', 'Pension statement', 'NI number', 'Bank account details', 'Evidence of service-related conditions or injuries'] },
    'recently-left': { label: 'Recently left', documents: ['Service number', 'Discharge papers if available', 'NI number', 'Bank statements from the last 3 months', 'Benefits letters or UC reference number', 'Tenancy documents or housing correspondence', 'Evidence of any service-related condition'] },
    'left-a-while-ago': { label: 'Left a while ago', documents: ['Service number', 'Discharge papers if available', 'NI number', 'Existing benefits letters', 'Medical evidence for any unclaimed service-related condition', 'Details of any compensation already received'] }
  }
};
