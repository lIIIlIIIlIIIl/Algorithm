n, m = map(int, input().split())

baskets = list(range(1, n+1))

for _ in range(m):
    start, end = map(int, input().split())
    start -= 1
    end -= 1
    baskets[start:end+1] = reversed(baskets[start:end+1])

print(*baskets)