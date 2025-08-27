// cc_notes.js
// Notes configuration for CC Assist Sandbox
// Grouped and consistent format for easier maintenance

window.CC_NOTES = [

  // ================= SBN =================
  {
    keyword: /SBN20[1-9]/i,
    note: "SBN201 - SBN209 should be reassigned to neerajpm",
    type: 'sbn',
    group: 'SBN'
  },

  // ================= Special =================
  {
    keyword: "Architect/Engineer",
    note: "Architect/Engineer tasks need to be reassigned to DCPROS to inquire whether CO# can be an add funds",
    type: 'special',
    group: 'Special'
  },
  {
    keyword: "Quantity Surveying",
    note: "Quantity Surveying tasks should be processed with QTY swap update.",
    type: 'special',
    group: 'Special'
  },

  // ================= General Construction =================
  {
    keyword: "PDX",
    note: "PDX Construction POs need to be edited to actual requester from kkbnhn before performing CO# request submission.",
    type: 'general',
    group: 'General Construction'
  },
  {
    keyword: "PDT",
    note: "PDT Construction POs need to be edited to actual requester from kkbnhn before performing CO# request submission.",
    type: 'general',
    group: 'General Construction'
  },
  {
    keyword: "ROMP",
    note: "General Construction POs like ROMP need to be processed with kkbnhn as requester.",
    type: 'general',
    group: 'General Construction'
  },
  {
    keyword: "SHELL",
    note: "General Construction POs like SHELL need to be processed with kkbnhn as requester.",
    type: 'general',
    group: 'General Construction'
  },
  {
    keyword: "SITE",
    note: "General Construction POs like SITE need to be processed with kkbnhn as requester.",
    type: 'general',
    group: 'General Construction'
  },

  // ================= Erigo Sites =================
  ...["LHR","DUB","SYD","MEL","NRT","ZAZ","FRA","ARN","MXP","CPT","TLV","RUH","SIN","BOM","HYD","CGK","BKK","TBE","MNL","CRK","SGN","ICN","KUL","HKG","AKL","BCN","BAH","DXB","AUH","ZRH","CDG"]
    .map(loc => ({
      keyword: new RegExp(`\\b${loc}(?:\\d{3})?\\b`, 'i'),
      note: `${loc} Construction POs need to be processed with Erigo account code`,
      type: 'erigo',
      group: 'General Construction (Erigo)'
    })),

  // ================= No-Erigo Sites =================
  ...["ALE","LTW","FFZ","NCL"]
    .map(loc => ({
      keyword: new RegExp(`\\b${loc}(?:\\d{3})?\\b`, 'i'),
      note: `${loc} should not be processed with Erigo.`,
      type: 'noerigo',
      group: 'General Construction (No Erigo)'
    })),

  // ================= Site Codes (catch-all) =================
  {
    keyword: /\b[A-Z]{3}\d{2,3}\b/,
    note: "Site code detected",
    type: 'general',
    group: 'Site Codes'
  }
];


