#include "stdio.h"

int func(int a) { return a + 1; }
int func(char b) { return 4; }

int main() { printf("%d %d", func(1), func('a')); }
// saída: 2 4