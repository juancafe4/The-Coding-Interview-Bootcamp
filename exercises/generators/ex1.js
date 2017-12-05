function *numbers() {
  const result  = i + 1;

  return 20 + (yield result);
}

const generator = numbers();