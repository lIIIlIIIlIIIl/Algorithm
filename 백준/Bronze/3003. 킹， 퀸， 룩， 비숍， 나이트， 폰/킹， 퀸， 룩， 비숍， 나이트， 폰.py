white_chess = {
    'k' : 1,
    'q' : 1,
    'l' : 2,
    'v' : 2,
    'n' : 2,
    'p' : 8
}

chess = ['k', 'q', 'l', 'v', 'n', 'p']
count = list(map(int, input().split()))
result = []

for i in range(len(count)):
    peace = white_chess[chess[i]] - count[i]
    result.append(peace)

print(*result) 