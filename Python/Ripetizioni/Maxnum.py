# massimo 2 numeri
def maxNum(a,b):
    if a == b:
        print('I numeri sono identici')
    elif a > b:
        print('Il numero più grande tra i due è ' + str(a))
    else:
        print('Il numero più grande tra i due è ' + str(b))

#Main
n = int(input("Primo numero  "))
m = int(input("Secondo numero  "))
print(maxNum(n,m))

#Stop
input()