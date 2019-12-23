#Dato il vettore restituisce la posizione indice dell'elemento da trovare
#Se non trova l'elemento restituisce '-1'

array = [10, 50, 5, 8, 7, 12, 156] 

x = int(input('Numero da trovare > '))

output = -1

def Trova():
	try:
		print(array.index(x))
	except:
		print(output)
