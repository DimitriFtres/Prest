import {Dto} from "@common/Dto";

export interface CredentialDto extends Dto {
  actif: true,
  credential_id: number;
  email: string;
  password: string;
}
