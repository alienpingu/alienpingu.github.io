#Funzione con passaggio
def somma(x,y):
	s = x + y
	return s
#Main
print('Primo numero')
a = int(input('>'))
print('Secondo numero')
b = int(input('>'))
z = somma(a,b)
print(z)

print('Primo numero')
c = int(input('>'))
print('Secondo numero')
d = int(input('>'))
i = somma(c,d)
print(i)
#Stop
input()