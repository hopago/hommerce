export default function isEmail(searchTerm: string) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(searchTerm);
}
