import { eErrorCode } from '~/shared/enums'

const errorHelper = {
  getErrorExpect: () => {
    return [eErrorCode.Test]
  },
  getDefaultErrorMessage(code: number = 500): string {
    const errorMessages: Record<number, string> = {
      400: '잘못된 요청입니다.',
      401: '인증이 필요합니다.',
      403: '접근 권한이 없습니다.',
      404: '요청한 리소스를 찾을 수 없습니다.',
      500: '서버 내부 오류가 발생했습니다.',
      502: '게이트웨이 오류가 발생했습니다.',
      503: '서비스를 사용할 수 없습니다.'
    }
    return errorMessages[code] || '오류가 발생했습니다.'
  }
}

export default errorHelper
