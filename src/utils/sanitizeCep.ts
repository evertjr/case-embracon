export function sanitizeCep(cep: string) {
  const sanitizedCep = cep.replace(/\D/g, '');
  return sanitizedCep;
}
