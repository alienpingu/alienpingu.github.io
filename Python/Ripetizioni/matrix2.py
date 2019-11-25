#Una matrice è una lista di liste
matrix = [0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]

#Trova Numero nella matrice
def trovaNum(z):
	n = 0
	m = 0
	x = int(input('Numero da trovare > '))
	for l in z:
		n = int(n) + 1
		m = 0
		for num in l:
			m = int(m) + 1
			if (num == x):
				print('Colonna: ' + str(n),'Riga: ' + str(m))

#Stampa tutti i numeri
def Stampa(z):
	n = 0
	m = 0
	for lista in z:
		n = int(n) + 1
		m = 0
		for num in lista:
			m = int(m) + 1
			print('Colonna: ' + str(n),'Riga: ' + str(m), 'Numero: ' + str(num))


#Main
print('----------GESTORE MATRICI-----------')
print('1 -> Cerca un numero nella matrice')
print('2 -> Stampa tutti i numeri')
print('------------------------------------')
i = int(input('> '))
if (i == 1):
	trovaNum(matrix)
elif (i == 2):
	Stampa(matrix)
else:
	print('Valore non valido')

#Stop
input()