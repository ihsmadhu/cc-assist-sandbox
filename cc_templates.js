// cc_templates.js
// Templates configuration for CC Assist Sandbox
// Grouped and consistent format

window.CC_TEMPLATES = {

  // ================= PR Status =================
  'PR Status': {
    'PR Submitted': `Hi all,

PR Submitted : [PR_LINK]
Approval link : [APPROVAL_LINK]
Approval pending with [TO]

PO will be placed post completion of Finance approval and you will be notified via an email with PO number. 
Please use the PR link to view the PO number & download it as pdf. 

If there are any delay in receiving the PO, please update the status of this "Create PR" task to "In Progress" 
by clicking the Edit button on top, and we will address the issue ASAP.

Thanks.`,

    'Auto Approved': `Hi all,

PR submitted : [PR_LINK]
Approval link : [APPROVAL_LINK]
Auto approved.

Thanks.`,

    'New PO Draft': `Hi all,

The system requires a new PO to be drafted for this phase : [PHASE]
Approval link : [APPROVAL_LINK]
Auto approved.

Thanks.`
  },

  // ================= Issues & Queries =================
  'Issues & Queries': {
    'Add Funds Query': `Hi all,

Previous CO# has been funded by same CAR "[CAR]". 
But in Keyterms "Is this Change Order adding funds to an existing PO?" given as "No".

Would you please check and confirm whether this CO# can be an add funds request?

Thanks.`,

    'Site Not Onboarded': `Hi all,

Site [Site ID] has not been on-boarded to SCOS/ CFR yet. 
Please refer the below Wiki link and let us know when the site is on-boarded:
https://w.amazon.com/bin/view/Delivery_Management/Global_Government_Regions/New_Region_Site_Setup#H229CreateSiteCodesinChartofAccounts28COA29

Thanks,`,

    'CAR Short Funds': `Hi all,

CAR "[CAR]" is short on funds in the 'CapEx - Construction' line. 
This is the amount available $ and this is the amount requested $.

Please see the Reallocate CAR funds template:
https://approvals.amazon.com/Template/Details/31234

Thanks.`,

    'FRU Issue': `Flex team does not have visibility on the selection/assignment of Finance approval. 
We do not have access to modify the assigned Finance approval. 

The Finance team manages their Finance Root User (FRU) assignments in SC.os. 
SC.os selects the assigned FRU based on the PR Department/Cluster/Site/OpEx-CapEx Selection/CAR type. 

Please contact your Finance partner to discuss this FRU issue.`,

    'Incorrect Approver': `Hi all,

This PR has been cancelled due to incorrect approver setup.

Please check with agrminal@ which Finance person needs to approve this scope 
or which cost center this needs to be routed to.

Thanks.`,

    'Truncated Approval': `Hi all,

This PR has been rejected due to a "truncated approval" issue in CloudForge. 
We do not have access to edit the Truncated approval option.

Please contact the BOPS team to resolve this. 
Once fixed, we can proceed with PR resubmission.

Thanks.`
  },

  // ================= Task Actions =================
  'Task Actions': {
    'Reassign Task': `Hi all,

Since the contract is still pending with the supplier, we are reassigning the "Create PR" task to your name. 

When the contract is executed and the task is ready for PR creation, 
please reassign the "Create PR" task back to [OPERATOR] so we may process the PR.

How to assign back:
1. Click on "Create PR" task.
2. Under the Assigned To section, click Person. Then select Task Assignee.
3. Click Save.

Regards,`,

    'Zero CO Cancel': `Hi all,

This is a Zero Change order. No PR is required. 
I am cancelling the task now.

Thanks.`,

    'Negative CO Cancel': `Hi all,

This is a Negative Change order. No PR is required. 
I am cancelling the task now.

Thanks.`
  },

  // ================= Special Cases =================
  'Special Cases': {
    'RFO CAR Message': `PO issuance freeze between 6/19–6/25 for RFO CARs in order for Sc.os to perform backfill activities. 
Reassigning the task to DC-PROs.`,

    'CAR Closed': `Hi all,

CAR [CAR] is closed. 
Please see the CAR reopen template:
https://approvals.amazon.com/Template/Details/31228

Thanks.`,

    'Lease Cancellation': `Hi all,

According to Bob Jenkins - "This request is for a lease. DC-PROS doesn't handle leases. 
It may need to go to Courtney Doll - codoll@. She handles EMEA PAM."

Hence cancelling this task.

Regards,`
  }
};
