n = int(input())
A = [str(input()) for i in range(n)]
maxcount = 0
maxval = 0
for i in range(n):
    if A.count(A[i]) > maxcount:
        maxcount = A.count(A[i])
        maxval = A[i]
A = [maxval] * maxcount + sorted(elem for elem in A if elem != maxval)
B = [0] * n

j = 0
for i in range(0, n, 2):
    B[i] = A[j]
    j += 1

for i in range(1, n, 2):
    B[i] = A[j]
    j += 1

for j in range(1, n):
    if B[j] == B[j - 1]:
        print(0)
        break
    else:
        print(" ".join(B))
input()