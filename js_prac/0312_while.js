let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}
// output : 0, 1, 2 



i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
// output : 0, 1, 2


i = 4;
do {
  console.log(i);
  i++;
} while (i < 3);
// output : 4
// 조건이 false임에도 불구하고 최초 1회 수행함