lista1 = {'mela', 'pera', 'banana'}
lista2 = {'mela', 'pera', 'carota'}


def Stampa(lista):
	#Stampa ogni elemento della lista
	for e in lista:
		print(e)
print()

Stampa(lista1)
# Aggiungi un elemento alla lista
lista1.add('kiwi')
for e in lista1:
	print(e)
print()

#Metodo aggiorna
lista1.update(lista2)
for e in lista1:
	print(e)

print('Lunghezza lista: ', len(lista1))
print()