export class ApiResponse{
  result!: boolean;
  data!: Object;
  code!: string;

  constructor(result: boolean, data: Object, code: string) {
    this.result = result;
    this.data = data;
    this.code = code;
  }
}
