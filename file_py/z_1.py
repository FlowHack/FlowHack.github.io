N = int(input())
K = int(input())
ans = 0
while K / N < 1 / 3:
    N += 1
    K += 1
    ans += 1
print(ans)
input()