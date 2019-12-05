#Dichiarazione oggetti
#I poligoni sono oggetti, hanno come parametri il lato e come parametro interno il nome del poligono
class Quadrato:
	def __init__(self, lato):
		self.nome = 'Quadrato'
		self.lato = lato
	def perimetro(x):
		return x.lato * 4
	def area(x):
		return x.lato**2

class Triangolo:
	def __init__(self, lato):
		self.nome = 'Triangolo'
		self.lato = lato
	def perimetro(x):
		return x.lato * 4
	def area(x):
		return x.lato * 3.14

class Pentagono:
	def __init__(self, lato):
		self.nome = 'Pentagono'
		self.lato = lato
	def perimetro(x):
		return x.lato * 5
	def area(x):
		return x.perimetro() * 0.688 / 2
#definiamo una funzione che stampi un interfaccia così da migliorare l' esperienza utente
def Interfaccia():
	print('Programma che dato il lato calcola perimetro ed area di vari poligoni')
	print('Scegli poligono:')
	print('1. Quadrato')
	print('2. Triangolo')
	print('3. Pentagono')
#Dichiariamo una funzione che stampi con una buona formattazione i dati che ci interessano;
# -nome del poligono
# -Lato del poligono
# -Perimetro del poligono
# -Area del poligono
def Stampa(poly):
	print('RISULTATO')
	print('Nome ',poly.nome)
	print('Lato: ', poly.lato)
	print('Perimetro: ', poly.perimetro())
	print('Area: ', poly.area())
#MAIN PROGRAM
Interfaccia() # chiamiamo una funzione
n = int(input('> ')) #Inseriamo un valore che corrisponde ad un poligono
l = int(input('Lato > ')) #Inseriamo un valore che corrisponde al lato del poligono
#Inseriamo ogni oggetto ( poligono ) in un Array per consentirci di creare un 'interruttore multiplo'
#più 'elegante' di if... elif... elif... else
switch = [Quadrato(l), Triangolo(l), Pentagono(l)]
#Utilizziamo TRY perchè nel caso il valore (n) non fosse valido il programma esegue,
#EXCEPT il quale a compito di stampare a scermo la spiegazione dell'errore
try:#Prova ad eseguire i comandi:
	x = switch[n-1] #X sara l'oggetto selezionato dall'array [1]
	Stampa(x) # chiamiamo una funzione
except: #Nel caso TRY non viene eseguito allora esegui:
	print('Numero poligono non valido')

input('Premi un tasto qualsiasi per uscire...')
# NOTE
# [1] - Utilizzo n-1 perchè in programmazione la numerazione dell' array inizia da 0
#		nell' interfaccia la numerazione inizia da 1

