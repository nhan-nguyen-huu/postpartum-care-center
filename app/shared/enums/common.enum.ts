export enum eMode {
  View = 'VIEW',
  Add = 'ADD',
  Edit = 'EDIT'
}

export enum eContractStatus {
  Signed = 'SIGNED',
  Sent = 'SENT'
}

export enum eScheduleStatus {
  Consultation = 'CONSULATION',
  Reservation = 'RESERVATION',
  CheckIn = 'CHECK_IN',
  CheckOut = 'CHECK_OUT'
}

export enum eMembershipSummaryStatus {
  AllMembers = 'ALL_MEMBERS',
  CurrentlyCheckedIn = 'CURRENTLY_CHECKED_IN',
  WaitingForReservation = 'WAITING_FOR_RESERVATION',
  CheckedOutComplete = 'CHECKED_OUT_COMPLETE'
}
