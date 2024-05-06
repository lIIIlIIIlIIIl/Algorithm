n, m = list(map(int, input().split()))

li = [0] * (n+1)

for i in range(m):
    i, j, k = list(map(int, input().split()))
    for s in range(i, j+1):
        li[s] = k

print(' '.join(map(str, li[1:])))