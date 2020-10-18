N = int(input())
K = int(input())
solved = 0
day = 0
while solved < N:
    solved += K
    K += 1
    day += 1
print(day)
input()