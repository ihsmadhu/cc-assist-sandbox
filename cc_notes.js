window.CC_NOTES = [
  { keyword:/SBN20[1-9]/i, note:"SBN201 - SBN209 should be reassigned to neerajpm", type:'sbn', group:'SBN' },
  { keyword:"Architect/Engineer", note:"Architect/Engineer tasks need to be reassigned to DCPROS", type:'special', group:'Special' },
  { keyword:"Quantity Surveying", note:"Quantity Surveying tasks should be processed with QTY swap update.", type:'special', group:'Special' },
  { keyword:"PDX", note:"PDX Construction POs need actual requester kkbnhn before submission.", type:'general', group:'General Construction' },
  { keyword:"PDT", note:"PDT Construction POs need actual requester kkbnhn before submission.", type:'general', group:'General Construction' },
  { keyword:"ROMP", note:"ROMP POs need kkbnhn as requester.", type:'general', group:'General Construction' },
  { keyword:"SHELL", note:"SHELL POs need kkbnhn as requester.", type:'general', group:'General Construction' },
  { keyword:"SITE", note:"SITE POs need kkbnhn as requester.", type:'general', group:'General Construction' },

  ...["LHR","DUB","SYD","MEL","NRT","ZAZ","FRA","ARN","MXP","CPT","TLV","RUH","SIN","BOM","HYD","CGK","BKK","TBE","MNL","CRK","SGN","ICN","KUL","HKG","AKL","BCN","BAH","DXB","AUH","ZRH","CDG"]
    .map(loc=>({ keyword: new RegExp(`\\b${loc}(?:\\d{2,3})?\\b`, 'i'), note: `${loc} Construction POs need Erigo account code`, type:'erigo', group:'General Construction (Erigo)' })),

  ...["ALE","LTW","FFZ","NCL"]
    .map(loc=>({ keyword: new RegExp(`\\b${loc}(?:\\d{2,3})?\\b`, 'i'), note: `${loc} should not be processed with Erigo.`, type:'noerigo', group:'General Construction (No Erigo)' }))
];
