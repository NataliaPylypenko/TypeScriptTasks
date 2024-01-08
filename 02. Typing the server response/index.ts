interface IPayment {
    "sum": number,
    "from": number,
    "to": number
}

enum IPaymentStatus {
    Sucsess = "success",
    Failed = "failed",
}

interface IDataSuccess extends IPayment {
    "databaseId": number,
}

interface IDataFailed {
    "errorMessage": string,
    "errorCode": number
}

interface IPaymentRequesr extends IPayment {}

interface IPaymentResponseSucsess {
    "status": IPaymentStatus.Sucsess,
    "data": IDataSuccess
}

interface IPaymentResponseFailed {
    "status": IPaymentStatus.Failed,
    "data": IDataFailed
}