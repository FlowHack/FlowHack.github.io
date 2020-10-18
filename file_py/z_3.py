import sys
S = str(input())
if S == '9':
    print('11')
    sys.exit(0)
n = len(S)
S1 = S[:-(n // 2)] + S[:n // 2][::-1]
if S1 > S:
    print(S1)
    sys.exit(0)
n1  = (n + 1) // 2
n2 = n - n1
N = str(int(S[:n1]) + 1)
S2 = N + N[:n2][::-1]
print(S2)
input()