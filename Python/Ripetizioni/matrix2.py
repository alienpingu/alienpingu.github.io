# Variabili
matrix = [0,1,2,3],
		[4,5,6,7],
		[8,9,10,11],
		[12,13,14,15]

# Funzioni

def trovaNum(matrice):
	riga = 0 #riga della matrice 0
	colonna = 0 #colonna della matrice 0
	trovaN = int(input('Numero da trovare > ')) #Richiedi numero da trovare
	for lista in matrice: #Per ogni riga nella matrice
		riga = int(riga) + 1 # incrementa il valore della riga 
		colonna = 0 #la colonna della matrice è uguale a 0
		for num in lista: #Per ogni numero della riga (lista) esegue...
			colonna = int(colonna) + 1 # incrementa il valore della colonna 
			if (num == trovaN): #Se il numero sotto analisi è equivalente al numero da trovare:
				print('Colonna: ' + str(riga),'Riga: ' + str(colonna)) #Stampa riga e colonna

#Funzione di stampa per ogni elemento della matrice
#Acquisice la riga, la colonna e il numero per stamparli formattati
def Stampa(matrice): 
	riga = 0 #riga della matrice 0
	col = 0 #colonna della matrice 0
	for lista in matrice: #Il ciclo for esegue per ogni riga della matrice le istruzioni
		riga = int(riga) + 1 # incrementa il valore della riga 
		col = 0   #la colonna della matrice è uguale a 0
		for num in lista: #Per ogni numero della riga (lista) esegue...
			col = int(col) + 1 # incrementa il valore della colonna 
			print('Colonna: ' + str(riga),'Riga: ' + str(col), 'Numero: ' + str(num)) #Stampa variabili acquisite


# Main
Stampa(matrix) 
print('')
trovaNum(matrix)




#Stop
input()