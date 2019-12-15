# massimo 2 numeri
def maxNum(primo,secondo):
    if primo == secondo:
        print('I numeri sono identici')
    elif primo > secondo:
        print('Il numero più grande tra i due è ' + str(primo))
    else:
        print('Il numero più grande tra i due è ' + str(secondo))

#Main
#Input parametre per funzione
INprimoNumero = int(input("Primo numero  "))
INsecondoNumero = int(input("Secondo numero  "))
#Stampa il risultato della funzione
maxNum(INprimoNumero,INsecondoNumero)

#Stop
input()