export interface User {
  id?: number,
  full_name?: string,//Para recibir
  fullName?: string,//Para envíar
  document_type?: string,//Para recibir
  documentType?: string,//Para envíar
  document?: string,
  address?: string,
  city?: string,
  phone_number?: string,//Para recibir
  phoneNumber?: string,//Para envíar
  credentialId?: string,//Para recibir email
  email?: string,//Para enviar
  password?: string,
}
