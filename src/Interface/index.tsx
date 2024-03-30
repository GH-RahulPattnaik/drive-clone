/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface Button {
  btnClass?: string;
  title: string;
  onClick?: (event: React.FormEvent) => void;
}

interface Progress {
  progress: number;
}

interface AuthInteface {
  clientId: string;
  clientSecret: string;
}

interface ArrayType {
  map: Function;
}

interface FolderStructure {
  parentId: string;
  ownerEmail: string;
}
