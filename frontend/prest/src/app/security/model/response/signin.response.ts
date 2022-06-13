import {Dto} from "@common/Dto";
import {CredentialDto, TokenDto} from "../dto";

export interface SigninResponse extends Dto {
  user: CredentialDto;
  token: TokenDto;
}
