function solution(phone_number) {
  let number = phone_number.slice(-4);
  let asterisk_count = phone_number.length - 4;
  return "*".repeat(asterisk_count) + number;
}
