export interface User {

  id: number;
  name: string;
  username: string;
  password: string;
  isActive: boolean;
  authority: Authority;

}

export interface Authority {

  id: number;
  name: string;
}
