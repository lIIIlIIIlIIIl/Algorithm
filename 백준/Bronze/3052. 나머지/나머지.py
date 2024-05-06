n = 10
a = 42
num = set()

for i in range(n):
    b = int(input())
    num.add(b%a)

print(len(num))