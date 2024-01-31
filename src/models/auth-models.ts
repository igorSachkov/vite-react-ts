interface IIsSuccess {
  isSuccess: boolean;
}

interface ISuccessRequestResult extends IIsSuccess {
  isSuccess: true;
}

export interface IDeniedRequestResult extends IIsSuccess {
  isSuccess: false;
  errorMessage: string;
}

export type RequestResult = ISuccessRequestResult | IDeniedRequestResult;
