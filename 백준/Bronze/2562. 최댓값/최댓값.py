li = []

for i in range(9):
    li.append(int(input()))

li_max = max(li)
li_index = li.index(li_max)

print(li_max)
print(li_index+1)